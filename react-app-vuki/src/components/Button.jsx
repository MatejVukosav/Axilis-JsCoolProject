import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.clickEventMethod} className="btn btn-primary">
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;