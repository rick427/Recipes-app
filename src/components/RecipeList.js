import React, { Component } from 'react'
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    return (
      <div>
        Hello from recipe list
        <Recipe/>
      </div>
    )
  }
}
export default RecipeList;