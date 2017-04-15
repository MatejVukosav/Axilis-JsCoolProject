import React, {Component} from 'react';

class EditText extends Component {

    render() {
        return (
            <div >
                <div>
                    <label htmlFor="my-input" className="my-label">{this.props.text}</label>
                </div>
                <div>
                    <input
                        onChange={this.props.inputChangedEvent}
                        label={this.props.labelText}
                        value={this.props.value}
                        type="text"/><br/>
                </div>
            </div>
        );
    }
}

export default EditText;