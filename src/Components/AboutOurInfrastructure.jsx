import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import TittlesAll from './TittlesAll'
import { Link } from 'react-router-dom'

function AboutOurInfrastructure() {
  return (
    <>
      <div className='infrastructure_bg '>
        <div className='productbg_color p-2 p-md-5'>
          <div className="container pb-5">
            <div className='row p-0 ' style={{ marginTop: "-200px" }}>
              <div className='col-12 col-lg-6'>

              </div>
              <div className='col-12 col-lg-6' data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                <div className=' p-4 p-md-5 text-white productpera_color ' >
                  <div className=' text-white pt-2'>

                    <div className="border-start border-secondary border-4 mt-2 ">
                      <div className="jr_tittle ps-3"><TittlesAll tittle="Our Infrastructure" /></div>
                    </div>

                    <p className='py-2 pt-3 pera'>
                      We own a state-of-art and advanced infrastructural facility that is segregated into different departments to ensure proper functioning of our firm. Our facility is conferred with all mandatory basic facilities that are required to carry out all our business operations in a smooth manner. We constantly check and upgrade these machines installed in our facilities according to the upcoming technological trends.
                    </p>
                    <div className="pera ">Our infrastructure facility is divided into six departments, listed as follows:</div>
                    <div className='d-block pera d-lg-flex justify-content-between align-content-center align-items-center p-1'>
                      <div className='pt-0 pt-lg-3'>
                        <div className="d-flex align-items-center align-items-lg-start pt-2">
                          <span className="pe-2 fs-6">
                            <IoCheckmarkDoneSharp />
                          </span>
                          <div className="text-capitalize">Warehousing & packaging unit</div>
                        </div>
                        <div className="d-flex align-items-center align-items-lg-start pt-2">
                          <span className="pe-2 fs-6">
                            <IoCheckmarkDoneSharp />
                          </span>
                          <div className="text-capitalize">Logistics unit</div>
                        </div>
                        <div className="d-flex align-items-center align-items-lg-start pt-2">
                          <span className="pe-2 fs-6">
                            <IoCheckmarkDoneSharp />
                          </span>
                          <div className="text-capitalize">Administration department</div>
                        </div>



                      </div>
                      <div className='pt-0 pt-lg-3'>
                        <div className="d-flex align-items-center align-items-lg-start pt-2">
                          <span className="pe-2 fs-6">
                            <IoCheckmarkDoneSharp />
                          </span>
                          <div className="text-capitalize">Manufacturing unit</div>
                        </div>
                        <div className="d-flex align-items-center align-items-lg-start pt-2">
                          <span className="pe-2 fs-6">
                            <IoCheckmarkDoneSharp />
                          </span>
                          <div className="text-capitalize">Quality control unit</div>
                        </div>

                        <div className="d-flex align-items-center align-items-lg-start pt-2">
                          <span className="pe-2 fs-6">
                            <IoCheckmarkDoneSharp />
                          </span>
                          <div className="text-capitalize">R&D unit</div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-2' data-aos="zoom-in " data-aos-duration="1800" data-aos-once="true">
                      <div className='d-block d-md-flex align-content-center align-items-center'>
                        <div>
                          <Player
                            src={
                              "https://lottie.host/db02fa91-2ae2-467e-99f7-c0c7a9dffda2/sKyIrsufE7.json"
                            }
                            autoplay
                            loop
                            controls
                            className='m-0'
                            style={{ width: 90, height: 90 }}
                          />
                        </div>
                        <div className='ps-1'>
                          <Link to={"tel:+91 8048971629"} className='text-decoration-none text-white'>
                          <div className='pera'>GET QUICK SUPPORT</div>
                          <div className='fs-4 fw-bold'>+(91) 8048971629</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutOurInfrastructure