import React, {Component} from 'react';
import './App.css';

import LoginComponent from './components/LoginComponent.jsx'
import HomeComponent from './components/HomeComponent.jsx'
import NotFound from './components/NotFound.jsx'
//import {Redirect} from 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import configureStore from './store/configureStore'; import { Provider } from
// 'react-redux' import {bindActionCreators} from 'redux'; import * as
// loginActions from '../actions/login.action'; Add the reducer to your store on
// the `routing` key
/*const store = createStore(combineReducers({
  ...reducers,
  routing: routerReducer
}))
*/
// Create an enhanced history that syncs navigation events with the store const
// history = syncHistoryWithStore(browserHistory, store) const store =
// configureStore();

class App extends Component {


  render() {
    //const {state, actions} = this.props;

    return (
      <Router >
        < div >
          <Switch>
            <Route exact path='/' component={HomeComponent}/>
            <Route exact path="/login" component={LoginComponent}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
//   <Provider store={store}>  </Provider >);
/*export default connect(state => ({
    state: state.login
  }),
  (dispatch) => ({
    actions: bindActionCreators(loginActions, dispatch)
  })
)(App);
*/