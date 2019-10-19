import React from "react"
import PropTypes from "prop-types"
class Products extends React.Component {
  render() {
    return (
      <div>
        <h1>All Users</h1>
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array
};
export default Products
