'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressWinston = require('express-winston');
const winstonInstance = require('winston');
const router = express.Router();

const debug = require('debug')('axiliscoolproject:server');
const http = require('http');

const authRoutes = require('./routes/auth.routes')
const indexRoutes = require('./routes/index.routes');
const favoritesRoutes = require('./routes/favorites.routes');

const {authenticationMiddleware} = require('./middlewares/authentication.middleware');

const app = express();
const config = require('./config');

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '127.0.0.1');
  next();
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

//define routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', router);
router.use('/auth', authRoutes);
router.use('/users', favoritesRoutes);
router.use('/', authenticationMiddleware, indexRoutes);

// react app.use('/static', express.static(path.join(__dirname, 'react',
// 'build', 'static'))); app.use('/*', (req, res) =>
// res.sendFile('./react/build/index.html', {root: __dirname}));

const mongoose = require('mongoose');
//mongoose.connect(process.env['MONGO_STRING'],
mongoose.connect(config.data.MONGO_STRING, (err) => {
  if (err) {
    console.log(config.MONGO_STRING);
    return console.error(err);
  }
  console.log('Database connection successful!');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req
    .app
    .get('env') === 'development'
    ? err
    : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  const bind = (typeof addr === 'string')
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

//winston
app.use(expressWinston.logger({
  winstonInstance, meta: true, // optional: log meta data about request (defaults to true)
  msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
  colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
}));