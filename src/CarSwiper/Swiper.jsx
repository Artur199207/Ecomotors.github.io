import "../App.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function Anime({ post }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="wrapper_left-content">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {post?.length &&
          post.map((element) => (
            <div key={element.id}>
              {element.product_images.map((car, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`https://ecomotors.am/storage/${car.image}`}
                    alt={index}
                    key={car.product_car_id}
                    width={200}
                  />
                </SwiperSlide>
              ))}
            </div>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {post?.length &&
          post.map((element) => (
            <div key={element.id}>
              {element.product_images.map((car, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`https://ecomotors.am/storage/${car.image}`}
                    alt={index}
                    key={car.product_car_id}
                    width={200}
                  />
                </SwiperSlide>
              ))}
            </div>
          ))}
      </Swiper>
    </div>
  );
}

export default Anime;
