import React, { useState, useEffect } from 'react';
// import components and pages
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Menu from './pages/Menu/Menu';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

import './App.css';
import { Route } from 'react-router';
import { MenuType, RestaurantType } from './models/restaurant';
import agent from './api/agent';

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const App: React.FC = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [menu, setMenu] = useState<MenuType[]>([]);
  const [cartItems, setCartItems] = useState<MenuType[] | any>(cartFromLocalStorage);
  const [orderPrice, setOrderPrice] = useState<number>(0);

  
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

  // store data in local storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  
  // handle add to cart
  const handleAddToCart  = (menuItem: MenuType) => {
    const exist = cartItems.find((x: any) => x.id === menuItem.id);
    if(exist) {
      setCartItems(cartItems.map((x: any) => x.id === menuItem.id ? {...exist, qty: exist.qty + 1} : x));
    } else {
      setCartItems([...cartItems, { ...menuItem, qty: 1 }]);
    }
  }
  // handle remove from cart
  const handleDecreaseQty = (menuItem: MenuType) => {
    const exist = cartItems.find((x: any) => x.id === menuItem.id);
    if(exist?.qty === 1) {
      setCartItems(cartItems.filter((x: any) => x.id !== menuItem.id));
    } else {
      setCartItems(cartItems.map((x: any) => x.id === menuItem.id ? { ...exist, qty: exist.qty - 1 } : x))
    };
  }
  // handle remove all qty from item
  const handleRemoveItem = (menuItem: MenuType) => {
    setCartItems(cartItems.filter((x: any) => x.id !== menuItem.id ))
  }
  console.log(cartItems);
  return (
    <div className='App'>
      <NavBar 
        cartItems={cartItems}
        orderPrice={orderPrice}
      />

      {/* pages */}
        <Route exact path='/'>
          <Home restaurants={restaurants} />
        </Route>
        <Route path='/menu'>
          <Menu 
            menu={menu}
            addToCart={handleAddToCart}
          />
        </Route>
        <Route path='/cart'>
          <ShoppingCart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            decreaseQty={handleDecreaseQty}
            setOrderPrice={setOrderPrice}
            orderPrice={orderPrice}
            removeItem={handleRemoveItem}
          />
        </Route>
        <Route path='/order'>
          <Order 
            cartItems={cartItems}
            removeItem={handleRemoveItem}
          />
        </Route>
    </div>
  )
}

export default App