import React from "react";

import ban from "../assets/ban.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from "./Slider";
import train from "../assets/train.png";

const Home = () => {
  return (
    <div className="black-bg">
      <div className="w-100  background" style={{ height: "400px" }}>
        <div style={{ padding: "64px 0px" }} className="text-end container">
          <h2
            className="text-light text-end container "
            style={{ fontSize: "50px" }}
          >
            Happy birthday, Gred <br />
            and Forge
          </h2>
          <p className="text-light text-end container fs-5">
            This is no April Fool's Day prank, we've actually put together{" "}
            <br /> an entire page dedicate to the masters of mischief - the{" "}
            <br /> Weasley twins! Celebrate Fred and George, and <br /> try and
            learn which is which
          </p>
          <a className="text-light text-end container  border border-white px-5 py-3 rounded-pill mt-3">
            EXPLORE
          </a>
        </div>
      </div>

      <div style={{ background: "#443b2b" }} className="background-5">
        <Slider />
        <img src={train} className="w-100" />
      </div>
    </div>
  );
};

export default Home;
