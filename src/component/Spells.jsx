import React, { useState, useEffect } from "react";
import line from "../assets/line.svg";
import ClipLoader from "react-spinners/ClipLoader";

const Spells = ({ api }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  // useLayoutEffect(() => {

  // });

  const fetchApi = async (url) => {
    const res = await fetch(url + "spells");

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
        <div className="background-4" style={{ height: "500px" }}>
          <div>
            <div className="center-div">
              <p className="text-light text-center">
                Discover the wizarding world
              </p>
              <h1 className="text-light text-center">Spells</h1>
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
          <div className="text-center">
            <ClipLoader loading={loading} color="#36d7b7" />
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-3 my-3">
                <div className="container">
                  <img src={item.attributes.image} width={300} height={200} />
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

export default Spells;
