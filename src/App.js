import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { IndexContext } from './contexts/IndexContext';
import {Routes,Route} from 'react-router-dom'

import data from "./data/data.json"
import Products from './components/products';
import Header from './components/Header';
import CartItems from './components/CartItems';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterValue,setFilterValue] = useState("");
  const [filterMaxPrice,setFilterMaxPrice] = useState(20000);
  const [filterMinPrice,setFilterMinPrice] = useState(0);
  const [cartProducts,setCardProducts] = useState([]);
  useEffect(()=>{
    console.log(data)
    const copyProducts = [...products]
    data.forEach(p=>{
      p.quantity = 0;
      p.total = 0;
      copyProducts.push(p)
    })
    setProducts(copyProducts)
    setFilteredProducts(copyProducts)
  },[])
  function checkInputValue(){
    if(filterValue === ""){
      setFilteredProducts(products)
    }else{
      const copyProducts = [...products]
      const copyFilteredProducts = []
      copyProducts.forEach(p=>{
        if(p.title.toLowerCase().includes(filterValue.toLowerCase())){
          copyFilteredProducts.push(p)
        }
      })
      setFilteredProducts(copyFilteredProducts)
    }
  }
  function checkPriceFilter(){
    const copyProducts = [...products]
    const copyFilteredProducts = []
    copyProducts.forEach(p=>{
      if(p.price >= filterMinPrice && p.price <= filterMaxPrice){
        copyFilteredProducts.push(p)
      }
    })
    setFilteredProducts(copyFilteredProducts)
  }

  return (
    <IndexContext.Provider value={{products,filteredProducts,setFilteredProducts,filterValue,setFilterValue,checkInputValue,checkPriceFilter,filterMaxPrice,filterMinPrice,setFilterMaxPrice,setFilterMinPrice,cartProducts,setCardProducts}}>
      <Box sx={{px:8}}>
        <Header/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/cart" element={<CartItems/>}/>
        </Routes>
      </Box>
    </IndexContext.Provider>
  );
}

export default App;
