import React, { Component } from 'react';
import {connect} from 'react-redux';
import GistCard from './Card';
import ReactLoading from 'react-loading';

import '../styles/results.css';

class Results extends Component {

    render() {
        const {gists, username, isLoading, error} = this.props.allGists;

        if(isLoading) {
            return (
                <div className="results-box-loader">
                    <ReactLoading type={"spinningBubbles"} color={"#e45328"} height={100} width={100} />
                </div>
            );
        }

        return (
          <div className="results-box">
            {(gists.length && !error) ? (
                <div className="results_content">
                    <div className="search-results">
                        <div class="alert alert-success" role="alert" >
                            There are <strong>{gists.length}</strong> results for given username <strong>{username}</strong>
                        </div>
                    </div>
                    <div className="row">
                        {gists.map((gist, index) => {
                            return (
                                <GistCard key={gist.id} gistData={gist}/>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="error-box">
                    <p className="text-danger">{error}</p>
                </div>
            )}
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allGists: state.allGistsReducer,
    }
}

let SearchResults = connect(mapStateToProps, null)(Results);
export default SearchResults;