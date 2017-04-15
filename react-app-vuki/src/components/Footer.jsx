import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <span>@Author {this.props.author}</span>
            </div>
        );
    }
}

export default Footer;