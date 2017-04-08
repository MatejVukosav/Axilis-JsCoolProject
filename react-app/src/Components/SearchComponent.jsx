import React, { Component } from 'react';
import SearchBox from './SearchBox';
import MovieListBox from './MovieListBox';



class SearchComponent extends Component {
  render() {
    return (
      <div>
        <SearchBox></SearchBox><br/>
        <MovieListBox></MovieListBox>
      </div>
      );
  }
}

export default SearchComponent;