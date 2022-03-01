import React from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';

const AppWrapper = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
`

const App: React.FC = () => {
  return (
    <AppWrapper>
      <NavBar />

      {/* pages */}
      <Home />
      <Checkout />
      <Order />
      
    </AppWrapper>
  )
}

export default App