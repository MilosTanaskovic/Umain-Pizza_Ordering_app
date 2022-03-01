import React from 'react';
// import components and pages
import NavBar from './components/NavBar/NavBar';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';

import './App.css';
import { Route } from 'react-router';

const App: React.FC = () => {
  return (
    <div className='App'>
      <NavBar />

      {/* pages */}
        <Route exact path='/' component={Home} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/order' component={Order} />
          {/* <Home/>
          <Checkout />
          <Order />  */}
    </div>
  )
}

export default App