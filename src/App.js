import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <>
         <Navbar/>
          <Switch>
            <Route exact path='/' render={() => <Home/>} />
            <Route exact path='/recipes' render={() => <Recipes/>} />
            <Route exact path='/recipes/:id' render={() => <SingleRecipe/>} />
            <Route component={Default}/>
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
