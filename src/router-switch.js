import React from 'react';
import Nav from './components/Header/Nav';
import Home from './components/Home/home';
import Shop from './components/Shop/shop';
import About from './components/About/about';
import inventory from '../src/components/Shop/inventory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop inventory={inventory} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop/:id" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
