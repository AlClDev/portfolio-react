import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/abstractFace.png" alt="profil-pic" />
          <h3>Alban Clouzeau</h3>
        </div>
      </div>

      {/* Barre de navigation*/}
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/"
              ClassName={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competences"
              ClassName={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              ClassName={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              ClassName={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/*Social Network */}
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/alban-clouzeau-1ac/"
              target="blank"
              rel="noopener noreferer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AlClDev"
              target="blank"
              rel="noopener noreferer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://alkeillustration.com"
              target="blank"
              rel="noopener noreferer"
            >
              <i className="fa-solid fa-paintbrush"></i>
            </a>
          </li>
        </ul>

        <div className="signature">
          <p>Alban Clouzeau - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
