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
   render(){
       return(
          <div className = "cart">
              {/* Passing A Prop */}
              {this.state.products.map((items) =>
              <CartItem product = {items} key = {items.id}></CartItem>
              )}
        </div>
       );
   }
}


export default Cart;