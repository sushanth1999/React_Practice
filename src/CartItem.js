import React from "react";

class CartItem extends React.Component {

   render(){
       console.log(this.props)
    //    Object destructuring passing values as State
      // const {price,title,qty} = this.state
    //    Object destructuring passing values as Props
    const {price,title,qty} = this.props.product;

    return(
           <div className = "cart-item">
               <div className="left-block">
                   {/* Passig a object for style */}
                    <img style = {styles.image}></img>
               </div>
               <div className = "right-block">
                    <div style = {{fontSize:25}}>{title}</div>
                    <div style = {{color : "gray"}}>Rs {price}</div>
                    <div style = {{color : "gray"}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                      
                        {/* Buttons */}
                        <img alt ="increase" 
                        className="action-icons" 
                        // either this.increaseQty.bind(this)} or bind in constructor
                        src="" onClick={()=>this.props.onIncreaseQuantity(this.props.product)}></img>

                        <img alt ="decrease" 
                        className="action-icons" 
                        src="" onClick={()=>this.props.onDecreaseQuantity(this.props.product)}></img>
                        
                        <img alt ="delete" 
                        className="action-icons" 
                        src=""  onClick={()=>this.props.onDeleteProduct(this.props.product.id)}></img>
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