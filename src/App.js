import React, { Component } from 'react';
// import HomePage from './components/homePage/HomePage';
import './App.css';
// import Aux from './components/hoc/aux/Aux';
import Layout from './components/layout/Layout';
import {Route} from 'react-router-dom'
import  Header from './containers/header/Header';
import ProductList from './containers/productList/ProductList';
import Checkout from './containers/checkout/Checkout';
import Cart from './containers/cart/Cart';
import Footer from './containers/footer/Footer';
class App extends Component {
  render() {
    return (

        <Layout>
        <Route path="/" component={Header} />
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={Footer} />
        </Layout>

    );
  }
}

export default App;
