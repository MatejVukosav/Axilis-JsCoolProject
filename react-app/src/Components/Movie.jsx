import React, {Component} from 'react';
import {Col, Thumbnail} from 'react-bootstrap/lib';

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let MovieInfo
        fetch("http://www.omdbapi.com/?=" + this.props.id)
        .then((response) => response.json())
        .then((movie) )
            console.
        )
    }

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