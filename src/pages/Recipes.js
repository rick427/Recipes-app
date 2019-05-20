import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { recipeData } from "../data/tempList";

class Recipes extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: recipeData,
      search: ''
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({search: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Search 
            search={this.state.search} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    )
  }
}
export default Recipes;
