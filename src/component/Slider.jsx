import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import film from "../assets/Films.png";
import spel from "../assets/Spel.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="container-xxl">
      <OwlCarousel className="owl-theme pt-5" loop margin={10} nav>
        <div class="item margin-60">
          <Link to="movies">
            <div
              className="background-6 bg"
              width="100"
              height="400"
              style={{ height: "300px", width: "216px" }}
            >
              <h3 className="crousel">Films</h3>
            </div>
          </Link>
        </div>
        <div class="item margin-60">
          <Link to="spells">
            <div
              className="background-7 bg"
              width="100"
              height="400"
              style={{ height: "300px", width: "216px" }}
            >
              <h3 className="crousel">Spells</h3>
            </div>
          </Link>
        </div>
        <div class="item margin-60">
          <Link to="characters">
            <div
              className="background-8 bg"
              width="100"
              height="400"
              style={{ height: "300px", width: "216px" }}
            >
              <h3 className="crousel" style={{ left: "131px" }}>
                Characters
              </h3>
            </div>
          </Link>
        </div>
        <div class="item margin-60">
          <Link to="books">
            <div
              className="background-9 bg"
              width="100"
              height="400"
              style={{ height: "300px", width: "216px" }}
            >
              <h3 className="crousel">Books</h3>
            </div>
          </Link>
        </div>
        <div class="item margin-60">
          <Link to="potions">
            <div
              className="background-10 bg"
              width="100"
              height="400"
              style={{ height: "300px", width: "216px" }}
            >
              <h3 className="crousel">Potions</h3>
            </div>
          </Link>
        </div>
        <div class="item margin-60">
          <Link to="games">
            <div
              className="background-11 bg"
              width="100"
              height="400"
              style={{ height: "300px", width: "216px" }}
            >
              <h3 className="crousel">Games</h3>
            </div>
          </Link>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;
