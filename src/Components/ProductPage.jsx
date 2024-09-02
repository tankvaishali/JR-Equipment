import React from 'react'
import HOC from './HOC'
import { ProductItemlist } from './ProductItemlist'
import { Link } from 'react-router-dom'
import "../Assets/Css/ProductPage.css"
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

function ProductPage() {
  return (
    <>

      <div className='bg_main'>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column jr_tittle" style={{ height: '65vh' }}>
            <h2 className='text-white text-center lh-base fs-1 fw-bold text-capitalize' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true" style={{ letterSpacing: "1px" }}>The Top Choice for Your Kitchen Needs</h2>
            <div className='text-white mt-2 fs-6 fw-semibold' data-aos="fade-up" data-aos-delay="800" data-aos-duration="1800" data-aos-once="true"><Link to={"/"} className='text-decoration-none text-white bgtittle'>Home</Link> <MdKeyboardDoubleArrowRight /> <span>Product</span></div>
          </div>
        </div>
      </div>

      <div>
        <div className='container overflow-hidden'>
          <div className="pt-5 mt-3 overflow-hidden">
            <div className="border-start border-secondary border-4 " data-aos="fade-up" data-aos-duration="1800" data-aos-once="true">
              <div className="jr_tittle ps-3 text-capitalize" >The Commercial Kitchen Equipment products and quality assurance</div>
            </div>
            <div className="pera pt-3" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">Our organization is proficient in manufacturing and supplying a premium quality range of Commercial Kitchen Equipment. The varied range of kitchen equipment offered by us is manufactured using graded steel and certified components, and is known for reliable performance, easy operations, longer functional life and energy efficiency. We can make these equipments available in different capacities and sizes, as per the specifications of clients.</div>
            <div className="pera pt-3" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="800">
              Our quality-oriented approach and timely delivery of finest quality kitchen equipment have helped us in building a praiseworthy reputation amidst our competitors in the market. To ensure high quality for our products, we have incepted, executed and maintained a strict quality control system. We continuously strive to improve and check the efficiency of our products by adhering to the specified industry norms. All our products are tested on multiple parameters for the assurance of quality and only those products that conform to the desired standards are made available to the customers.
            </div>
          </div>

          <div className="row g-5 p-0 my-5 pb-5 overflow-hidden">
            {ProductItemlist.map((Item) => {
              return (
                <div className="col-12  col-md-6 col-lg-4 overflow-hidden" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                  <Link to={`${/ProductPageHover/ + Item.id}`} className='text-decoration-none' >
                    <div className="">
                      <div className="p-1 " style={{ position: "relative", overflow: "hidden" }}>
                        <div className="facility_image">
                          <img
                            src={Item.img}
                            alt=""
                            className="img-fluid w-100 object-fit-contain py-4 py-lg-5"
                            style={{ transition: "transform 0.5s", width: "100%", height: "270px", backgroundColor: "#b1b4c169" }}
                          />
                          <div className="image-title fw-bold jr_tittle">
                            {Item.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default HOC(ProductPage)