import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Layout, Menu, Input } from 'antd'
import { Link } from 'react-router-dom'

import '../../assets/styles/header.css'
import logo from '../../assets/images/logo.png'

const Header = ({tabIndex}) => {
    return (
        <Layout.Header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="荣誉之战" />
            </a>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={"1"}
                className="menu-wrapper"
                selectedKeys={tabIndex}
            >
                <Menu.Item key={"1"}><Link to="/">商品浏览</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/cart">购物车</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/order">我的订单</Link></Menu.Item>
            </Menu>
            <Input.Search
                placeholder="请输入商品名"
                onSearch={value => console.log(value)}
                className="search"
            />
        </Layout.Header>
    )
}

const LinkHeader = ({ location, tabIndex }) => {
    switch (location.pathname) {
        case "/":
                tabIndex = "1"
                break;
        case "/cart":
                tabIndex = "2"
                break;
        case "/order":
                tabIndex = "3"
                break;
        default: 
            tabIndex = "1"
    }
    return <Header tabIndex={tabIndex} />
}
export default compose(
    connect(store => ({
        tabIndex: store.cart.tabIndex
    })),
    withRouter
)(LinkHeader)