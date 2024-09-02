import React from "react";
import HOC from "./HOC";
import ServiceProvide from "./ServiceProvide";
import "../Assets/Css/ServicePage.css";
import ServiceContact from "./ServiceContact";
import ClientSatisfication from "./ClientSatisfication";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import TittlesAll from "./TittlesAll";
import { Player } from "@lottiefiles/react-lottie-player";

function ServicePage() {
  return (
    <>
      <div className="bg_main">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center flex-column jr_tittle"
            style={{ height: "65vh" }}
          >
            <h2
              className="text-white text-center lh-base fs-1 fw-bold text-capitalize"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1800"
              data-aos-once="true"
              style={{ letterSpacing: "1px" }}
            >
              Dedicated Service for Optimal Kitchen equipment Performance
            </h2>
            <div
              className="text-white mt-2 fs-6 fw-semibold"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <Link
                to={"/"}
                className="text-decoration-none text-white bgtittle"
              >
                Home
              </Link>{" "}
              <MdKeyboardDoubleArrowRight /> <span>Service</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" help_bg py-0 py-lg-5">
        <div className="container py-0 py-lg-5">
          <div className="row p-0 p-5 bg-white shadow-lg">
            <div className="col-12 col-lg-6">
              <div className="h-100">
                <Player
                  src={
                    "https://lottie.host/08617f17-3d9f-4d02-9011-3107e465a356/vvus93cykJ.json"
                  }
                  autoplay
                  loop
                  controls
                />
                {/* <img src={require("../Assets/images/contact-us-2_bw.jpg")} alt="" className="img-fluid" /> */}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className=" text-center mx-auto py-5 my-5">
                <div className="text-dark lh-lg">
                
                  <div className="jr_tittle ps-3">
                    <TittlesAll tittle={"How Can We Help You ?"} />
                  </div>
                  <p
                    className=" fs-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1800"
                    data-aos-once="true"
                  >
                    We specialize in providing top-quality hotel kitchen
                    equipment that meets all your culinary needs. Contact us
                    today to see how our products can enhance your kitchen's
                    efficiency and performance!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceProvide />
      <ServiceContact />
      <ClientSatisfication />
    </>
  );
}

export default HOC(ServicePage);
