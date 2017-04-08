import React, { Component } from 'react';
import {Col, Thumbnail} from 'react-bootstrap/lib';


class MovieInfoComponent extends Component {
  render() {
    return (
      <div>
         <Col sm={6} md={3}>
                <Thumbnail src={this.props.image}>
                </Thumbnail>
            </Col>
            <h3>Plot</h3>
            <p>{this.props.plot}</p>
            <h3>Actors</h3>
            <p>{this.props.actors}</p>
            <h3>Directors</h3>
            <p>{this.props.directors}</p>
            <h3>Awards</h3>
            <p>{this.props.awards}</p>
      </div>
      );
  }
}

export default MovieInfoComponent;

