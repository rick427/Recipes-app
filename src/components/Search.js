import React, { Component } from 'react';

class Search extends Component {
  render() {
    const {search, handleChange, handleSubmit} = this.props;
    return (
      <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className="text-slanted text-capitalize">
                    search recipes with <strong className="text-orange">Food2Fork</strong>
                </h1>

                <form className="mt-4" onSubmit={handleSubmit}>
                    <label htmlFor="search" className="text-capitalize">
                        type the recipes separated by a comma
                    </label>
                    <div className="input-group">
                        <input 
                           type="text" 
                           name="search" 
                           className="form-control" 
                           placeholder="E.g: rice, chicken, eggs" 
                           value={search}
                           onChange={handleChange}
                        />
                        <div className="input-group-append">
                            <button type="submit" className="input-group-text bg-success text-light">
                                <i className="fas fa-search"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
export default Search;
