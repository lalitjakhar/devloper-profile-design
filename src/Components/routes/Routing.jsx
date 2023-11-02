import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Login from "../login/Login";
import Blog from "../blog/Blog";
import Services from "../services/Services";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
