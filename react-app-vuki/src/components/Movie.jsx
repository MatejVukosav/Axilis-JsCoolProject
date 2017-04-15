import React, {Component} from 'react';
import './MovieGallery.css';

class Movie extends Component {

    componentDidMount() {}

    render() {
        const movie = this.props.movie;
        const title = movie.title;
        const year = movie.year;
        const type = movie.type
        const posterElement = movie.poster
        //console.log(movie)

        return (

            <div className="movie-card">
                <div onClick={() => this.props.openMovieDetails(this.props.movie)}>
                    <img alt="slika filma" className="img-container" src={posterElement}/>
                </div>

                <div className="movie-details-container">
                    <div
                        className="movie-details-title"
                        onClick={() => this.props.openMovieDetails(this.props.movie)}>{title}
                        ({year})</div>

                    <div className="movie-details-director-container">Type:
                        <label className="movie-details-director">{type}</label>

                        <button
                            onClick={() => this.props.setMovieFavoriteChangeEvent(this.props.movie._id, !this.props.movie.isFavorite)}
                            className="btn btn-default">
                            <span
                                className={this.props.movie.isFavorite
                                ? "glyphicon glyphicon-star"
                                : "glyphicon glyphicon-star-empty"}></span>
                        </button>
                        
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Movie;
