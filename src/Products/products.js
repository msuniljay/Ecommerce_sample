import React from "react";
import "./products.css";
import { BsFillBagFill } from "react-icons/bs";
const products = ({ result }) => {
  console.log("result:", result);
  return (
    <>
      <div className="card-container">
        {result.map((item) => {
          const { img, title, star, reviews, prevPrice, newPrice } = item;
          return (
            <div>
              <section className="card">
                <img src={img} alt={title} className="card-img" />
                <div className="card-details">
                  <h3 className="card-title">{title}</h3>
                  <section className="card-reviews">
                    {star} {star} {star} {star}
                    <span className="total-reviews">{reviews}</span>
                  </section>
                  <section className="card-price">
                    <div className="price">
                      <del>{prevPrice}</del> {newPrice}
                    </div>
                    <div className="bag">
                      <BsFillBagFill className="bag-icon" />
                    </div>
                  </section>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default products;
