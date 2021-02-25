import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hitman from './Hitman';
import Products from './Products';
import { productData, productDataTwo} from './Products/data';

function App() { 
  return (
      <Router>
      <GlobalStyle />
      
      <Hitman />
      <Products heading = 'Choose Your Favorite' data ={productData}/>
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      </Router>
  ); 
}

export default App;
