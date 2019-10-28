import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import ProductWrap from "./productWrap";
import { addProduct } from "../../store/cartStore";

import "../../assets/styles/product.css";

const Products = ({ newProducts, addProduct }) => {
  return (
    <div className="products-wrap">
      <Row>
        {newProducts.map((product, index) => (
          <Col key={product.id} xs={24} sm={12} md={6} lg={4}>
            <ProductWrap
              className="product-item"
              onClick={addProduct}
              product={product}
              index={product.index}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default connect(
  store => ({
    products: store.cart.products,
    searchProducts: store.cart.searchProducts
  }),
  {
    addProduct
  },
  ({ products, searchProducts }, { addProduct }, ...self) => {
    const newProducts = searchProducts.length > 0 ? searchProducts : products;
    return {
      newProducts: newProducts,
      addProduct,
      ...self
    };
  }
)(Products);
