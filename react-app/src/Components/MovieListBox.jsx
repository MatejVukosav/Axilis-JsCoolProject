import React, { Component } from 'react';
import Movie from './Movie.jsx';


import Movie from './Movie.jsx';

class MovieListBox extends Component {
  render() {
    var movieComponents = this.props.movies.map((m, index) => {
      return (<Movie key={ m._id } movie={ m } index={ index } setMovieFavouriteChangedEvent={ this.props.setMovieFavouriteChangedEvent } removeFromFavouritesEvent={this.props.removeFromFavouritesEvent}></Movie>);
    });

    return (
      <div>
          { movieComponents}
      </div>
      );
  }
}

export default MovieListBox;