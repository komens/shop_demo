import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { Card, InputNumber, Button, message  } from 'antd';

const { Meta } = Card;

const ProductWrap = ({product, handleCartClick, index, count, ...props}) => {
    return (
        <Card
            hoverable
            className={props.className}
            cover={
            <img
                alt="example"
                src={product.image}
            />
            }
            actions={[
                <InputNumber min={1} defaultValue={1} style={{width: '50px'}} onChange={props.changeCount} />,
                <Button type="primary" shape="circle" icon="shopping-cart" onClick={handleCartClick}></Button>,
            ]}
        >
            <Meta
                title={"名称" + product.name}
                description={"单价：" + product.price}
            />
        </Card>
    )
}

export default compose(
    withState('count','changeCount',1),
    withHandlers({
        handleCartClick: (props) => () => {
            const { index, count, onClick, product } = props
            onClick(index, count)
            message.success(`${count}件商品『${product.name}』已成功加入购物车!`,1)
        }
    })
)(ProductWrap)