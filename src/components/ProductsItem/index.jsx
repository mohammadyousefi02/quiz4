import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'
import { IndexContext } from '../../contexts/IndexContext'

function ProductsItem({product,children}) {
    const {cartProducts,setCardProducts} = useContext(IndexContext)
    function addToCart(e){
            if(cartProducts.find(p=>p.id===product.id)){
                const confirmRes = prompt("Product already in cart. Do you want to add more? (y/n)");
                if(confirmRes === "y"){
                    setCardProducts(cartProducts.map(p=>p.id===product.id ? {...p,quantity:p.quantity+1} : p))
                    alert("Product quantity updated")
                }
            }else{
                setCardProducts([...cartProducts,{...product,quantity:1}])
                alert("Product added to cart")
           }
    }
    function removeFromCart(){
        if(cartProducts.find(p=>p.id===product.id)){
            const confirmRes = prompt("Product already in cart. Do you want to remove? (y/n)");
            if(confirmRes === "y"){
                setCardProducts(cartProducts.filter(p=>p.id!==product.id))
                alert("Product removed from cart")
            }
        }
    }
  return (
    <Box sx={{p:1,height:"400px"}}>
        <Box component="img" sx={{height:"200px",width:"100%",objectFit:"contain"}} src={product.url}/>
        <Typography>{product.title}</Typography>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Typography>{product.price} Toman</Typography>
            <Typography>inventory: {product.inventory}</Typography>
        </Box>
        <button onClick={addToCart}>add to cart</button>
        {cartProducts.find(p=>p.id===product.id) && <button onClick={removeFromCart}>remove from cart</button>}
        {children}
    </Box>
    )
}

export default ProductsItem