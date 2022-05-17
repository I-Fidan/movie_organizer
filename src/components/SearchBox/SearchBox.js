import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    api=()=>{
        fetch(`http://www.omdbapi.com/?s=${this.state.searchLine}&apikey=a3ae0397`)
  .then(response => response.json())
  .then(data => {
      for(let i=0;i<=data.Search.length;i++){
    console.log(data.Search[i].Poster);
    console.log(data.Search[i].Title);
    console.log(data.Search[i].Year);
  }
  })
  .catch(error => {
    console.log(`Произошла ошибка: ${error.message}`);
  });

    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                    Search movie by title:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="For example, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                    onClick={this.api}
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;