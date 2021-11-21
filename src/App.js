import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchAndResults from './pages/SearchAndResults';
import GistDetails from './pages/GistDetails';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h3 className="description">Github Gist API Assessment</h3>
      <Router>
        <Route path="/" exact={true} component={SearchAndResults}></Route>
        <Route path="/:id" component={GistDetails}></Route>
      </Router>
    </div>
  )
}

export default App;
