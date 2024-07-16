import React from "react";
import { useState, useEffect } from "react";
import line from "../assets/line.svg";

const Characters = ({ api }) => {
  console.log(api);
  const [data, setData] = useState([]);

  // useLayoutEffect(() => {

  // });

  const fetchApi = async (url) => {
    const res = await fetch(url + "characters");

    const item = await res.json();
    console.log(item.data);

    setData(item.data);
  };

  useEffect(() => {
    fetchApi(api);
  }, []);

  return (
    <>
      <div className="black-bg char">
        <div className="background-1" style={{ height: "500px" }}>
          <div>
            <div className="center-div">
              <p className="text-light text-center">
                Discover the wizarding world
              </p>
              <h1 className="text-light text-center">Characters</h1>
              <p className="text-light text-center">
                The first Harry Potter book, Harry Potter and the Philosopher’s
                Stone, was published by Bloomsbury in 1997 to immediate popular
                and critical acclaim. Six further best-selling books, three
                companion books, a playscript and two screenplays have since
                followed. The Harry Potter books have been translated into over
                80 languages, won multiple awards, and sold more than 500
                million copies worldwide, becoming the best-selling book series
                in history...
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
          <div className="row">
            {data.map((item) => (
              <div className="col-3 my-3">
                <div className="container">
                  <img
                    src={item.attributes.image}
                    style={{ width: "70%" }}
                    width={300}
                    height={200}
                  />
                  <p className="text-light mt-4">
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

export default Characters;
