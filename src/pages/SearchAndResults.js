import React from 'react';

import SearchForm from '../components/Search';
import SearchResults from '../components/Results';

import '../styles/searchAndResults.css';

const SearchAndResults = () => {
  return (
    <div className="container">
      <h3 className="search">Search after gists</h3>
      <SearchForm />
      <SearchResults />
    </div>
  );

}

export default SearchAndResults;