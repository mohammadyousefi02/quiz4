import React,{useContext} from 'react'
import { Box, Grid, Typography } from '@mui/material'

import { IndexContext } from '../../contexts/IndexContext'
import ProductsItem from "../ProductsItem"



function Products() {
  const {filteredProducts} = useContext(IndexContext)
  console.log(filteredProducts)
  return (
    <Box>
      <Grid container spacing={3}>
      {filteredProducts.length ? filteredProducts.map(product => (
          <Grid item xs={4} key={product.id}>
            <ProductsItem product={product}/>
          </Grid>
        )) : <Typography sx={{textAlign:'center'}}>No products found</Typography>}
      </Grid>
      
    </Box>
  )
}

export default Products