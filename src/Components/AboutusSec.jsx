import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import CountUp from 'react-countup';
import TittlesAll from "./TittlesAll";

function AboutusSec() {
  return (
    <>
      <div className="py-5 mt-5">
        <div className="container">
          <div className="row p-0 m-0">

            <div className="col-12 col-lg-4 pt-4 d-flex flex-column ps-0 pe-lg-4 pe-0 overflow-hidden" data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
              <div className="h-100 test-shinee">
                <img
                  src={require("../Assets/images/professional-kitchen-dynamics-stainless-steel-equipment-culinary-excellence-action_875722-54607.jpg")}
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
            <div className="col-12 col-lg-2 p-0 m-0 pt-4 d-flex flex-column overflow-hidden" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true">

              <div className="flex-grow-1 test-shinee">
                <div className="h-100 ">
                  <img
                    src={require("../Assets/images/empty-seats-store_1048944-9045659.jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
              <div className="mt-auto">
                <div className="fs-3 text-center fw-medium p-4 bg-black text-white mt-3 count_text">+ <CountUp end={14} enableScrollSpy={true} separator="" /> Years Experience</div>
              </div>

            </div>


            <div className="col-12 col-lg-6 pt-4  d-flex flex-column justify-content-between ps-0 ps-lg-5">
              <div>

                <div className=' border-start border-secondary border-4' >
                  <div className='jr_tittle fs-5 ps-3' data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">About Us</div>
                  <div className='jr_tittle ps-3'><TittlesAll tittle={"We Elevate Your Cooking"} /></div>
                </div>

                <div className="pera py-3 kjh">
                  We are a proprietorship firm, which is guided by Mr. Jitendra
                  Velari, who has years of experience in this industry. Owing to
                  his excellent leadership and efficient supervision, we have
                  been able to establish a great rapport in the competitive
                  market. His professional work ethics and profound knowledge
                  has helped us a lot in developing strong relationships with
                  our valuable clients.
                </div>

                <div className="pt-1">
                  <div className="d-block d-lg-flex justify-content-between ">
                    <div>
                      <div className="d-flex  pt-2">
                        <span className="pe-2 fs-5">
                          <IoMdCheckboxOutline />
                        </span>
                        <div className="text-lowercase kjh">Advanced infrastructure</div>
                      </div>
                      <div className="d-flex  pt-2">
                        <span className="pe-2 fs-5">
                          <IoMdCheckboxOutline />
                        </span>
                        <div className="text-lowercase kjh">Team of skilled professionals</div>
                      </div>
                      <div className="d-flex  pt-2">
                        <span className="pe-2 fs-5">
                          <IoMdCheckboxOutline />
                        </span>
                        <div className="text-lowercase kjh">Adherence to industry norms</div>
                      </div>
                    </div>
                    <div className="ps-lg-4 ps-0">
                      <div className="d-flex  pt-2">
                        <span className="pe-2 fs-5">
                          <IoMdCheckboxOutline />
                        </span>
                        <div className="text-lowercase kjh">Production and supply of zero-defect products</div>
                      </div>
                      <div className="d-flex  pt-2">
                        <span className="pe-2 fs-5">
                          <IoMdCheckboxOutline />
                        </span>
                        <div className="text-lowercase kjh">Affordable prices and timely delivery</div>
                      </div>
                      <div className="d-flex  pt-2">
                        <span className="pe-2 fs-5">
                          <IoMdCheckboxOutline />
                        </span>
                        <div className="text-lowercase kjh">Support Services</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row shadow m-0  mt-3">
                  <div className="col-3 p-0 m-0">
                    <div className="h-100 fs-1 text-white bg-secondary text-center d-flex align-items-center justify-content-center">
                      <FaQuoteRight />
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="h-100 d-flex align-items-center py-4  pera fw-bold">
                      " The right kitchen equipment turns meals into culinary masterpieces. "
                    </div>
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

export default AboutusSec;
