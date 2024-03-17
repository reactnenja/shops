import { useEffect, useState } from "react";
import { IoMdShare } from "react-icons/io";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GroupCard.scss";

const GroupCard = () => {
  const [dataCard, setdataCard] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/our_products")
      .then((result) => {
        setdataCard(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(dataCard);

  return (
    <section className="card-group">
      <div className="container">
        <div className="our__products">
          <div className="our__head">
            <h1>Our Products</h1>
          </div>
          <div className="our__body">
            {dataCard.map((item, i) => (
              <div className="card" key={i}>
                <div className="card__head">
                  <img src={item.images[0]} alt="card images" />
                  <div className="card__head-discount">{item.descount}</div>
                </div>
                <div className="card__body">
                  <h3>{item.heading}</h3>
                  <p>{item.title}</p>
                </div>
                <div className="card__foot">
                  {item.price}
                  <del>{item.old_price}</del>
                </div>

                <div className="option__buttons">
                  <div className="main__btn">
                    <button className="add__tocard">Add to cart</button>
                    <div className="group__shares">
                      <Link className="share__btn">
                        <IoMdShare />
                        <span className="text__shares">Share</span>
                      </Link>
                      <Link className="share__btn">
                        <FaArrowRight />
                        <span className="text__shares">Compare</span>
                      </Link>
                      <Link className="share__btn">
                        <FaRegHeart />
                        <span className="text__shares">Like</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupCard;
