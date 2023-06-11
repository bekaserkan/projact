import React from "react";
import "./AboutSite.css";
import oracl from "../../img/oracl.svg";

function AboutSite() {
  return (
    <div className="about_site">
      <div className="container">
        <h1>О сайте</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun?
        </p>
        <p className="text">
          Lut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu . Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore euLut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu . Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.{" "}
        </p>
        <p className="center">Разработана и поддерживается компанией</p>
        <img src={oracl} />
      </div>
    </div>
  );
}

export default AboutSite;
