import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose, withState } from 'recompose'
import { Layout, Menu, Input } from 'antd'
import { Link } from 'react-router-dom'

import '../../assets/styles/header.css'
import logo from '../../assets/images/logo.png'

const Header = ({defaultSelectedKey}) => {
    return (
        <Layout.Header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="荣誉之战" />
            </a>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={defaultSelectedKey}
                className="menu-wrapper"
                selectedKeys={"2"}
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

const LinkHeader = (props) => {
    let defaultSelectedKey = "1"
    switch (props.location.pathname) {
        case "/":
                defaultSelectedKey = "1"
                break;
        case "/cart":
                defaultSelectedKey = "2"
                break;
        case "/order":
                defaultSelectedKey = "3"
                break;
    }
    return <Header defaultSelectedKey={defaultSelectedKey} />
}
export default compose(
    connect(store => ({
        tabIndex: store.tabIndex
    })),
    withRouter
)(LinkHeader)