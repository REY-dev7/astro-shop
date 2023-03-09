import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="fashion cloths"
          />
          <Link className="link" to="/products/1">
            <button>Sale</button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="fashion cloths"
          />
          <Link to="/products/1" className="link">
            <button>Women</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2108739/pexels-photo-2108739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="fashion cloths"
          />
          <Link to="/products/1" className="link">
            <button>New Season</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/3757380/pexels-photo-3757380.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="fashion cloths"
              />
              <Link to="/products/1" className="link">
                <button>Men</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/952213/pexels-photo-952213.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="fashion cloths"
              />
              <Link to="/products/1" className="link">
                <button>Accessories</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="fashion cloths"
          />
          <Link to="/products/1" className="link">
            <button>Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
