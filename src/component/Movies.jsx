import React, { useState, useEffect } from "react";
import line from "../assets/line.svg";
import ClipLoader from "react-spinners/ClipLoader";

const Movies = ({ api }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  console.log(api);

  // useLayoutEffect(() => {

  // });

  const fetchApi = async (url) => {
    const res = await fetch(url + "movies");
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
      <div className="black-bg">
        <div className="background-2" style={{ height: "650px" }}>
          <div>
            <div className="center-div">
              <p className="text-light text-center">
                Discover the wizarding world
              </p>
              <h1 className="text-light text-center">Films</h1>
              <p className="text-light text-center">
                J.K. Rowling’s beloved Harry Potter novels were brought to life
                on screen in eight blockbuster films and went on to inspire the
                Fantastic Beasts film series, taking us into a new era of the
                Wizarding World.
              </p>
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
                  <img src={item.attributes.poster} style={{ width: "90%" }} />
                  <p className="text-light mt-4 mx-4">
                    {item.attributes.slug.replaceAll("-", " ").toUpperCase()}
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

export default Movies;
