import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ProductSearch extends React.Component {
	render () {
		return (
			<div>
				<form ref="form" action={ this.props.searchPath } acceptCharset="UTF-8" method="get">
				<p><input ref="query" name="query" placeholder="Search here." onChange={ this.props.submitPath } /></p>
				</form>

				<a href="#" onClick={ this.props.cancelPath }>Cancel</a>
			</div>
			);
	}
};
