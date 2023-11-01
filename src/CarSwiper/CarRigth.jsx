
import "../App.css";
function CarRigth({post}) {
   
  
  return (
    <div className="container">
      {post?.length &&
        post.map((element, index) => (
          <div key={index}>
            <div className="container_cont">
              <span>Մոդելը/Մակնիշը</span>
              <span>
                {element.product_name.car_name}
                {element.product_model.model_name}
              </span>
            </div>
            <div className="container_cont">
              <span>Արժեք</span>
              <span>{`${element.car_price} $`}</span>
            </div>
            <div className="container_cont">
              <span>
                Երկիր - {element.product_country_price[0].name_country}
              </span>
              <span>{`${element.car_price} $`}</span>
            </div>
            <div className="container_cont">
              <span>Ավտոմեքենայի թափքը</span>
              <span>{element.product_body.car_body_name}</span>
            </div>
            <div className="container_cont">
              <span>Ավտոմեքենայի արտադրման տարեթիվը</span>
              <span>{element.product_year.car_year}</span>
            </div>
            <div className="container_cont">
              <span>Շարժիչ</span>
              <span>{`${element.product_motor.car_motor}  KW`}</span>
            </div>
            <div className="container_cont">
              <span>Ձիաուժ</span>
              <span>{element.car_horsepower}</span>
            </div>
            <div className="container_cont">
              <span>Մեկ Լիցքավորման հեռավորություն</span>
              <span>{`${element.car_cruising_range} Կմ`}</span>
            </div>
            <div className="container_cont">
              <span>Մեքենայի առավելագույն արագություն</span>
              <span>{`${element.car_max_speed} Կմ`}</span>
            </div>
            <div className="container_cont">
              <span>Ոլորող մոմենտ</span>
              <span>{element.car_torque}</span>
            </div>
            <div className="container_cont">
              <span>Ավտոմեքենայի անվադողերի չափը</span>
              <span>{element.car_wheel_size}</span>
            </div>
            <div className="container_cont">
              <span>մեքենայի ետն. անիվի չափը</span>
              <span>{element.car_wheel_size_back}</span>
            </div>
          </div>
        ))}
    </div>
  ); 
}

export default CarRigth;
