import React, { Component } from 'react';
import LoginScreen from './Components/LoginScreen';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
          <input onChange={this.props.searchInputChangedEvent} label='movie title' value={this.props.searchValue} type="text"/><br/>
        </div>
    )}
}

export default SearchBox;
