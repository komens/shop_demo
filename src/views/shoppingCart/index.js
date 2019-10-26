import React from 'react'
import Title from '../../components/title'
import CartProduct from '../../components/cartProduct'
import '../../assets/styles/shoppingCart.css'

const ShoppingCart = () => {
    return (
        <>
            <Title>购物车</Title>
            <CartProduct />
        </>
    )
}

export default ShoppingCart