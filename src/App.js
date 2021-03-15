import React,{useEffect} from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Product from './component/Product';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './component/Checkout';
import Login from './component/Login';
import { auth } from './Firebase';
import {useStateValue} from './StateProvider';



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
            <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/checkout">
                  <Header/>
                  <Checkout/>
              </Route>
              <Route path="/">
                  <Header/>
                  <Home/>
              </Route>
            </Switch>

          </div>
    </Router>
  
  );
}

export default App;
