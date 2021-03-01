import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import { Provider } from 'react-redux';
import store from './redux/reducer';
import Page404 from './pages/Page404';
import CartPopup from './components/CartPopup';
import CategoryGrid from './pages/CategoryGrid';
function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <CartPopup />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/thanh-toan" component={Checkout} />
            <Route path="/thong-tin-san-pham/:page?" component={ProductDetail} />
            <Route path="/the-loai/:slug?" component={CategoryGrid} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
