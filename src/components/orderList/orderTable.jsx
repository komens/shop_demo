import React from 'react'
import { Table } from 'antd';
import TableHeader from "./tableHeader"
import TableFooter from './tableFooter'

// const src = "//img.alicdn.com/imgextra/i1/3190804037/TB2GgUvh4tmpuFjSZFqXXbHFpXa_!!3190804037.jpg_80x80.jpg"
const columns = [
    {
        title: '商品',
        dataIndex: 'product',
        align: "center",
        width: "30%",
        render: product => <div className="image-wrap"><img src={product.image} alt="" /><div className="product-name"><span>{product.name}</span></div></div> ,
    },
    {
        title: '介绍',
        dataIndex: 'desc',
        align: "center",
        render: desc => <span dangerouslySetInnerHTML={{__html: desc}}></span>
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