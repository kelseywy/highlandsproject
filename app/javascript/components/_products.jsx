import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Products extends React.Component {
	render() {
		var showProducts = (product) => <Product name={product.name} upc={product.upc} key={product.id}/>;
		return <ul>{this.props.products.map(showProducts)}</ul>;
	}
};
