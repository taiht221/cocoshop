import CartPopup from 'components/CartPopup/CartPopup';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Category from './pages/CategoryGrid';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <CartPopup />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/thanh-toan" component={Checkout} />
        <Route path="/thong-tin-san-pham/:page?" component={ProductDetail} />
        <Route path="/the-loai/:slug?" component={Category} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
