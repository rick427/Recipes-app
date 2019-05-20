import React from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

export default function Default() {
  return (
    <Header title="404" styleClass='default-hero'>
      <h2 className="text-light text-uppercase">url does not exist! :( </h2>
      <Link to="/" className="text-uppercase btn btn-secondary btn-large mt-3">
        return home
      </Link>
    </Header>
  )
}
 