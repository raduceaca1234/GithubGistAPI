import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleGist } from '../redux/gist/gistFunctions';
import Forks from '../components/Fork';
import Code from '../components/Code';
import ReactLoading from 'react-loading';
import '../styles/gistDetails.css';

class Details extends Component {

  componentDidMount() {
    const gistId = this.props.match.params.id;
    this.props.fetchSingleGist(gistId);
  }

  renderForks() {
    const { isLoading, error, forks } = this.props.singleGist;
    if (isLoading) {
      <div className="results-box-loader">
        <ReactLoading type={"spinningBubbles"} color={"#e45328"} height={100} width={100} />
      </div>
    }
    if (forks.length && !error) {
      return (
        <Forks forks={forks.slice(0, 3)} />
      );
    } else {
      return (
        <div class="alert alert-danger" role="alert">{error}</div>
      );
    }
  }

  async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {

    const { description } = this.props.location.state;

    return (
      <div className="container">
        <div className="details-box">
          <div className="badge badge-pill badge-primary" style={{ height: '50px', backgroundColor: '#007BFF', fontSize: '30px' }}>Details about the gist with gist id {this.props.match.params.id}</div>
          <p className="lead">{(description) || 'No Description'}</p>
          <div className="files-box">
            <p className="font-weight-bold">Gist files:</p>
            <ul className="indent-left">
              <Code file={this.props.match.params.id} />
            </ul>
          </div>
          <div className="forks-box">
            <p className="font-weight-bold">The last 3 forks:</p>
            {this.renderForks()}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleGist: state.singleGistReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleGist: (gistId) => {
      dispatch(fetchSingleGist(gistId));
    }
  }
}
let GistDetails = connect(mapStateToProps, mapDispatchToProps)(Details);
export default GistDetails;