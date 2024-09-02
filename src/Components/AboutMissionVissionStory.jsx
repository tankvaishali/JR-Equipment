import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import ButtonHover from "./ButtonHover";
import videoSourceMP4 from "../Assets/video/kitchen.mp4";
import TittlesAll from "./TittlesAll";

function AboutMissionVissionStory() {
  return (
    <>
      <div className="py-lg-3 overflow-hidden">
        <div className="container ">
          <div className="row  ">
            <div
              className="col-12 col-lg-6 p-3 p-md-5 m-0 "
              style={{ backgroundColor: "rgb(239, 239, 239)" }}
              data-aos="fade-right" data-aos-duration="1800" data-aos-once="true"
            >
              <div className="p-2">
                <div className="border-start border-secondary border-4  mt-2 ">
                  <div className="jr_tittle ps-3 ">
                    {" "}
                    <TittlesAll tittle="Our Mission" />
                  </div>
                </div>

                <div className="my-5 test-shine">
                  <img
                    src={require("../Assets/images/mission.jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{ border: "15px solid white" }}
                  />
                </div>
                <div className="jr_tittle fs-5 text-capitalize">Lorem ipsum dolor sit.</div>
                <div className="pera pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus quos nemo itaque nesciunt aut placeat, pariatur
                  laboriosam minima ipsam neque.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-3 p-lg-5 m-0 about_missionbg" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
              <div className="border pera border-secondary p-4  p-lg-5  text-white h-100">
                <div className="ps-xxl-5">
                  <div className="jr_tittle  text-capitalize fs-1">
                    {" "}
                    Benefits & Risks
                  </div>
                  <div className="jr_tittle text-capitalize pt-2 fs-5">
                    {" "}
                    Advantages and Management
                  </div>
                  <div
                    className="pera pt-2 "
                    style={{ color: "var(--lightgray--)" }}
                  >
                    {" "}
                    We are one of the leading manufacturers, suppliers, traders and retailers of an amazing range of high quality Commercial Kitchen Equipment. The offered products are highly regarded for their durability and optimal resistance properties.
                  </div>
                  <div className="pt-2">
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Production experts
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Superior infrastructural facility
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Maximum customer satisfaction
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Upcoming technological trends
                    </p>
                  </div>
                  <div className="pt-2 ">
                    <ButtonHover
                      btnttitle="Make An Appointment"
                      to="/contactus"
                      className="fw-medium p-3  fs-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 p-3 p-md-5 m-0 bg-black order-1 order-lg-0" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
              <div className="border border-secondary p-3 p-lg-5  text-white h-100">
                <div className="ps-xxl-5">

                  <div className="jr_tittle text-capitalize pt-3 fs-5">
                    {" "}
                    Revolutionizing kitchens with innovative tools
                  </div>
                  <div
                    className="pera pt-3 "
                    style={{ color: "var(--lightgray--)" }}
                  >
                    {" "}
                    Our quality-oriented approach and timely delivery of finest quality kitchen equipment have helped us in building a praiseworthy reputation amidst our competitors in the market. To ensure high quality for our products, we have incepted, executed and maintained a strict quality control system. We continuously strive to improve and check the efficiency of our products by adhering to the specified industry norms.
                  </div>
                  <div
                    className="pera pt-3 "
                    style={{ color: "var(--lightgray--)" }}
                  >
                    {" "}
                    All our products are tested on multiple parameters for the assurance of quality and only those products that conform to the desired standards are made available to the customers.
                  </div>
                  <div className="pt-3 pera">
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Our Quality Assurance

                    </p>
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Client Satisfaction
                    </p>
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Advanced infrastructure
                    </p>
                    <p className="py-0  text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Affordable prices and timely delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 p-3 p-md-5 m-0 order-0 order-lg-1"
              style={{ backgroundColor: "rgb(239, 239, 239)" }}
              data-aos="fade-left" data-aos-duration="1800" data-aos-once="true"
            >
              <div className="p-2">
                <div className="border-start border-secondary border-4 mt-2 ">
                  <div className="jr_tittle ps-3">
                    {" "}
                    <TittlesAll tittle="Our Vision" />
                  </div>
                </div>

                <div className="my-5 test-shine">
                  <img
                    src={require("../Assets/images/problem-solving-concept-with-graphic_23-2149908695.jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{ border: "15px solid white" }}
                  />
                </div>
                <div className="jr_tittle fs-5 text-capitalize">Lorem ipsum dolor sit.</div>
                <div className="pera pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus quos nemo itaque nesciunt aut placeat, pariatur
                  laboriosam minima ipsam neque.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-lg-6 m-0 p-0"
              style={{ backgroundColor: "rgb(239, 239, 239)" }}
              data-aos="fade-right" data-aos-duration="1800" data-aos-once="true"
            >
              <video autoPlay loop muted className="w-100 h-100 object-fit-cover p-0">
                <source
                  src={videoSourceMP4}
                  type="video/mp4"
                  className="w-100 h-100"
                />
              </video>
            </div>
            <div className="col-12 col-lg-6 p-3 p-lg-5 m-0 bg-black" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
              <div className="border border-secondary p-3 p-lg-5  text-white h-100">
                <div className="ps-xxl-5">

                  <div className="border-start border-secondary border-4 mt-2 ">
                    <div className="jr_tittle ps-3">
                      {" "}
                      <TittlesAll tittle="Our Story" />
                    </div>
                  </div>

                  <div
                    className="pera pt-3 "
                    style={{ color: "var(--lightgray--)" }}
                  >
                    {" "}
                    We are bestowed with a team of skilled and specialized professionals that helps us in executing our business processes effortlessly. Their in-depth knowledge and profound leadership help us to manufacture and deliver high quality kitchen equipment within the specified time frame. We regularly conduct training sessions and seminars for our professionals to keep them up-to-date with the prevailing technological and market trends.
                  </div>
                  <div className="pt-2 pera">
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Lorem ipsum dolor sit.{" "}
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Lorem ipsum dolor sit.{" "}
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Lorem ipsum dolor sit.{" "}
                    </p>
                    <p className="py-0 text-capitalize">
                      <span className="pe-2 fs-5">
                        <IoCheckmarkDoneSharp />
                      </span>
                      Lorem ipsum dolor sit.{" "}
                    </p>
                  </div>
                  <div className="pt-2 ">
                    <ButtonHover
                      btnttitle="Contact Us"
                      to="/contactus"
                      className="fw-medium p-3  fs-5"
                    />
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

export default AboutMissionVissionStory;
