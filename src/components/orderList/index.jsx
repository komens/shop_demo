import React from 'react'
import OrderTable from "./orderTable"

const OrderList = ({orderList,}) => (
    <>
    {
        orderList.map((order,index) => <OrderTable key={index} order={order} />)
    }
    </>
)
export default OrderList