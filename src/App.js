import CartItem from "./CartItem";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase';


import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(){
    //    to call constructor of parent else it will show error
        super();
        this.state = {
           products : [],
           loading : true
        }
        // USed for binding
        // this.increaseQty = this.increaseQty.bind(this)

        this.db = firebase.firestore();
    }

    componentDidMount(){
      // firebase.firestore().collection('products')
      //         .get().then((snapshot)=>{
      //           console.log(snapshot);

      //           snapshot.docs.map((doc)=>{
      //             console.log(doc.data);
      //           });

      //           const products = snapshot.docs.map((doc)=>{
      //             const data = doc.data();

      //             data['id'] = doc.id;
      //            return data;
      //           });


      //           this.setState({
      //             products : products,
      //             loading : false
      //           })
      //         })

       firebase.firestore()
               .collection('products')
               .onSnapshot((snapshot)=>{
                console.log(snapshot);

                snapshot.docs.map((doc)=>{
                  console.log(doc.data);
                });

                const products = snapshot.docs.map((doc)=>{
                  const data = doc.data();

                  data['id'] = doc.id;
                 return data;
                });


                this.setState({
                  products,
                  loading : false
                })
              })
    }

    handleIncreaseQuantity = (product)=>{
        console.log("Hey Increase The Quant. ",product)
        const {products} = this.state;

        const index = products.indexOf(product);
       
      //   products[index].qty+=1;

      //   this.setState({
      //       products:products
      //  })
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef.update({
        qty : products[index].qty + 1
      }).then(()=>{
        console.log('updated');
      }).catch((error)=>{
        console.log(error);
      })
    }
    handleDecreaseQuantity = (product)=>{
        console.log("Hey Decrease The Quant. ",product)
        const {products} = this.state;

        const index = products.indexOf(product);
       
      //   products[index].qty-=1;

      //   this.setState({
      //       products:products
      //  })
      const docRef = this.db.collection('products').doc(products[index].id);

      docRef.update({
        qty : products[index].qty - 1
      }).then(()=>{
        console.log('updated');
      }).catch((error)=>{
        console.log(error);
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

    addProduct = () =>{
      firebase.firestore().collection('products')
              .add({
                img : '',
                price : 900,
                qty : 3,
                title : 'washing machine'
              })
              .then((docRef)=>{
                console.log(docRef);
                return '';
              })
              .catch((error)=>{
                console.log(error);
              })
    }
  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar
          count = {this.getCount()}
      ></Navbar>
      <button onClick = {this.addProduct}></button>
      <Cart
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
      ></Cart>
    
      {this.state.loading && <h1>Loading Products ...</h1>}
     
      <div> 
        total : {this.getCartTotal()}
      </div>
    </div>
  );
  }
}

export default App;
