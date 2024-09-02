import React from "react";
import Slider from "react-slick";
import ButtonHover from "./ButtonHover";
import { ProductItemlist } from "./ProductItemlist";
import { Link } from "react-router-dom";
import TittlesAll from "./TittlesAll";

function HomeAboutus() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    swipe: true,
    arrows: false,
    pauseOnHover: false,
  };

  let aboutimage = [
    {
      image: require("../Assets/images/modern-kitchen-factory-with-lot-equipment_511042-2236.jpg")
    },

    {
      image: require("../Assets/images/kitchen-appliances-professional-kitchen-modern-restaurant-close-up_93675-149097.jpg")
    },

    {
      image: require("../Assets/images/male-salesman-hypermarket-describes-features-gas-stove-female-client-both-wearing-face-masks_93675-134420.jpg")
    },

    {
      image: require("../Assets/images/kindergarten-modern-equipped-kitchen-preparing-food-children_300903-360.jpg")
    },

  ]
  return (
    <>
      <div className="container my-5 bg-white py-sm-5">
        <div className="row py-5">
          <div className="col-12 col-md-12 col-lg-7 overflow-hidden">
            <div style={{ width: "82%" }} className="test-shine" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
              <img
                src={require("../Assets/images/Commercial_Kitchen_Equipment.jpg")}
                alt=""
                className="img-fluid w-100 h-100"
              />
            </div>

            <div className="p-0 bg-white aboutslide_sec overflow-hidden">
              <div className="aboutslider  ms-auto  m-0  overflow-hidden" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                <Slider {...settings} className="p-0 m-0  overflow-hidden border border-5 border-white">
                  {aboutimage?.map((x, i) => {
                    console.log(x);
                    return (
                      <>
                        <div className="slider_imageaboutus ">
                          <img src={x.image} alt="" className="img-fluid w-100 h-100 object-fit-cover " />
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5  d-flex flex-column justify-content-between">
            <div className="h-100 ">

              <div className="border-start border-secondary border-4 ">
                <div className="jr_tittle ps-3"><TittlesAll tittle="About Us" /></div>
              </div>
              <div className="pera py-3">
                Our organization is proficient in manufacturing and supplying a
                premium quality range of Commercial Kitchen Equipment. The
                varied range of kitchen equipment offered by us is manufactured
                using graded steel and certified components, and is known for
                reliable performance, easy operations, longer functional life
                and energy efficiency. We can make these equipments available in
                different capacities and sizes, as per the specifications of
                clients.
              </div>
              <div className="row g-3 p-0 m-0">
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={require("../Assets/images/vector-golden-balance-law-scales-with-flat-illustration-style_954135-1168-removebg-preview.png")}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2  text-capitalize">
                      Legal Status of Firm
                    </div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">
                      Individual - Proprietor
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={require("../Assets/images/charity-vector-illustration-style_717774-11817-removebg-preview.png")}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2 text-capitalize">
                      Nature of Business
                    </div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">Manufacturer</div>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={require("../Assets/images/verified-logistic-vector-icon-design-illustration_1174953-23790-removebg-preview.png")}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2 text-capitalize">GST No.</div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">24ANQPV9757N1ZO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAboutus;
