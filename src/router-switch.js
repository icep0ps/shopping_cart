import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About/about';
import Nav from './components/Header/Nav';
import Home from './components/Home/home';
import Shop from './components/Shop/shop';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop/:id" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
