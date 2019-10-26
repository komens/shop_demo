import React from 'react'
import { connect } from "react-redux";
import { Row, Col } from 'antd';

import ProductWrap from './productWrap'
import { addProduct } from '../../store/cartStore'

import '../../assets/styles/product.css'


const Products = ({ products, addProduct }) => {
    return (
        <div className="products-wrap">
            <Row>
                {
                    products.map((product, index) => (
                        <Col key={product.id} sm={12} md={6} lg={4}><ProductWrap className="product-item" onClick={addProduct} product={product} index={index} /></Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default connect( store=>({
    products: store.cart.products
}), {
    addProduct
})(Products)