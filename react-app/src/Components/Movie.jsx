<<<<<<< HEAD
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
=======
import React, {Component} from 'react';
import {Col, Thumbnail} from 'react-bootstrap/lib';

class Movie extends Component {
    

    render() {
        return (
            <Col sm={6} md={3}>
                <Thumbnail src={this.props.image}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                </Thumbnail>
            </Col>
        );
    }
>>>>>>> 8be8084840d47ff61d2eaa4e5122845ac9bbbd39
}

export default Movie;