import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Car() {
  const [car, setCar] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    fetch("https://www.ecomotors.am/api/car-top")
      .then((response) => response.json())
      .then((data) => setCar(data.cars))
      .catch((error) => console.log(error));
  },[]);
  
  return (
    <div className="wrapper-car">
      {car.map((item, index) => (
        <Link
          to={`/cars/${item.car_slug}`}
          key={item.id}
          className="wrapper-link"
        >
          <div className="card" key={index}>
            <img
              src={`https://ecomotors.am/storage/${
                item.product_images[hoverIndex === index ? 3 : 4].image
              }`}
              alt="ecomotors-car"
              width={300}
              onMouseEnter={() => {
                setHoverIndex(index);
              }}
              onMouseLeave={() => {
                setHoverIndex(null);
              }}
              style={{ cursor: "pointer" }}
            />
            <div className="card-name">
              <span>{item.product_name.car_name}</span>
              <span>{item.product_model.model_name}</span>
            </div>
            <div className="card-price">
              <span>{`${item.car_price}  $`}</span>
              <span>{item.product_year.car_year}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Car;
