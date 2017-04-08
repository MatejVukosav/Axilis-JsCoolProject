import React, {Component} from 'react';
import {Col, Thumbnail} from 'react-bootstrap/lib';

class Movie extends Component {

    render() {
        return (
            <Col sm={6} md={3}>
                <Thumbnail src="">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.year}</h3>
                </Thumbnail>
            </Col>
        );
    }
}

export default Movie;