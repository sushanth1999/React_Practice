import React from "react";
import CartItem from "./CartItem"

class Cart extends React.Component {
    constructor(){
        //    to call constructor of parent else it will show error
            super();
            this.state = {
               products : [
                    {
                        price : 999,
                        title : 'Phone',
                        qty : 1,
                        img : "",
                        id: 1
                    },
                    {
                        price : 999,
                        title : 'Watch',
                        qty : 1,
                        img : "",
                        id:2
                    },
                    {
                        price : 999,
                        title : 'Laptop',
                        qty : 1,
                        img : "",
                        id : 3
                    },

               ]
            }
            // USed for binding
            // this.increaseQty = this.increaseQty.bind(this)
        }
        handleIncreaseQuantity = (product)=>{
            console.log("Hey Increase The Quant. ",product)
            const {products} = this.state;

            const index = products.indexOf(product);
            products[index].qty+=1;

            this.setState({
                products:products
           })
        }
        handleDecreaseQuantity = (product)=>{
            console.log("Hey Decrease The Quant. ",product)
            const {products} = this.state;

            const index = products.indexOf(product);
            products[index].qty-=1;

            this.setState({
                products:products
           })
        }
        handleDeleteProduct = (id)=>{

            const {products} = this.state;

            //This will return an array where id will not be 
            //equal to given id.
            const item = products.filter((items)=>items.id !== id);
            console.log(item);
            
            this.setState({
                products:item
           })
        }
   render(){
       return(
          <div className = "cart">
              {/* Passing A Prop */}
              {this.state.products.map((items) =>
              <CartItem 
              product = {items} 
              key = {items.id}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}
              >     
              </CartItem>
              )}
        </div>
       );
   }
}


export default Cart;