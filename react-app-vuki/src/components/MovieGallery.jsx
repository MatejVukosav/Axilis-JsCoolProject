import React, {Component} from 'react';
import Movie from './Movie.jsx';
import Search from './Search.jsx';

import './MovieGallery.css';
let movieApiEndpoint = 'http://www.omdbapi.com/?s='

class MovieGallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            isError: false,
            isLoading: false,
            movies: [],
            searchQuery: 'batman'
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

    }

    componentDidMount() {
        this.getMovies(this.state.searchQuery);
    }

    getMovies(query) {
        fetch(movieApiEndpoint + query, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }

        }).then((res) => {
            return res.json()
        }).then((apiMovies) => {

            const newMovieList = apiMovies['Search'].map((movie) => {

                const newMovie = {
                    _id: movie['Poster'],
                    title: movie['Title'],
                    poster: movie['Poster'],
                    year: movie['Year'],
                    type: movie['Type'],
                    imdbId: movie['imdbID'],
                    isFavorite: true
                }
                return newMovie;
            })

            this.setState({movies: newMovieList, isError: false, isLoading: false})
        }).catch((_err) => {
            console.log('error');
            this.setState({movies: [], isError: true, isLoading: true})
            console.log(_err);
        });
    }

    handleSearch(query) {
        this.setState({searchQuery: query})
        this.getMovies(query);
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
            .state
            .movies
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

export default MovieGallery;