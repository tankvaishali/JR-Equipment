import React from 'react'
import HOC from './HOC'
import { FaMapLocationDot } from 'react-icons/fa6'
import { BiSolidPhoneCall } from 'react-icons/bi'
import "../Assets/Css/ContactusPage.css"
import { FaMailBulk } from 'react-icons/fa'
import ButtonHover from './ButtonHover'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import TittlesAll from './TittlesAll'

function ContactusPage() {
  return (
    <>

      <div className='bg_main'>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column jr_tittle" style={{ height: '65vh' }}>
            <h2 className='text-white text-center lh-base fs-1 fw-bold text-capitalize' style={{ letterSpacing: "1px" }} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true">Let's Become A Part Of kitchen equipment</h2>
            <div className='text-white mt-2 fs-6 fw-semibold' data-aos="fade-up" data-aos-delay="800" data-aos-duration="1800" data-aos-once="true"><Link to={"/"} className='text-decoration-none text-white bgtittle' >Home</Link> <MdKeyboardDoubleArrowRight /> <span className=''>Contact</span></div>
          </div>
        </div>
      </div>

      <div class="contact-form-area pb-100 mb-5 overflow-hidden">
        <div class="container">
          <div class="row contact- d-flex flex-wrap" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
            <div class="col-lg-4 col-md-8 col-sm-8 text-center">
              <div class="single-contact-form-thumb overflow-hidden" data-aos="fade-right" data-aos-duration="900" data-aos-once="true">
                <img src={"https://media.istockphoto.com/id/527857401/photo/industrial-kitchen.jpg?s=612x612&w=0&k=20&c=ElVolELTb-en1syxhdkL2WS8wMvqym4bAIjaAlvwM7c="} className='align-middle border-0 position-relative' alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4">
              <div class="single-contact-form-thumb1 position-relative z-1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                <div className='contactimage z-1'>
                  <img src={"https://img.freepik.com/premium-photo/professional-kitchen-restaurant-modern-equipment-devices-empty-kitchen_130111-5631.jpg?ga=GA1.1.949763891.1720709653&semt=ais_user"} className='object-fit-cover align-middle border-0 position-relative' alt="" />
                </div>
                <div class="single-contact-form-content inner position-absolute z-1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400" data-aos-once="true">
                  <div class="dreamit-contact-title text-left">
                    <h5 className='text-white py-3 jr_tittle'>Contact Info</h5>
                  </div>
                  <div class="faq-contact-box1 overflow-hidden">
                    <div class="faq-icon1 float-start me-3">
                      <FaMapLocationDot className='text-white fs-3' />
                    </div>
                    <div class="faq-title overflow-hidden">
                      <h3 className='text-white m-0 fs-5 p-0 jr_tittle'>Address</h3>
                      <Link to={"https://www.google.com/maps?q=21.19087440,72.74226350"} className='text-decoration-none' target='_blank'><p className='text-white py-1 text-capitalize pera'>172, RJD Textile Park, <br /> Ichhapore-1, Hazira Road, Bhatha, <br /> Surat - 395009, Gujarat, India.</p></Link>
                    </div>
                  </div>
                  <div class="faq-contact-box1 pt-2 overflow-hidden">
                    <div class="faq-icon1 float-start me-3">
                      <FaMailBulk className='text-white fs-3' />
                    </div>
                    <div class="faq-title overflow-hidden">
                      <h3 className='text-white m-0 fs-5 p-0 jr_tittle'>E-mail</h3>
                      <Link to={"mailto:abcdef@gmail.com"} className='text-decoration-none' target='_blank'><p className='text-white py-1 pera'>abcdef@gmail.com</p></Link>
                    </div>
                  </div>
                  <div class="faq-contact-box1 pt-2 overflow-hidden">
                    <div class="faq-icon1 float-start me-3">
                      <BiSolidPhoneCall className='text-white fs-3' />
                    </div>
                    <div class="faq-title overflow-hidden">
                      <h3 className='text-white m-0 fs-5 p-0 jr_tittle'>Phone no.</h3>
                      <Link to={"tel:8048971629"} className='text-decoration-none'><p className='text-white py-1 pera'>(+91) 80489 71629</p></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-12 pl-0">
              <div class="row d-flex flex-wrap p-1" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
                <div class="col-lg-12 col-sm-12" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="600" data-aos-once="true">
                  <div class="contact-form-box inner p-0">
                    <div class="contact-form-title">

                      <div className="border-start border-secondary border-4 ">
                        <div className="jr_tittle ps-3"><TittlesAll tittle="Get In Touch With Us" /></div>
                      </div>
                      <p className='pt-3 pb-2 pera' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero incidunt labore magnam sed expedita.</p>
                    </div>
                    <form action="https://formsubmit.co/abcdef@email.com" method="POST">
                      <div class="row d-flex flex-wrap" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
                        <div class="col-lg-12 col-sm-12">
                          <div class="from-box">
                            <input type="text" className='p-3 rounded w-100 mb-4 border' name="name" placeholder="Name" required />
                          </div>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                          <div class="from-box">
                            <input type="email" className='p-3 rounded w-100 mb-4 border' name="mail" placeholder="E-Mail" required />
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="from-box">
                            <textarea name="massage" id="" className='w-100 p-3 rounded border' rows={7} placeholder="Message"></textarea>
                          </div>
                        </div>
                      </div>
                      {/* <div className='pt-4'> */}
                        <button type="submit" className="elementor-button px-5 py-2 border-0 mt-4 ">
                          <button type="submit" className={`elementor-button-text text-white text-decoration-none fw-bold`} >
                            Submit
                          </button>
                        </button>
                      {/* </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >

      <div className='map'>
        <div className='container'>
          <div class="p-lg-5 p-3 p-sm-2 overflow-hidden" data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3720.032335796444!2d72.73968857526117!3d21.190874380499274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzI3LjIiTiA3MsKwNDQnMzIuMiJF!5e0!3m2!1sen!2sin!4v1720333542765!5m2!1sen!2sin" width="100%" height="500px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default HOC(ContactusPage)