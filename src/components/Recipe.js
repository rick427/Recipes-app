import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Recipe extends Component {
  render() {
    const {image_url, title, source_url, publisher, recipe_id} = this.props.recipe;
    //console.log(recipe);
    return (
      <div className="col-10 col-md-6 col-lg-4 my-3 text-center">
        <div className="card" style={{height: '100%'}}>
          <img 
            src={image_url} 
            style={{height: '14rem'}} 
            className="img-card-top" 
            alt="recipe"
          />

          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h5 className="text-warning text-slanted">
              provided by {publisher}
            </h5>
          </div>

          <div className="card-footer">
            <Link to={`/recipes/${recipe_id}`} className="btn btn-primary text-capitalize">
               details
            </Link>
            <a 
              href={source_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-warning mx-4 text-capitalize">recipe url
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Recipe;
