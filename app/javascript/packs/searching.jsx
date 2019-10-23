import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class SearchExample extends React.Component {
   state = { searchString: '' }
   handleChange = (e) => {
     this.setState({ searchString:e.target.value });
   }
   render() {
     var libraries = this.props.items,
         searchString = this.state.searchString.trim().toLowerCase();
     if (searchString.length > 0) {
       libraries = libraries.filter(function(i) {
         return i.name.toLowerCase().match( searchString );
       });
     }
     return (
       <div>
          <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..."/>
          <ul>
            {libraries.map(function(i) {
                return <li key={i.id}>Product Name: {i.name} UPC: {i.upc} Available On: {i.available_on}</li>;
            }) }
          </ul>
		    </div>
     );
   }
}

// Constant, library
var libraries = gon.products;

// put input and display on page

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SearchExample items={libraries} />,
    document.getElementById('search')
  )
 })
