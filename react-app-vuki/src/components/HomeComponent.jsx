import React, {Component} from 'react';
//import {Redirect} from 'react-router';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MovieGallery from './MovieGallery.jsx'
import Favorites from './Favorites.jsx'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Movie from './Movie.jsx';
import '../App.css';
import LoginComponent from './LoginComponent.jsx'
//import {Redirect} from 'react-router';
import '../App.css';

class HomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            isError: false,
            isLoading: false,
            movie: {
                _id: 'Poster',
                title: 'Potrebno je kliknuti na neki film u searchu da se prikaze u detaljima',
                poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkF' +
                        'tZTYwNDMwMDk2._V1_SX300.jpg',
                year: '1993',
                type: 'Series',
                imdbId: 'tt0103776',
                isFavorite: true
            }
        };

        this.openMovieDetails = this
            .openMovieDetails
            .bind(this);
    }

    openMovieDetails(movie) {
        console.log('otvori detalje')
        this.setState({movie: movie});
        console.log(movie)

    }

    render() {

        const logout = () => {
            return (
                <div>
                    <LoginComponent/>
                </div>
            );
        };

        const error = () => {
            return (
                <div className="App">
                    {this.state.isError && <div style={{
                        color: "red"
                    }}>
                        Error
                    </div>}
                </div>
            )
        };

        const favorite = () => {
            return (
                <div>
                    <Favorites openMovieDetails={this.openMovieDetails}/>
                </div>
            );
        };

        const search = () => {
            return (
                <div>
                    <MovieGallery openMovieDetails={this.openMovieDetails}/>
                </div>
            );
        };

        const details = () => {
            console.log('detalji')
            return (
                <div>
                    <Movie movie={this.state.movie}/>
                </div>
            );
        };

        const NasLink = (props) => {
            return (
                <NavLink activeClassName="active" {...props}>
                    {props.children}
                </NavLink>
            );
        }

        if (!this.state.loggedIn) {
            // console.log('Nije ulogiran'); return (<Redirect to='/login'/>);
        } else {
            console.log('Ulogiran je');
        }

        return (

            <Router>
                <div className="App">
                    < Header text="Movie list"/>
                    <ul>
                        <NasLink exact to="/"></NasLink>
                        <NasLink to="/">Search</NasLink>
                        <NasLink to="/favorite">Favorite</NasLink>
                        <NasLink to="/details">Details</NasLink>
                        <NasLink to="/login">Logout</NasLink>
                    </ul>
                    <Route exact path="/" component={search}/>
                    <Route path="/favorite" component={favorite}/>
                    <Route path="/details" component={details}/>
                    <Route path="/login" component={logout}/>
                    <Route path="/" component={error}/>

                    < Footer author='Matej Vukosav'/>
                </div>
            </Router>
        )
    }
}

export default HomeComponent;