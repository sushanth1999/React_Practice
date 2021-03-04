import React from "react";
import CartItem from "./CartItem"

const Cart = (props)=>{
   
       const {products} = props; 
       return(
          <div className = "cart">
              {/* Passing A Prop */}
              {products.map((items) =>
              <CartItem 
              product = {items} 
              key = {items.id}
              onIncreaseQuantity = {props.onIncreaseQuantity}
              onDecreaseQuantity = {props.onDecreaseQuantity}
              onDeleteProduct = {props.onDeleteProduct}
              >     
              </CartItem>
              )}
        </div>
       );
   }


export default Cart;