import React from 'react'
import { Table, InputNumber, Button, Typography, notification, Icon, message } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose, withHandlers, withState } from 'recompose'

import { countChange, deleteProduct, selectProduct, settleAccounts } from '../../store/cartStore'

// 表的头部
const columns = [
    {
      title: '商品名称',
      dataIndex: 'image',
      render: src => <img src={src} alt="" />,
    }, {
      title: '商品描述',
      dataIndex: 'desc',
    }, {
      title: '单价',
      dataIndex: 'price',
    }, {
        title: '购买数量',
        dataIndex: 'number',
        render: count => <NumberInput count={count} />
    }, {
        title: '总价',
        dataIndex: 'count',
    }, {
        title: '',
        dataIndex: 'delete',
        render: cartIndex => <DeleteButton cartIndex={cartIndex} /> //这里的index为cartIndex
    }
  ];
  const { Title, Text } = Typography;


// 表格输入框
const NumberInputTemp = ({count, handleCountChange}) => {
  return <InputNumber min={1} defaultValue={count.num} onChange={handleCountChange} />
}
const NumberInput = compose(
  connect((state)=>({}),
    { countChange }
  ),
  withHandlers({
    handleCountChange: ({count, countChange}) =>(value) => {
      countChange(count.index,value)
    }
  })
)(NumberInputTemp)

// 表格删除按钮
const DeleteButtonTemp = ({handleDelete}) => {
  return <Button type="link" onClick={handleDelete}>删除</Button>
}
const DeleteButton = compose(
  connect(
    ()=>({}),
    {
      deleteProduct
    }
  ),
  withHandlers({
    handleDelete: ({deleteProduct, cartIndex}) => () => {
      deleteProduct(cartIndex)
    }
  })
)(DeleteButtonTemp)


// 购物车总页面
const CartProduct = ({cartProducts=[], allCount=0, rowSelection={}, handleSettleClick, isSettle, ...props}) => {
    return (
        <div className="cart">
          <Table rowSelection={rowSelection} columns={columns} dataSource={cartProducts} locale={{emptyText:'购物车是空的，快去选购吧！'}} />
          <div className="settle">
            <Title level={4} className="all-count">
              总价：<Text type="warning" className="money">{allCount}</Text> 元
            </Title>
            <Button type="primary" loading={isSettle} shape="round" icon="shop" className="settle-btn" onClick={handleSettleClick}>结算</Button>
          </div>
        </div>
    )
}


export default compose(
  connect(
    // map State
    (store) => {
      return {
        cartProducts: store.cart.cartProducts,
        products: store.cart.products,
        selectedProducts: store.cart.selectedProducts
      }
  }, {
    selectProduct,
    settleAccounts
  },
  // map props
  ({cartProducts, products, selectedProducts }, {selectProduct, settleAccounts})  => {
    // 根据购物车索引得到物品具体内容
    cartProducts = cartProducts.map(
        ({id, index, count}, cartIndex) => {
          return {
            // key: id, 这里不用id是为了后面号取索引(用于默认选中项)
            key: index,
            image: products[index].image,
            desc: products[index].desc,
            price: products[index].price,
            number: {id:id, index:cartIndex, num:count},
            count: products[index].price * count,
            delete: cartIndex
          }
      })
    // 表格勾选函数
    const rowSelection = {
      hideDefaultSelections: true,
      // selectedRowKeys: [...selectedProducts], // 此处设置默认选择项
      onChange: (selectedRowKeys, selectedRows) => {
        const selectArr = selectedRows.map(item => {
          return item.delete
        })
        selectProduct(selectArr)
      }
    }
    // 计算勾选商品的价格
    let allCount = 0
    selectedProducts.forEach(index => {
        allCount += cartProducts[index].count
    })
    return {
      cartProducts,
      rowSelection,
      selectedProducts,
      selectProduct,
      allCount,
      settleAccounts
    }
  }),
  withRouter,
  withState('isSettle', "setIsSettle", false),
  withHandlers({
    handleSettleClick: ({allCount, settleAccounts, history, setIsSettle}) => () => {
      // 判断价格
      if(allCount > 0) {
        // 如果价格不为0 结算
        settleAccounts(allCount)
        setIsSettle(true)
        notification.open({
          message: '结算成功',
          duration: 2,
          description:
            `感谢您光临小店，您一共消费${allCount}元，即将为您跳转订单页面。。。`,
          icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
          onClose: ()=>{
            history.push('/order')
          }
        })
      } else {
        // 其他情况不结算
        message.error('结算失败！请选择需要购买的商品。', 1)
      }
    }
  })
)(CartProduct)