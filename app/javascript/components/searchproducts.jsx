import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class SearchProducts extends React.Component {
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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SearchProducts />,
    document.body.appendChild(document.createElement('div')),
  )
})
