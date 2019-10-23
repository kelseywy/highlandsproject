import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Product extends React.Component {
	render () {
		return (
			<div>
		        <h4>{ this.props.name }</h4>
		        <p>{ this.props.upc }</p>
		    </div>
			)
	}
};
