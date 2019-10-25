import React, { Component } from 'react';
import './App.css';
import CardSets from './CardSets'
import Cards from './Cards';
import CardAbout from './CardAbout';
import NotFound from '../components/NotFound'
import { createBrowserHistory as createHistory } from 'history'
import { Switch, Link, Router, Route } from 'react-router-dom'


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
          <Switch>
            <Route exact path={`/`} component={CardSets} />
            <Route path={`/cardsSetCode=:cardsData`} component={Cards} />
            <Route path={`/cards/:cardAboutData`} component={CardAbout} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
