import React, { useState, useEffect } from 'react';
// import components and pages
import NavBar from './components/NavBar/NavBar';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';

import './App.css';
import { Route } from 'react-router';
import { RestaurantType } from './models/restaurant';
import agent from './api/agent';

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  useEffect(() => {
    agent.Restaurants.list().then((response) => {
      console.log(response);
      setRestaurants(response);
    });
  }, []);
  
  return (
    <div className='App'>
      <NavBar />

      {/* pages */}
        <Route exact path='/'>
          <Home restaurants={restaurants} />
        </Route>
        <Route path='/checkout' component={Checkout} />
        <Route path='/order' component={Order} />
    </div>
  )
}

export default App