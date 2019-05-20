import React, { Component } from 'react';
import {recipeData} from '../data/tempDetails';
import { Link } from 'react-router-dom';

class SingleRecipe extends Component {
  constructor(props){
    super(props);
    const routeId = this.props.match.params.id;

    this.state = {
      //recipe: recipeData,
      recipe: {},
      id: routeId,
      loading: true
    };  
  }

  async componentDidMount(){
    const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
    try{
      const res = await fetch(url);
      const resData = await res.json();
      this.setState({recipe: resData.recipe, loading: false })
    }
    catch(err){
      console.log(err);
    }
  }

  render() {
    const {
        image_url, 
        publisher, 
        publisher_url, 
        source_url, 
        title, 
        ingredients
    } = this.state.recipe;

    if(this.state.loading){
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto my-3">
              <span className=" text-uppercase display-4 text-muted">loading....</span> {' '}<i className="fas fa-cog fa-6x fa-spin text-danger mt-5 "/>
            </div>
          </div>
        </div>
      )
    }
    else{
      return(
        <div className="container my-5">
           <div className="row">
             <div className="col-10 mx-auto col-md-6 my-3">
               <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize">
                 back to recipes list
               </Link>
               <img src={image_url} alt="rp" className="d-block w-100" style={{maxHeight: "30rem"}}/>
             </div>

             <div className="col-10 mx-auto col-md-6 my-3">
               <h6 className="text-uppercase">{title}</h6>
               <h6 className="text-warning text-capitalize text-slanted">
                 provided by {publisher}
               </h6>
               <a 
                  href={publisher_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary mt-2 text-capitalize">
                    publisher webpage
               </a>
               <a 
                  href={source_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-success mt-2 mx-2 text-capitalize">
                    recipe url
               </a>
               <ul className="list-group mt-4">
                 <h2 className="mt-3 mb-4">Ingredients</h2>
                   {ingredients.map((item,index)=> {
                     return (
                       <li key={index} className="text-slanted list-group-item">
                         {item}
                       </li>
                     )
                   })}
               </ul>
             </div>
           </div>
        </div>
      )
    }
    
  }
}
export default SingleRecipe;
