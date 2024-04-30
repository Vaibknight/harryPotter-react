import React from "react";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <>
      <div>
        <div className="black-bg  ">
          <ul className="d-flex justify justify-content-sm-around  container pt-3">
            <li className="list-unstyled">
              <Link to="/" className="text-white fs-5 text-uppercase">
                Home
              </Link>
            </li>
            <li className="list-unstyled">
              <Link to="books" className="text-white fs-5 text-uppercase">
                Books
              </Link>
            </li>
            <li className="list-unstyled">
              <Link to="characters" className="text-white fs-5 text-uppercase">
                Characters
              </Link>
            </li>
            <li className="list-unstyled">
              <Link to="movies" className="text-white fs-5 text-uppercase">
                Movies
              </Link>
            </li>
            <li className="list-unstyled">
              <Link to="potions" className="text-white fs-5 text-uppercase">
                Potions
              </Link>
            </li>
            <li className="list-unstyled">
              <Link to="spells" className="text-white fs-5 text-uppercase">
                Spells
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default nav;
