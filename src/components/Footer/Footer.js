import React from "react";
import "./Footer.css";

const Footer = () => {
  const styleForIcon = {
    color: "white",
    display: "block",
    fontSize: "36px",
    marginTop: "15px",
    cursor: "pointer"
  };

  return (
    <div className="footer">
      <div className="div-in-footer">
        <div className="">
          <h4 style={{ color: "white" }}>Address</h4>
          <small style={{ color: "white" }}>House No: 9</small>
          <br />
          <small style={{ color: "white" }}>Road No: 10</small>
          <br />
          <small style={{ color: "white" }}>Lovely city, New York.</small>
          <br />
        </div>
      </div>

      <div className="div-in-footer-middle">
        <h3 className="text-center text-light">Fresh Fruit</h3>
        <small
          style={{ color: "white", display: "block", textAlign: "center" }}
        >
          ©copyright {new Date().getFullYear()}
        </small>
      </div>
      <div className="div-in-footer">
        <div>
          <i style={styleForIcon} className="fa-brands fa-facebook"></i>
          <i
            style={styleForIcon}
            className="fa-brands fa-google-plus-square"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
