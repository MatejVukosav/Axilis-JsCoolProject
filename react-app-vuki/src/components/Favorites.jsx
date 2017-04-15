import React, {Component} from 'react';
import Movie from './Movie.jsx';
import Search from './Search.jsx';

import './MovieGallery.css';
const serverApiFavorites = 'http://localhost:3000/api/v1/users/matej/favorites'
let movieApiEndpoint = 'http://www.omdbapi.com/?i='

class Favorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            isError: false,
            isLoading: false,
            movies: [],
            favoriteIds: [ ],
            searchQuery: ''
        };

        this.handleSearch = this
            .handleSearch
            .bind(this)
        this.getMovies = this
            .getMovies
            .bind(this);
        this.setMovieFavoriteChangeEvent = this
            .setMovieFavoriteChangeEvent
            .bind(this);
        this.openMovieDetails = this
            .openMovieDetails
            .bind(this);

        this.getFavoriteIds = this
            .getFavoriteIds
            .bind(this);

        this.getMovies = this
            .getMovies
            .bind(this);

    }

    componentDidMount() {
        this.getFavoriteIds();
    }

    getFavoriteIds() {
        fetch(serverApiFavorites, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then((res) => {
            return res.json()
        }).then((favorites) => {
            this.setState({favoriteIds: favorites, isError: false, isLoading: false})
            this.getMovies(favorites);
        }).catch((_err) => {
            console.log('error');
            this.setState({favorites: [], isError: true, isLoading: true})
            console.log(_err);
        });
    }

    //dohvati filmove s interneta po idiju
    getMovies(favoriteIds) {
        favoriteIds.map((imdbId) => {
            this.getMovie(imdbId);
            return imdbId;
        })
    }

    //dohvati film s interneta po idiju
    getMovie(imdbId) {
        fetch(movieApiEndpoint + imdbId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }

        }).then((res) => {
            return res.json()
        }).then((movie) => {
            const newMovie = {
                _id: movie['Poster'],
                title: movie['Title'],
                poster: movie['Poster'],
                year: movie['Year'],
                type: movie['Type'],
                imdbId: movie['imdbId'],
                isFavorite: true
            }

            let movieList = this.state.movies;
            movieList.push(newMovie);

            this.setState({movies: movieList});

            return newMovie;
        }).catch((_err) => {
            console.log('error');
            this.setState({movies: [], isError: true, isLoading: true})
            console.log(_err);
        });
    }

    handleSearch(query) {
        this.setState({searchQuery: query})
    }

    getFilteredMovies() {
        const filter = this
            .state
            .searchQuery
            .toLowerCase();
        return this
            .state
            .movies
            .filter(m => m.title && m.title.toLowerCase().startsWith(filter));
    }

    setMovieFavoriteChangeEvent(_id, isFavorite) {
        console.log('favorite ' + isFavorite)
        let newListOfMovies = this
            .state
            .movies
            .map(m => {
                if (m._id !== _id) {
                    return m;
                }
                var newMovieObject = Object.assign({}, m, {isFavorite: isFavorite});

                return newMovieObject;

            });

        this.setState({movies: newListOfMovies});
        //TODO osvjeziti na serveru stanje
    }

    openMovieDetails(movie) {
        this
            .props
            .openMovieDetails(movie);
    }

    render() {

        const movieComponents = this
            .getFilteredMovies()
            .map((m, index) => {

                return (
                    <Movie
                        key={m._id}
                        movie={m}
                        index={index}
                        setMovieFavoriteChangeEvent={this.setMovieFavoriteChangeEvent}
                        openMovieDetails={this.openMovieDetails}></Movie>
                );
            });

        return (

            <div className="row">
                <Search handleChange={this.handleSearch} placeholder={this.state.searchQuery}/> {movieComponents}
            </div>
        );
    }
}
export default Favorites;