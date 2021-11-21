import React, { Component } from 'react';
import { fetchAllGists } from '../redux/gist/gistFunctions';
import {connect} from 'react-redux';

class Search extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        let given_input = this.inputRef.current.value.trim();

        if(given_input.length === 0) {
            return;
        }

        this.props.fetchAllGists(given_input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="searchform">
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Please enter the username you're looking for"
                  ref={this.inputRef}/>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllGists: (username) => {
            dispatch(fetchAllGists(username));
        } 
    }
}

let SearchForm = connect(null, mapDispatchToProps)(Search);
export default SearchForm;