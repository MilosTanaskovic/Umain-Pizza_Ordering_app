import React from 'react';
import styled from 'styled-components';

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
      Home Page
    </AppWrapper>
  )
}

export default App