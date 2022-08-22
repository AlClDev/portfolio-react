import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Dijon</span>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="albanclouzeau@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié !");
                  }}
                >
                  albanclouzeau@gmail
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/alban-clouzeau-1ac/"
              target="_blank"
              rel="noopoener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/AlClDev"
              target="_blank"
              rel="noopoener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://alkeillustration.com"
              target="_blank"
              rel="noopoener noreferrer"
            >
              <h4>portfolio 2D/3D</h4>
              <i className="fa-solid fa-paintbrush"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
