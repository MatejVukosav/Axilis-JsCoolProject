import React, { Component } from 'react';
import SearchBox from './SearchBox';


class Header extends Component {
    render() {
        return (
            <div className="row">
                <h1 className="col-md-12">{this.props.text}</h1><br/>
            </div>
        );
    }
}

export default Header;