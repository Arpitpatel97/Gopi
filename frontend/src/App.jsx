import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar";
import { ToastContainer, toast } from 'react-toastify'
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import PlaceOrder from "./Pages/Placeorder";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar />
     <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
