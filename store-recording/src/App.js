import React, { Fragment } from 'react';
import {Switch ,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import 'bootstrap-css-only';
import 'font-awesome/css/font-awesome.min.css';
import Product from './components/Product';
import Counter from './components/Counter';
import Modal from './components/Modal';
import Cart from './components/Cart/Cart';
import ApiTest from './ApiTest'
function App() { 
  return (
      <Fragment>
          <Navbar />
          <Switch>
              <Route path="/" exact>
                  <ProductList />
              </Route>

              <Route path="/details">
                  <Details />
              </Route>
              <Route path="/product">
                  <Product />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
              <Route path="/age" component={Counter} />

              <Route path="/Counter" component={Counter}>
                  <Counter />
              </Route>
              <Route>
                  <Default />
              </Route>
          </Switch>
          <Modal />
      </Fragment>
  );
}

export default App;
