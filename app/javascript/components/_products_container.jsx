import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ProductsContainer extends React.Component{
	componentDidMount(){
		this.fetchProducts();
	},

	fetchProducts() {

		$.ajax({
	      url: this.props.productsPath,

	      dataType: 'json',

	      success: function(data) {
	        this.setState({products: data});
	      }.bind(this),

	      error: function(data) {
	      	this.setState({products: []});
	      }.bind(this)
	    });
	},

	searchProducts(event) {
		if (event.target.value) {
			$.ajax({
		      url: this.props.searchPath+"?query="+event.target.value,

		      dataType: 'json',

		      success: function(data) {
		        this.setState({products: data});
		      }.bind(this),

		      error: function(data) {
		      	this.setState({products: []});
		      }.bind(this)
		    });
		}
		else{
			this.fetchProducts();
		}

	},

	getInitialState() {
		return { products: [] };
	},

	render() {

		return (
			<div>
				<Products products={this.state.products} />
				<ProductsSearch searchPath={this.props.searchPath} submitPath={this.searchProducts} cancelPath={this.fetchProducts}/>
			</div>
			);

	}
};
