import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RangeSection.scss";
const RangeSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/browse_the_range")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(data);
  return (
    <section className="range-sections">
      <div className="container">
        <div className="content-header">
          <h2 className="content-header__heading">Browse The Range</h2>
          <p className="content-header__paragriph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="content-body">
          {data.map((item, i) => (
            <div className="content-images__card" key={i}>
              <img src={item.img[0]} alt="site-images" />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RangeSection;
