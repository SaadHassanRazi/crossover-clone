import React from "react";
import headerVideo from "../../../assets/video/2516159-hd_1920_1080_24fps.mp4";
import "./Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <div className="main">
      <div className="video-container">
        <video
          src={headerVideo}
          style={{ width: "100%" }}
          autoPlay
          muted
          loop
        />
        <div className="text-overlay">
          <h1>
            Are <b>You</b> The Best?
          </h1>
          <p>
            We enable talented professionals around the world to qualify for
            awesome remote jobs—with Silicon Valley pay. Ready to prove your
            skills?
          </p>
              
            <button className="button">FIND A REMOTE FULL-TIME JOB </button>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
