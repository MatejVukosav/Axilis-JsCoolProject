import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import MovieInfoComponent from './Components/MovieInfoComponent'
import 'bootswatch/superhero/bootstrap.css';

const Navigation = () => {
    return (
        <div>
            <NavLink exact to="/">
                Favorites
            </NavLink>
            <NavLink exact to="/search">
                Search
            </NavLink>
            <NavLink exact to="/logout">
                Logout
            </NavLink>
        </div>
    )
};

const DummyFavorites = () => {
    return (
        <h1>Favorites</h1>
    )
};
const DummySearch = () => {
    return (
        <h1>Search</h1>
    )
};
const DummyLogout = () => {
    return (
        <h1>Logout</h1>
    )
};

const Dummy404 = () => {
    return (
        <h2 style={{
            color: "red"
        }}>
            <b>404</b>: This is not the page you are looking for
        </h2>
    )
}

setMovieFavorite(_id, isWatched) {
    let newListOfMovies = this.state.movies.map(m => {
      if (m._id !== _id) {
        return m;
      }
      var newMovieObject = Object.assign({}, m, {
        isFavorite: isFavorite
      });

      return newMovieObject;

      // Equivalent but worse variant:
      // let newObject = {
      //   name: m.name,
      //   _id : m._id,
      //   isWatched: change.isWatched
      // };

    // return newMovieObject;
    });

    this.setState({
      movies: newListOfMovies
    });
  }

  handleLoginInputChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  const WrappedFavorites = () => {
      return {
          <DummyFavorites setMovieFavoriteChangedEvent = {this.setMovieFavorite}></DummyFavorites>
      }
  }
     
  }


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <div style={{float: "right"}}>
                            <Navigation/>
                        </div>
                        <Switch>
                            <Route exact path="/" component={DummyFavorites}/>
                            <Route exact path="/search" component={DummySearch}/>
                            <Route exact path="/logout" component={DummyLogout}/>
                            <Route path="*" component={Dummy404}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;