import React, {Component} from 'react';
import {Col, Thumbnail} from 'react-bootstrap/lib';

class Movie extends Component {

    render() {
        return (
            <Col sm={6} md={3}>
                <Thumbnail src={this.props.image}>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <button onClick={this.props.setMovieFavouriteChangedEvent} className="btn btn-primary"></button>
                </Thumbnail>
            </Col>
        );
    }
}

export default Movie;