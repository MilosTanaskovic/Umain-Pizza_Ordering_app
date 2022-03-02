import React, { useState, useEffect } from 'react';
// import components and pages
import NavBar from './components/NavBar/NavBar';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';

import './App.css';
import { Route } from 'react-router';
import { MenuType, RestaurantType } from './models/restaurant';
import agent from './api/agent';
import Menu from './pages/Menu/Menu';

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [menu, setMenu] = useState<MenuType[]>([]);

  useEffect(() => {
    // get list of restaurants
    agent.Restaurants.list().then((response) => {
      setRestaurants(response);
    });
    // get menu
    agent.Restaurants.menu().then((response) => {
      setMenu(response);
    })
  }, []);
  console.log(menu);
  return (
    <div className='App'>
      <NavBar />

      {/* pages */}
        <Route exact path='/'>
          <Home restaurants={restaurants} />
        </Route>
        <Route path='/menu'>
          <Menu menu={menu} />
        </Route>
        <Route path='/checkout' component={Checkout} />
        <Route path='/order' component={Order} />
    </div>
  )
}

export default App