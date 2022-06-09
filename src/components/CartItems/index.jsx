import { Box, Grid, Typography } from '@mui/material'
import React,{useContext} from 'react'
import { IndexContext } from '../../contexts/IndexContext'
import ProductsItem from '../ProductsItem'

function CartItems() {
    const {cartProducts} = useContext(IndexContext)
  return (
    <Box>
        <Grid container spacing={3}>
            {cartProducts.map(p=>(
                <Grid key={p.id}>
                    <ProductsItem product={p}>
                        <Typography>quantity: {p.quantity}</Typography>
                    </ProductsItem>
                </Grid>
            ))}
        </Grid>
    </Box>
  )
}

export default CartItems