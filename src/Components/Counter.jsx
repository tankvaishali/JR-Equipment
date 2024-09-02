import Aos from "aos";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";

function Counter() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <>
      <div className="py-5 mt-5">
        <div className="container">
          <div className="row  my-5">
            <div className="col-lg-3 col-md-6 col-sm-6 overflow-hidden">
              <div
                className="counter text-secondary text-center position-relative z-1"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="counter-icon text-white fs-3 fw-bold rounded-circle position-absolute top-0 start-0 z-1">
                  <BsGraphUpArrow />
                </div>
                <h3 className="fs-5 fw-bold text-uppercase m-0">
                  Annual Turnover
                </h3>
                <span className="counter-value fs-3 fw-bold">
                  {" "}
                  <CountUp end={1} enableScrollSpy={true} separator="" /> CR +
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-5 overflow-hidden">
              <div
                className="counter2 text-secondary text-center position-relative z-1"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="counter-icon2 text-white fs-3 rounded-circle position-absolute top-0 start-0 z-1">
                  <IoIosPeople />
                </div>
                <h3 className="fs-5 fw-bold text-uppercase m-0">
                  Number of Employees
                </h3>
                <span className="counter-value fs-3 fw-bold">
                  <CountUp end={10} enableScrollSpy={true} separator="" /> +{" "}
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-5 overflow-hidden">
              <div
                className="counter1 text-secondary text-center position-relative z-1"
                data-aos="zoom-in"
                data-aos-duration="1800"
                data-aos-delay="800"
                data-aos-once="true"
              >
                <div className="counter-icon1 text-white fs-3 rounded-circle position-absolute top-0 start-0 z-1">
                  <FaGlobe />
                </div>
                <h3 className="fs-5 fw-bold text-uppercase m-0">
                  Year of Established
                </h3>
                <span className="counter-value fs-3 fw-bold">
                  <CountUp end={13} enableScrollSpy={true} separator="" /> +
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-5 overflow-hidden">
              <div
                className="counter3 text-secondary text-center position-relative z-1"
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-delay="1000"
                data-aos-once="true"
              >
                <div className="counter-icon3 text-white fs-3 rounded-circle position-absolute top-0 start-0 z-1">
                  <ImHappy2 />
                </div>
                <h3 className="fs-5 fw-bold text-uppercase m-0">
                  happy clients
                </h3>
                <span className="counter-value fs-3 fw-bold">
                  <CountUp end={789} enableScrollSpy={true} separator="" />+
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
