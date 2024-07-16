import React, { useState, useEffect } from "react";
import line from "../assets/line.svg";
import ClipLoader from "react-spinners/ClipLoader";

const Potions = ({ api }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  // useLayoutEffect(() => {

  // });

  const fetchApi = async (url) => {
    const res = await fetch(url + "potions");

    const item = await res.json();
    console.log(item.data);

    setData(item.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi(api);
  }, []);

  return (
    <>
      <div className="black-bg potion">
        <div className="background-3" style={{ height: "500px" }}>
          <div>
            <div className="center-div">
              <h1 className="text-light text-center">Potions</h1>
              <h3 className="text-light text-center">By J.K. Rowling</h3>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="d-flex px-5">
            <hr className="w-50" style={{ color: "white" }} />
            <img src={line} className="mx-3" style={{ color: "white" }} />
            <hr className="w-50" style={{ color: "white" }} />
          </div>
        </div>
        <div>
          <h1 className="text-light text-center">Harry Potter</h1>
        </div>
        <div className="py-3">
          <div className="d-flex px-5">
            <hr className="w-50" style={{ color: "white" }} />
            <img src={line} className="mx-3" style={{ color: "white" }} />
            <hr className="w-50" style={{ color: "white" }} />
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <ClipLoader loading={loading} color="#36d7b7" />
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-3 my-3">
                <div className="container">
                  <img src={item.attributes.image} width={300} height={300} />
                  <p className="text-light mt-4 text-center">
                    {item.attributes.name.replaceAll("-", " ").toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Potions;
