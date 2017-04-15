import React, {Component} from 'react';

class MovieDetails extends Component {
    render() {

        const movie = this.props.movie;

        return (
            <Movie
                key={movie._id}
                movie={movie}
                index={movie._id}
                setMovieFavoriteChangeEvent={this.setMovieFavoriteChangeEvent}
                openMovieDetails={this.openMovieDetails}></Movie>
        );
    }
}

export default MovieDetails;