import React from 'react'
import { Table } from 'antd';
import TableHeader from "./tableHeader"
import TableFooter from './tableFooter'

const src = "//img.alicdn.com/imgextra/i1/3190804037/TB2GgUvh4tmpuFjSZFqXXbHFpXa_!!3190804037.jpg_80x80.jpg"
const columns = [
    {
        title: '商品',
        dataIndex: 'image',
        align: "center",
        render: src => <div className="image-wrap"><img src={src} alt="" /><span>我的是阿吉</span></div> ,
    },
    {
        title: '介绍',
        dataIndex: 'desc',
        align: "center"
    },
    {
        title: '单价',
        dataIndex: 'price',
        align: "center"
    },
    {
        title: '数量',
        dataIndex: 'amount',
        align: "center"
    },
    {
        title: '总价',
        dataIndex: 'allCount',
        align: "center"
    },
];

const data = [
    {
        key: '1',
        image: src,
        price: '￥300,000.00',
        allCount: 789489,
        desc: 'New York No. 1 Lake Park',
        amount: 1
    },
    {
        key: '2',
        image: src,
        price: '￥300,000.00',
        allCount: 789489,
        desc: 'New York No. 1 Lake Park',
    },
    {
        key: '3',
        image: src,
        price: '￥300,000.00',
        allCount: 789489,
        desc: 'New York No. 1 Lake Park',
    },
];

const OrderList = ({order}) => {
    return (
        <Table
            className={"order-table"}
            columns={columns}
            dataSource={order.productsList}
            bordereds
            pagination={{hideOnSinglePage: true}}
            title={()=><TableHeader order={order} />}
            footer={()=><TableFooter order={order} />}
        />
    )
}


export default OrderList