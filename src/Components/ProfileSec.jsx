import React from "react";
import "../Assets/Css/Profile.css";
import { FaFacebookF, FaInstagram, FaMailBulk } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { Link } from "react-router-dom";
import TittlesAll from "./TittlesAll";


function ProfileSec() {
  return (
    <>
      <div className="py-5 my-5">
        <div className="container p-0">
          <div
            class="row contact d-flex flex-wrap m-0 p-0"
            style={{ overflowX: "hidden" }}
          >
            <div class="col-lg-4 col-md-8 col-sm-8 text-center profilesec">
              <div
                class="mb-0 single-contact-form-thumb overflow-hidden"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <div className="py-5 w-100 bg-black border-0">
                  <div
                    className="my-5 py-5 w-50"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-once="true"
                  >
                    <div class="bg-white my-4 w-75 rounded-pill profile_icon">
                      <div className="row p-1 m-0">
                        <div className="col-6"></div>
                        <Link
                          to={"/"}
                          className="col-6 facebookicon profile_social text-decoration-none text-white bg-black  fs-5 p-2 w-auto ms-auto d-flex align-content-center align-items-center justify-content-center text-end rounded-circle"
                        >
                          <FaFacebookF />
                        </Link>
                      </div>
                    </div>
                    <div class="bg-white my-4 w-100 rounded-pill profile_icon">
                      <div className="row p-1 m-0">
                        <div className="col-6"></div>
                        <Link
                          to={"/"}
                          className="col-6 instaicon profile_social text-decoration-none text-white bg-black  fs-5 p-2 w-auto ms-auto d-flex align-content-center align-items-center justify-content-center text-end rounded-circle"
                        >
                          <FaInstagram />
                        </Link>
                      </div>
                    </div>
                    <div class="bg-white my-4 w-75 rounded-pill profile_icon">
                      <div className="row p-1 m-0">
                        <div className="col-6"></div>
                        <Link
                          to={"/"}
                          className="col-6 twittericon profile_social text-decoration-none text-white bg-black  fs-5 p-2 w-auto ms-auto d-flex align-content-center align-items-center justify-content-center text-end rounded-circle"
                        >
                          <TfiTwitter />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 profilecon">
              <div
                class="single-contact-form-thumb1 position-relative z-1"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="contactimage z-1">
                  <img
                    src={require("../Assets/images/reviews1.jpg")}
                    className="object-fit-cover align-middle border-0"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 p-3 p-lg-5 px-sm-0 pb-sm-3 pb-0 overflow-hidden"

            >
              <div className="h-100 procontent" data-aos="fade-left"
                data-aos-duration="1600"
                data-aos-delay="400"
                data-aos-once="true">
                
                <div className="border-start border-secondary border-4 ">
                      <div className="jr_tittle ps-3"><TittlesAll tittle="J.R Sales & Services" /></div>
                    </div>
                <div className="pera pt-3 text-secondary" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true">
                  Set up in the year 2011, we at J.R Sales & Services are
                  continuously engaged in manufacturing, supplying, trading and
                  retailing an exclusive range of Commercial Kitchen Equipment
                  that consists of Kitchen Equipment, Hotel Kitchen Equipment &
                  Canteen Kitchen Equipment.
                </div>
                <div className="pt-4">
                  <table className="styled-table">
                    <tr>
                      <th
                        colspan="2"
                        className="header bg-black text-white pera"
                      >
                        Statutory Profile
                      </th>
                    </tr>
                    <tr className="pera">
                      <th className="bg-secondary">Banker</th>
                      <td>STATE BANK OF INDIA</td>
                    </tr>
                    <tr className="pera">
                      <th className="bg-secondary">GST No.</th>
                      <td> 24ANQPV9757N1ZO</td>
                    </tr>
                    <tr>
                      <th
                        colspan="2"
                        className="header bg-black text-white pera"
                      >
                        Packaging/Payment and Shipment Details
                      </th>
                    </tr>
                    <tr className="pera">
                      <th className="bg-secondary">Payment</th>
                      <td>Cash, Cheque, Credit, Card, DD, Online</td>
                    </tr>
                    <tr className="pera">
                      <th className="bg-secondary">Shipment</th>
                      <td>By Road</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 p-3 p-lg-5 px-sm-0 pb-sm-3 overflow-hidden">
              <table
                className="styled-table"
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                <tr className="pera">
                  <th colspan="2" className="header bg-black text-white">
                    Basic Information
                  </th>
                </tr>
                <tr className="pera">
                  <th className="bg-secondary">Company CEO</th>
                  <td>Jitendra Velari</td>
                </tr>
                <tr className="pera">
                  <th className="bg-secondary">Year of Establishment</th>
                  <td>2011</td>
                </tr>
                <tr className="pera">
                  <th className="bg-secondary">Registered Address</th>
                  <td>
                    172, R.J.D. Taxtail Park, Near Water Canel, Surat Hajira
                    Road, Ichapor - 1, Surat- 395004, Gujarat, India
                  </td>
                </tr>
                <tr className="pera">
                  <th className="bg-secondary">Firm</th>
                  <td>Individual - Proprietor</td>
                </tr>
                <tr className="pera">
                  <th className="bg-secondary">Promoter</th>
                  <td>Mr. Jitendra Velari</td>
                </tr>
                <tr className="pera">
                  <th className="bg-secondary">Annual Turnover</th>
                  <td>Rs. 50 Lakh - 1 Crore</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSec;
