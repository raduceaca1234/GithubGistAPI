import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../styles/card.css';
import Badge from './Badge';

export default class Card extends PureComponent {
    render() {
        const {gistData} = this.props;
        const noOfFiles = Object.keys(gistData.files).length;
        return (
                <div className="col-md-4 col-sm-12 col-xs-12 mb-4">
                <div className="card card-shadow">
                    <div className="card-body">
                        <Link to={{pathname: `/${gistData.id}`, state: {description: gistData.description, files: gistData.files}}}>
                            <p className="truncate">{(gistData.description) || 'No Description'}</p>
                            <p className="text-secondary">{noOfFiles} {(noOfFiles > 1) ? 'Files' : 'File'}</p>
                            <Badge files={gistData.files}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    gistData: PropTypes.object.isRequired
}