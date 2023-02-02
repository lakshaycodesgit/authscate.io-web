import React from "react";
import Button from "../common/Button";
import "./feelSpecial.css";

const FeelSpecial = () => {
  return (
    <div id="aboutauthscate">
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
          <div className="photo-section-heading cred-experience-heading">
          solving the counterfeit plague
            </div>
            <div className="photo-section-subheading">
            The global Counterfeiting industry is set to hit 4.2 Trillion USD by 2022 and companies like Gucci, Dior, and Chanel have lost more than 50 Billion USD to Counterfeiting.
            </div>
          </div>
          
            <div className="photo-section-description">
              


            
            <div className="photo-section-button">
              <a href="#mobileshowcase" style={{textdecoration: "none"}}><Button buttonText="Learn More" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeelSpecial;
