import React from "react";
import videoSourceMP4 from "../Assets/video/equipment2.mp4";
import { FaQuoteLeft } from "react-icons/fa";
import TittlesAll from "./TittlesAll";

function HomeChooseus() {
  let chooseicon = [
    {
      image: require("../Assets/images/industry-icon-style_1134108-80290-removebg-preview-removebg-preview.png"),
      tittle: "Quality of equipment",
      pera: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nemo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nemo?",
    },
    {
      image: require("../Assets/images/homechoose02.png"),
      tittle: "Industrial Experience",
      pera: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nemo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nemo?",
    },
    {
      image: require("../Assets/images/transparent-setting-icon-black-background-two-sharp-metal-1710887247043-removebg-preview.png"),
      tittle: "Support services",
      pera: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nemo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nemo?",
    },
  ];
  return (
    <>
      <div className="whychoosecolor_bg mb-5">
        <div className=" container overflow-hidden">
          <div className="row p-0 m-0 ">
            <div className="col-12 col-lg-6 p-1 py-5 mobieview_space p-lg-5 ps-lg-0 m-0 order-2 order-lg-1 overflow-hidden">
              <div className="" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                <div className="container  border border-secondary p-3 p-lg-5">
                  <div className=" text-white ">
                    <div className="border-start border-secondary border-4 ">
                      <div className="jr_tittle ps-3"><TittlesAll tittle="Why Choose Us" /></div>
                    </div>

                    <div className="pt-3">
                      {chooseicon.map((x, i) => {
                        return (
                          <>
                            <div className="d-block  d-lg-flex mt-5 text-center text-lg-start">
                              <div className=" ms-lg-0 mx-auto choose_icon">
                                <img
                                  src={x.image}
                                  alt=""
                                  className="img-fluid bg-secondary-subtle rounded-circle "
                                />
                              </div>
                              <div className="ps-lg-3 ps-0  pt-3 pt-lg-0 ">
                                <div className="fs-5 text-capitalize">
                                  {x.tittle}
                                </div>
                                <div className="pera  pt-1 " style={{color:"var(--lightgray--)"}}>
                                  {x.pera}
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 p-lg-3 pt-lg-3 pt-3 p-0 m-0 d-flex flex-column justify-content-between order-1 order-lg-2 overflow-hidden"
              style={{ backgroundColor: "rgba(239, 239, 239)" }}
              data-aos="fade-left" data-aos-duration="1800" data-aos-once="true"
            >
              <div className="w-100 p-3 pl-lg-5 pe-lg-0 choosev_height ">
                <video autoPlay loop muted className="w-100 videoborder ">
                  <source
                    src={videoSourceMP4}
                    type="video/mp4"
                    className="w-100"
                  />
                </video>
              </div>
              <div className="p-lg-5 p-3  pt-0" data-aos-once="true" data-aos="fade-up" data-aos-duration="1800">
                <div className="d-flex justify-content-center jr_tittle">
                  <div className="pe-4 fs-1 text-secondary ">
                    <FaQuoteLeft />
                  </div>
                  <div className="jr_tittle text-capitalize">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div className="pera py-3 kjh">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  praesentium. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Asperiores, illum!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeChooseus;
