import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import 'bootswatch/superhero/bootstrap.css';
import Movie from './Components/Movie';

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
        <h1><Movie id="tt0106062"/></h1>
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