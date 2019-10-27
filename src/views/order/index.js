import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, withState } from 'recompose'
import OrderList from '../../components/orderList'
import Title from '../../components/title'

import '../../assets/styles/order.css'

const Order = ({orderList, products}) => {
    return (
        <>
            <Title>订单列表</Title>
            <OrderList orderList={orderList} />
        </>
    )
}

export default connect(
    store => ({
        orderList: store.cart.historyOrder
    })
)(Order)