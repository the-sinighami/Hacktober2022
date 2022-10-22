import React from "react";
import {Route , Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";


const App = () => {
  return (
    <div className="App">
      
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      
      

      <Route  path="/add"  element={<AddContact/>}>
      
      </Route>

      <Route path="/edit/:id"  element={ <EditContact/>}>
    
      </Route>

      </Routes>
    </div>
  );
}

export default App;
