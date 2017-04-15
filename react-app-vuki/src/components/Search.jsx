import React, {Component} from 'react';
import Button from './Button'

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ""
        };

        this.search = this
            .search
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);

    }

    componentDidMount() {
        //resetirat vrijednosti i search?
        
    }

    search() {
        this.props.handleChange (this.state.searchText);
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="control-group">
                    <label className="control-label">Search</label>
                    <div className="controls">

                        <input
                            ref="search"
                            type="text"
                            placeholder={this.props.placeholder}
                            className=" form-control"
                            onChange={this.handleChange}/>

                        <Button text='Search' clickEventMethod={this.search}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default Search;