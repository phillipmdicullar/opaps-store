import React from "react";
import "./categories.css";
import veges from "./images/veges.png";
import veges1 from "./images/veges1.png";
import veges2 from "./images/veges2.png";
import veges3 from "./images/veges3.png";
function Categories() {
  return (
    <div className="categories">
      <p>Product categories</p>
      <div className="category-list">
        <div className="cat-one">
          <a href="#">
            <img src={veges} alt="" />
            <p>Vegetables</p>
          </a>
        </div>
        <div className="cat-one">
          <a href="#">
            <img src={veges1} alt="" />
            <p>Fruits</p>
          </a>
        </div>
        <div className="cat-one">
          <a href="#">
            <img src={veges2} alt="" />
            <p>Diary</p>
          </a>
        </div>
        <div className="cat-one">
          <a href="#">
            <img src={veges3} alt="" />
            <p>Meat</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
