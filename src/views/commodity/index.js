import React from 'react'

import Carousel from '../../components/carousel'
import Products from '../../components/product'
import Title from '../../components/title'

const Commodity = () => {
    return (
        <>
            <Carousel />
            <Title>商品列表</Title>
            <Products />
        </>
    )
}

export default Commodity