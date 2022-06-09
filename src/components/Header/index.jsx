import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'
import { IndexContext } from '../../contexts/IndexContext'
import {Link} from 'react-router-dom'


function Header() {
    const {filterValue,setFilterValue,checkInputValue,checkPriceFilter,filterMinPrice,setFilterMinPrice,filterMaxPrice,setFilterMaxPrice,cartProducts} = useContext(IndexContext)
  return (
    <Box sx={{p:3,display:'flex',justifyContent:"space-between"}}>
        <input value={filterValue} onChange={(e)=>{
            setFilterValue(e.target.value)
            checkInputValue()
        }} type="text" placeholder="search by title"/>
        <Box>
            <span>Min: {filterMinPrice}</span>
            <input type="range" value={filterMinPrice} onChange={(e)=>{
                setFilterMinPrice(e.target.value)
                checkPriceFilter()
            }} min={5000} max={20000} name="" id="" />

            <span>Max: {filterMaxPrice}</span>
            <input type="range" value={filterMaxPrice} onChange={(e)=>{
                setFilterMaxPrice(e.target.value)
                checkPriceFilter()
            }}  min={5000} max={20000} name="" id="" />

        </Box>
        <Box sx={{display:"flex",gap:2}}>
            <Link to="/cart"><Typography>Cart {cartProducts.length}</Typography></Link>
            <Link to="/"><Typography>Home</Typography></Link>
        </Box>
    </Box>
  )
}

export default Header