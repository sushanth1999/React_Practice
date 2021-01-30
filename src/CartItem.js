import React from "react";

class CartItem extends React.Component {
   render(){
       return(
           <div className = "cart-item">
               <div className="left-block">
                   {/* Passig a object for style */}
                    <img style = {styles.image}></img>
               </div>
               <div className = "right-block">
                    <div style = {{fontSize:25}}>Phone</div>
                    <div style = {{color : "gray"}}>Rs 999</div>
                    <div style = {{color : "gray"}}>Qty : 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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