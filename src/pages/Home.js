import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <Header title="amazing recipes">
        <Link to="/recipes" className="text-uppercase btn btn-secondary btn-lg mt-3">
          search recipes
        </Link>
      </Header>
    )
  }
}
export default Home;
