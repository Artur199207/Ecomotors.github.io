import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Anime from "../CarSwiper/Swiper";
import CarRigth from "../CarSwiper/CarRigth";
function Leoute() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://www.ecomotors.am/api/car-details/${slug}`)
      .then((response) => response.json())
      .then((data) => setPost(data.cars))
      .catch((error) => console.log(error));
  }, [slug]);
  
  console.log(post);
  return (
    <div className="wrapper_content">
      <div className="wrapper_left">
        <Anime post={post} />
      </div>
      <div className="wrapper_rigth">
        <CarRigth post={post}/>
      </div>
    </div>
  ); 
}

export default Leoute;
