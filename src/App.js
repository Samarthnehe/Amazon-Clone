import React,{useEffect} from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Product from './component/Product';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './component/Checkout';
import Login from './component/Login';
import Payment from './component/Payment';
import { auth } from './Firebase';
import {useStateValue} from './StateProvider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Order from './component/Order';

const stripePromise= loadStripe("pk_test_51Ia6G1SGQbzp4mDUHbvg8zAckAMIkXsGiyBK7YD8Gsa3k7MJgpfgxbsVixymyipaG2CgrOCKiETgjg2ObRN382AN003z5DP1ca");

function App() {

  const[{},dispatch]=useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log(authUser);
        if(authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })
        }
        else{
          dispatch({
            type:"SET_USER",
            user:null
          })
        }
      })
  },[])
  return (
    <Router>
          <div className="App">
            <Switch>
            <Route path="/orders">
                  <Header/>
                  <Order/>
              </Route>
            <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/checkout">
                  <Header/>
                  <Checkout/>
              </Route>
              <Route path="/payment">
                  <Header/>
                  <Elements stripe={stripePromise}>
                      <Payment/>
                  </Elements>
                  
              </Route>
              <Route  path="/">
                  <Header/>
                  <Home/>
              </Route>
            </Switch>

          </div>
    </Router>
  
  );
}

export default App;
