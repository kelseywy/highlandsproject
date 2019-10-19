import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Product extends Component {

    constructor(props) {
      super(props);

      this.state = {
        term: '',
        autoCompleteResults: [],
        productSelected: {},
        showproductSelected: false
      };

      $.getJSON('/search?q=' + this.state.term)
        .then(response => this.setState({ autoCompleteResults: response.products }))
    }

    getAutoCompleteResults(e){
      this.setState({
        term: e.target.value
      }, () => {
        $.getJSON('/search?q=' + this.state.term)
          .then(response => this.setState({ autoCompleteResults: response.products }))
      });
    }

    render(){
      let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
        return <div key={index}>
          <h2>{response.name}</h2>
          <p>{response.upc }</p>
        </div>
      });

      return (
        <div>
          <input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getAutoCompleteResults.bind(this) } type='text' placeholder='Search...' />
          { autoCompleteList }
        </div>
      )
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Product />,
      document.getElementById('search')),
    )
  });
