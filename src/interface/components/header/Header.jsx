import React from "react";
import headerVideo from "../../../assets/video/2516159-hd_1920_1080_24fps.mp4";
const Header = () => {
  return (
    <div className="main">
      <video src={headerVideo} style={{ width: "100%" }} autoPlay muted loop />
    </div>
  );
};

export default Header;
