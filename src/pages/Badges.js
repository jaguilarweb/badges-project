import React from "react";

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import Navbar from "../components/Navbar";


class Badges extends React.Component{
  render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;