import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class SearchExample extends React.Component {
/*  constructor(props) {
    super(props);
    // var self = this;
    this.handleChange = this.handleChange.bind(this);
  }*/
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
                return <li key={i.name}>{i.name} <a href={i.url}>{i.url}</a></li>;
            }) }
          </ul>
       </div>
     );
   }
}

// Constant, library
var libraries = [
    { name: json.name, url: json.upc }

];

// put input and display on page

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SearchExample items={libraries} />,
    document.getElementById('app')
  )
 })
