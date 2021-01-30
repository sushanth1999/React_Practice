import React from "react";

class CartItem extends React.Component {
    constructor(){
    //    to call constructor of parent else it will show error
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty : 1,
            img : ""
        }
        // USed for binding
        // this.increaseQty = this.increaseQty.bind(this)
    }
    increaseQty = ()=>{
        // console.log("this.start",this.state)
        // this doesn't work
        // this.state.qty++;

        //Method - 1 (Reender our component with updated value)
        // If Prev State is not required.
        this.setState({
            title : "Mobile Phone"
        });

        // Method - 2 If previous state is required
        this.setState((prevState) =>  {return {qty:prevState.qty+1}})
    }
    decQty = ()=>{
        this.setState((prevState)=>{return {qty:prevState.qty-1}})
    };
   render(){
    //    Object destructuring
       const {price,title,qty} = this.state
       return(
           <div className = "cart-item">
               <div className="left-block">
                   {/* Passig a object for style */}
                    <img style = {styles.image}></img>
               </div>
               <div className = "right-block">
                    <div style = {{fontSize:25}}>{this.state.title}</div>
                    <div style = {{color : "gray"}}>Rs {price}</div>
                    <div style = {{color : "gray"}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                      
                        {/* Buttons */}
                        <img alt ="increase" 
                        className="action-icons" 
                        // either this.increaseQty.bind(this)} or bind in constructor
                        src="" onClick={this.increaseQty}></img>

                        <img alt ="decrease" 
                        className="action-icons" 
                        src="" onClick={this.decQty}></img>
                        
                        <img alt ="delete" 
                        className="action-icons" 
                        src=""></img>
                    </div>
               </div>
           </div>
       )
   }
}
const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        backgroundColor : '#ccc'
    }
}

export default CartItem;