import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "counterfeiting leads to brand reputation damage  ",
    description:
      "",
    mobile_img:
      require('./img1.png')
  },
  {
    heading: "save your DIMINISHED SALES with us.",
    description:
      "",
    mobile_img:
      require('./img2.png'),
  },
  {
    heading: "for your 80 hazar ke joothe.",
    description:
      ""
      ,
    mobile_img:
      require('./img3.png'),
  },
  {
    heading: "Resell your luxury goods.",
    description:
      "",
    mobile_img:
      require('./mob1.png'),
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
