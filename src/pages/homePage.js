import React from "react";


import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import Autentication from "../components/authentication";
import AboutAuthscate from "../components/About Authscate";

import Aboutus from "../components/About us";
import Home from "../components/Home";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeak from "../components/WindowPeak";
import OurTeam from"../components/OurTeam";

import FAQ from "../components/FAQ";



const HomePage = () => {
  return (
    <>
    
      <Header />
      <Home/>
      <ProductShowcase />
      <Aboutus/>
      
      <Autentication />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <AboutAuthscate />
      <OurTeam/>
      <FAQ/>
     
     
      <Footer />
    </>
  );
};

export default HomePage;
