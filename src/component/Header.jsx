import React from "react";
import search from "../assets/search.svg";
import logo from "../assets/logo3.png";

const Header = () => {
  return (
    <div className="row blue-bg">
      <div className="col"></div>
      <div className="col-6 text-center">
        <img src={logo} style={{ width: "10%" }} />
      </div>
      <div className="col d-flex justify-content-sm-around my-4">
        <div>
          <img src={search} />
          <a className="text-light f-14">SEARCH</a>
        </div>
        <div>
          <a className="text-white border border-white px-3 py-1 rounded-pill f-14">
            LOGIN
          </a>
        </div>
        <div>
          <a
            className="text-white   px-3 py-1 rounded-pill f-14"
            style={{ background: "#6b63b5" }}
          >
            SIGNUP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
