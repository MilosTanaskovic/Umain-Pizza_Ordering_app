import React, { useState, useEffect } from 'react';
// import components and pages
import NavBar from './components/NavBar/NavBar';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';

import './App.css';
import { Route } from 'react-router';
import axios from 'axios';
import { RestaurantType } from './models/restaurant';

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  useEffect(() => {
    axios.get<RestaurantType[]>('https://private-anon-108760f9fb-pizzaapp.apiary-mock.com/restaurants/').then((response) => {
      setRestaurants(response.data);
    })
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