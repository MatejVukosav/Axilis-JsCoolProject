import React, { Component } from 'react';
import SearchBox from './SearchBox';


class Header extends Component {
    render() {
        return (
            <div className="row">
                <h1 className="col-md-12">{this.props.text}</h1><br/>
<<<<<<< HEAD
                <SearchBox></SearchBox>
=======
>>>>>>> 8be8084840d47ff61d2eaa4e5122845ac9bbbd39
            </div>
        );
    }
}

export default Header;