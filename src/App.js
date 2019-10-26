import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';

import Header from './components/header'
import Commodity from './views/commodity'
import Order from './views/order'
import ShoppingCart from './views/shoppingCart'

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/order" component={Order} />
          <Route path="/" component={Commodity} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
