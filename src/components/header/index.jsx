import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { Layout, Menu, Input, notification } from "antd";
import { Link } from "react-router-dom";
import { searchProducts } from "../../store/cartStore";

import "../../assets/styles/header.css";
import logo from "../../assets/images/logo.png";

const Header = ({ tabIndex, handleSearch }) => {
  return (
    <Layout.Header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={"1"}
        className="menu-wrapper"
        selectedKeys={tabIndex}
      >
        <Menu.Item key={"1"}>
          <Link to="/">商品浏览</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/cart">购物车</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/order">我的订单</Link>
        </Menu.Item>
      </Menu>
      <Input.Search
        placeholder="请输入商品名"
        onSearch={handleSearch}
        className="search"
      />
    </Layout.Header>
  );
};

const LinkHeader = ({ location, tabIndex, handleSearch }) => {
  let index = "1";
  let title = "商品浏览";
  switch (location.pathname) {
    case "/":
      index = "1";
      title = "商品浏览";
      break;
    case "/cart":
      index = "2";
      title = "我的购物车";
      break;
    case "/order":
      index = "3";
      title = "我的订单";
      break;
    default:
      index = "1";
  }

  useEffect(() => {
    document.title = title;
  });

  return <Header tabIndex={index} handleSearch={handleSearch} />;
};
export default compose(
  connect(
    store => ({
      tabIndex: store.cart.tabIndex
    }),
    {
      searchProducts
    }
  ),
  withRouter,
  withHandlers({
    handleSearch: ({ searchProducts, history }) => value => {
      const herf = history.location.pathname;
      if (herf !== "/cart" && herf !== "/order") {
        searchProducts(value); // 修复搜索，显示商品与添加到购物车的商品不同
        // notification.error({
        //   message: "搜索结果错误！",
        //   description: "遇到一个与逻辑不符的错误导致搜索失败！",
        //   duration: 1
        // })
      } else {
        notification.warn({
          message: "警告！",
          description: "请在商品页进行搜索",
          duration: 1
        });
      }
    }
  })
)(LinkHeader);
