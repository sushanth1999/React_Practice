import CartItem from "./CartItem";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar"

import { render } from "@testing-library/react";

class App extends React.Component {
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

     getCount = ()=>{
      const {products} = this.state;

      let count = 0;
   
      products.forEach(product => {
        count+=product.qty;
      });

      return count;
    }
    getCartTotal = () =>{
      const {products} = this.state;

      let cartTotal = 0;

      products.forEach(product => {
        cartTotal += product.qty * product.price;
      });

      return cartTotal
    }
  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar
          count = {this.getCount()}
      ></Navbar>
      <Cart
      products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
      ></Cart>
      <div>
        total : {this.getCartTotal()}
      </div>
    </div>
  );
  }
}

export default App;
