import React from "react";

class CartItem extends React.Component {
    increaseQty = ()=>{
        // console.log("this.start",this.state)
        // this doesn't work
        // this.state.qty++;

        //Method - 1 (Reender our component with updated value)
        // If Prev State is not required.
        //A call back function can also be added in both methods
        // that func will help to call this.state after it is successfully
        //updated as setState are asynchronously called;
        this.setState({
            title : "Mobile Phone"
        });

        // Method - 2 If previous state is required
        this.setState((prevState) =>  {return {qty:prevState.qty+1}})
    }
    decQty = ()=>{
        const {qty} = this.state;
        if(qty == 0)
         return;

        this.setState((prevState)=>{return {qty:prevState.qty-1}})
    };
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
                    <div style = {{fontSize:25}}>{this.props.title}</div>
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