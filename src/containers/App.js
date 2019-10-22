import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardSets from './CardSets'
import Cards from './Cards';
import CardAbout from './CardAbout';
import { createBrowserHistory as createHistory } from 'history'
import { Link, Router, Route } from 'react-router-dom'


const history = createHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="headerNav">
            <Link className='Link cardLink' to={`/`}>
              <span className='headerNav_item h3'> Sets </span>
            </Link>
          </div>
        </div>
        <Route exact path={`/`} render={(props) => <CardSets {...props} cardSetsData={this.props.allSets} />} />
        <Route path={`/cardsSetCode=:cardSetsData`} render={(props) => <Cards {...props} />}/>
        <Route path={`/cards/:cardAboutData`} render={(props) => <CardAbout {...props} />}/>
      </Router>
    );
  }
}

export default App;
