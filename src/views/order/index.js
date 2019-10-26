import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, withState } from 'recompose'
import Title from '../../components/title'

const Order = (props) => {
    console.log(props)
    return (
        <>
            <Title>订单列表</Title>
        </>
    )
}

export default connect(
    store => ({
        orderList: store.cart.historyOrder
    })
)(Order)