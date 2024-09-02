import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { IoMdStarHalf } from 'react-icons/io'
import { MdStar } from 'react-icons/md'
import TittlesAll from './TittlesAll'

function HomeTestimonial() {



  return (
    <div className='testimonial_bg py-5 mb-5 '>
      <div className="container  mt-0 mb-5 my-lg-5">
        <div className="row position-relative p-0 m-0">
          <div className="col-12 col-lg-6 p-0 m-0 d-flex flex-column justify-content-between">

            <div className=' border-start border-secondary border-4' >
              <div className='jr_tittle fs-5 ps-3' data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">Testimonial</div>
              <div className='jr_tittle ps-3'><TittlesAll tittle={"Peoples Reviews"} /></div>
            </div>

            <div className='bg-dark text-white p-5 mt-4'>

              <div id="carouselExampleAutoplaying" class="carousel slide testimonial_arrow" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div>
                      <div className='d-flex justify-content-between'>
                        <div className='d-flex '>
                          <div className='bg-secondary rounded-circle font_fletter text-center p-2 mt-2 d-flex justify-content-center align-items-center' >D</div>
                          <div>
                            <div className='ps-3 jr_tittle fs-4 text-capitalize'>dsfghjkl</div>
                            <div className='pera ps-3 text-capitalize'>restaurent Manager</div>
                          </div>
                        </div>
                        <div>
                          <div className='text-secondary fs-1 pt-0 mt-0'><FaQuoteRight /></div>
                        </div>
                      </div>
                      <div className='pera pt-4 kjh'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eum odit repudiandae ab magnam, sequi repellat amet? Eveniet, voluptate praesentium! Laboriosam harum et ducimus modi nemo ratione aperiam ex distinctio.</div>
                      <div className='pt-3 fs-4'>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><IoMdStarHalf /></span>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div>
                      <div className='d-flex justify-content-between'>
                        <div className='d-flex '>
                          <div className='bg-secondary rounded-circle font_fletter text-center p-2 mt-2 d-flex justify-content-center align-items-center' >H</div>
                          <div>
                            <div className='ps-3 jr_tittle fs-4 text-capitalize'>hghjka hjgbga</div>
                            <div className='pera ps-3 text-capitalize'>restaurent Manager</div>
                          </div>
                        </div>
                        <div>
                          <div className='text-secondary fs-1 pt-0 mt-0'><FaQuoteRight /></div>
                        </div>
                      </div>
                      <div className='pera pt-4 kjh'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eum odit repudiandae ab magnam, sequi repellat amet? Eveniet, voluptate praesentium! Laboriosam harum et ducimus modi nemo ratione aperiam ex distinctio.</div>
                      <div className='pt-3 fs-4'>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><IoMdStarHalf /></span>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div>
                      <div className='d-flex justify-content-between'>
                        <div className='d-flex '>
                          <div className='bg-secondary rounded-circle font_fletter text-center p-2 mt-2 d-flex justify-content-center align-items-center' >Y</div>
                          <div>
                            <div className='ps-3 jr_tittle fs-4 text-capitalize'>yyubwsjb hvxhj</div>
                            <div className='pera ps-3 text-capitalize'>restaurent Manager</div>
                          </div>
                        </div>
                        <div>
                          <div className='text-secondary fs-1 pt-0 mt-0'><FaQuoteRight /></div>
                        </div>
                      </div>
                      <div className='pera pt-4 kjh'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eum odit repudiandae ab magnam, sequi repellat amet? Eveniet, voluptate praesentium! Laboriosam harum et ducimus modi nemo ratione aperiam ex distinctio.</div>
                      <div className='pt-3 fs-4'>
                        <span className='text-warning fs-4'><MdStar /></span>
                        <span className='text-warning fs-4'><MdStar /></span>

                        <span className='text-warning fs-4'><IoMdStarHalf /></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='previewButton'>
                  <button class="carousel-control-prev d-none d-lg-block bg-white text-black" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class=" fs-3 d-flex align-content-center align-items-center justify-content-center" aria-hidden="true"><GrPrevious /></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next  d-none d-lg-block bg-black text-white" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class=" fs-3 d-flex align-content-center align-items-center justify-content-center" aria-hidden="true"><GrNext /></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 p-0 m-0 ">

            <div className='h-100 test-shine w-100' >
              <img src={"https://img.freepik.com/free-photo/happy-smiling-couple-just-bought-new-household-appliances-hypermarket_93675-134166.jpg?t=st=1721060413~exp=1721064013~hmac=ea632a1ab446f399e45efaf11fd894cbad2576739952f802c66b9f5a13f8ce71&w=900"} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTestimonial