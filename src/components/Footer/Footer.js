import React from "react";
import "./Footer.css";

const Footer = () => {
 

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="fresh-fruit-writing">Fresh Fruit</div>
        <div className="icon-container">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className="footer-bottom bg-secondary">
        <div></div>
        <div>
          <p style={{ color: "white", marginLeft: "40px", marginTop: "10px" }}>
            Contact Us
          </p>
          <div style={{ marginTop: "-8px" }}>
            <small className="contact-text-footer">
              {" "}
              House No: 13, Road No: 7{" "}
            </small>

            <br />
            <small className="contact-text-footer">Email: fresh@fruit.co</small>
            <br />
            <small className="contact-text-footer">
              Phone: +911 12345678901
            </small>
          </div>
        </div>
        <small className="copyright">
          ©Fresh Fruit {new Date().getFullYear()}
        </small>
      </div>
    </div>
  );
};

export default Footer;
