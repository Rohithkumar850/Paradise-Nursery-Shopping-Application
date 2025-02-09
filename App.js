import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import CartPage from './components/CartPage';
import './App.css';

const plants = [
  { id: 1, name: 'Ficus', price: 20, thumbnail: 'ficus.jpg', category: 'Indoor' },
  { id: 2, name: 'Cactus', price: 15, thumbnail: 'cactus.jpg', category: 'Succulent' },
  // Add more plants here
];

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ProductListing plants={plants} />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
