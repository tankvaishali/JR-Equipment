import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { RiTimeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer_bg text-white ">
        <div className="container">
          <div className="row p-0 m-0 py-3">
            <div
              className="col-12 col-md-4 pt-4"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div>
                <img
                  src={require("../Assets/images/j-r-sales-services-logo-90x90.png")}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="text-white pera py-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                delectus! amet consectetur adipisicing elit. Ut, delectus
              </div>
              <div className="d-flex fs-4 my-3">
                <Link
                  to={
                    "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.jrequipments.com%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                  }
                  target="_blank"
                  className="footericon text-center p-2 mx-1  ms-0 d-flex text-decoration-none text-white facebookicon"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={
                    "https://x.com/intent/post?url=https%3A%2F%2Fwww.jrequipments.com%2F&text=J.R.Equipment"
                  }
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white twittericon"
                >
                  <FaTwitter />
                </Link>
                <Link className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white instaicon">
                  <FaInstagram />
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Fwww.jrequipments.com%2F"
                  }
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white linkicon"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>

            <div
              className="col-12 col-md-4 ps-2 ps-lg-5 pt-4"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="ps-0 ps-lg-5">
                <div className="jr_tittle">Quicked Link</div>
                <div className="p-1 pera pt-2 pt-3">
                  <Link
                    to={"/"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Home
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/aboutus"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    About
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/product"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Product
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/service"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Service
                  </Link>
                </div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={"/contactus"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-1 fs-6">
                      <IoArrowRedoCircleOutline />
                    </span>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-12 col-md-4 pt-4"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div>
                <div className="jr_tittle">Contact Details</div>
                <div className="p-1 pera pt-2">
                  <Link
                    to={
                      "https://www.google.com/maps/place/21%C2%B011'27.2%22N+72%C2%B044'32.2%22E/@21.1908744,72.7396886,17z/data=!3m1!4b1!4m4!3m3!8m2!3d21.1908744!4d72.7422635?entry=ttu"
                    }
                    target="_blank"
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-2 fs-4">
                      <FaMapLocationDot />
                    </span>
                    172, RJD Textile Park, Ichhapore-1, Hazira Road, Bhatha,
                    Surat - 395009, Gujarat, India
                  </Link>
                </div>
                <div className="p-1 pera ">
                  <Link
                    to="mailto:abcdef@gmail.com"
                    target="_blank"
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-2 fs-4">
                      <FaMailBulk />
                    </span>
                    abcdef@gmail.com
                  </Link>
                </div>
                <div className="p-1 pera ">
                  <Link
                    to={"tel:+91 8048971629"}
                    className="text-decoration-none linktext_hover fw-medium"
                  >
                    <span className="pe-2 fs-4">
                      <MdWifiCalling3 />
                    </span>
                    +(91) 8048971629
                  </Link>
                </div>
                <div className="p-1 pera ">
                  <span className="text-decoration-none linktext_hover fw-medium">
                    <span className="pe-2 fs-4">
                      <RiTimeFill />
                    </span>
                    8 AM - 5 PM , Monday - Saturday
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p
            className="border-top border-secondary text-center p-3 m-0"
            style={{ fontSize: "12px" }}
          >
            Copyright 2024 © J.R.Equipment. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
