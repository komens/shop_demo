import React from 'react'
import { Empty } from 'antd'
import OrderTable from "./orderTable"

const OrderList = ({orderList}) => {
    return (
            orderList.length > 0 ? orderList.map((order,index) => <OrderTable key={index} order={order} />) : <Empty description="暂时没有历史订单，赶快去选购吧！" />
    )
}
export default OrderList