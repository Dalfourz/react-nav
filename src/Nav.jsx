import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import FrontEndLogo from "./assets//Frontend Simplified Logo.png";

const Nav = () => {
  return (
    <nav className="dashboard__nav">
      <div className="dashboard__nav--content">
        <div className="flex align__centre">
          <button className="btn btn__undercover burger">
            <FontAwesomeIcon icon={faBars} className="close-burger_svg__burger logo__burger"/>
          </button>
          <figure className="logo">
            <a href="">
              <img href={FrontEndLogo} className="logo__img"></img>
            </a>
          </figure>
        </div>
        <div className="nav__links">
            <a href="" className="nav__link--home">Pricing</a>
            <span className="nav__link--home">Login</span>
            <button className="btn btn--primary nav__btn">Register</button>
            {/* <div className="container">
              <span className="wrapper">
                <button className="nav__icon">J</button>
              </span>
            </div> */}

        </div>
      </div>
    </nav>
  );
};

export default Nav;
