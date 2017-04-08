import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
     
          { this.props.movie.title }
          <button onClick={ () => this.props.setMovieFavouriteChangedEvent(this.props.movie._id, !this.props.movie.isFavourite } className="btn btn-default">
            <span className={ this.props.movie.isFavourite ? "" : "" }></span>
          </button>
          <button className="" onClick={()=> this.props.removeFromFavouritesEvent(this.props.movie._id)}>
            <span className=""></span>
          </button>
      );
  }
}

export default Movie;