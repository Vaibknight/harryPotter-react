import React from "react";
import logo from "../assets/logo3.png";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="black-bg  px-5 py-5">
        <div className="border border-white">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="flex justify-content-sm-around">
                  <div className="text-white my-4">
                    <a className="d-block text-light">About Us</a>
                    <a className="d-block text-light my-2">Cookie Settings</a>
                  </div>
                  <div className="text-white my-4">
                    <a className="d-block text-light">Press</a>
                    <a className="d-block text-light my-2">FAQs</a>
                    <a className="d-block text-light my-2">
                      Terms & Conditions
                    </a>
                  </div>
                  <div className="text-white my-4">
                    <a className="d-block text-light">Ad Choices</a>
                    <a className="d-block text-light my-2">Privacy & Cookies</a>
                    <a className="d-block text-light my-2">
                      Children's Privacy Policy
                    </a>
                  </div>
                  <div className="text-white my-4">
                    <a className="d-block text-light my-2">Legals</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <img src={logo} />
                </div>
              </div>
            </div>
          </div>
          <hr className="text-light " style={{ padding: "0px 0px" }} />
          <div className="container">
            <div className="row py-3">
              <div className="col-8">
                <div className="container-xxl">
                  <p className="gray-text">© WIZARDING WORLD DIGITAL 2024</p>
                  <p className="gray-text">
                    Looking for Pottermore? Wizarding World is the new official
                    home of Harry Potter & Fantastic Beasts. Join the Fan Club
                    and bring your traits with you.
                  </p>
                  <p className="gray-text">
                    Brought to you by Wizarding World Digital, a partnership
                    between Warner Bros. and Pottermore. Delivering the latest
                    news and official products from the Wizarding World and our
                    partners.
                  </p>
                  <p className="gray-text">
                    TM & © WBEI. WIZARDING WORLD Publishing and Theatrical Stage
                    Rights © J.K. Rowling.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="container-xxl">
                  <div className="d-flex justify-content-md-center">
                    <a className="blue-bg px-2 rounded-circle py-2 mx-2">
                      <AiFillYoutube className="text-light fs-5" />
                    </a>
                    <a className="blue-bg px-2 rounded-circle py-2 mx-2">
                      <BiLogoFacebook className="text-light fs-5" />
                    </a>
                    <a className="blue-bg px-2 rounded-circle py-2 mx-2">
                      <AiOutlineInstagram className="text-light fs-5" />
                    </a>
                    <a className="blue-bg px-2 rounded-circle py-2 mx-2">
                      <BsTwitterX className="text-light fs-5" />
                    </a>
                    <a className="blue-bg px-2 rounded-circle py-2 mx-2">
                      <BiLogoTiktok className="text-light fs-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
