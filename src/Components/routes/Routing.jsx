import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Blog from "../blog/Blog";
import Details from "../details/Details";
import Footer from "../footer/Footer";
import Login from "../login/Login";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/details" element={<Details />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
