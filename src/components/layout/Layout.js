import React, { Component } from 'react';
// import HomePage from '../homePage/HomePage';
import Aux from '../hoc/aux/Aux';
import Header from '../../containers/header/Header';
import ProductList from '../../containers/productList/ProductList';

class Layout extends Component {
  render() {
    return (
      <Aux>
          <Header/>
      {/* <HomePage/> */}
      <ProductList/>

      </Aux>
    );
  }
}

export default Layout;
