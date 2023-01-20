import React, { useState } from "react";
import "./header.css";
import {Navigate} from "react-router-dom"


const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
       {/* <div className="mobile-navbar">
            <div className="mobile-nav-item"><a href="#home" style={{color:"inherit",textDecoration:"none"}}>Home</a></div>
          <div className="mobile-nav-item"><a href="#about" style={{color:"inherit",textDecoration:"none"}}>Aboout Us</a></div>
          <div className="mobile-nav-item">Our Team</div>
          <div className="mobile-nav-item">About AuthScate</div>
          <div className="mobile-nav-item">FAQ</div>
          <div className="mobile-nav-item">Careers</div>
  </div>*/}
      </div>
      <div className="max-width flex header">
        <img
          src={require('./logo3.png')}
          className="header-logo"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item"><a href="#home" style={{color:"inherit",textDecoration:"none"}}>Home</a></div>
          <div className="header-nav-item"><a href="#about" style={{color:"inherit",textDecoration:"none"}}>About Us</a></div>
          <div className="header-nav-item"><a href="#ourteam" style={{color:"inherit",textDecoration:"none"}}>Our Team</a></div>
          <div className="header-nav-item"><a href="#aboutauthscate" style={{color:"inherit",textDecoration:"none"}}>About Authscate</a></div>
          <div className="header-nav-item"><a href="#faq" style={{color:"inherit",textDecoration:"none"}}>FAQ</a></div>
          <div className="header-nav-item"><a href=""><button type="button" class="btn btn-light" >Careers</button></a></div>
          
            
          



        </div>
      </div>
    </div>
  );
};

export default Header;
