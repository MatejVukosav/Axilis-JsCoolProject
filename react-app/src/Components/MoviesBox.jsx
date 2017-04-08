import React, {Component} from 'react';
import Movie from './Movie.jsx';


class MoviesBox extends Component {
    render() {
        var movieComponents = this
            .props
            .ids
            .map((id) => {
                let title;
                let year;
                let request = "http://www.omdbapi.com/?i=" + id;
                fetch(request).then((response) => response.json()).then((movie) => {
                    title = movie["Title"];
                    year = movie["Year"];
                });
                return (<Movie title={title} year={year}/>);
            });

        return (
            <div>
                {movieComponents}
            </div>
        );
    }
}

export default MoviesBox;