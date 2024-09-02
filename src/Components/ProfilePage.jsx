import React from 'react'
import HOC from './HOC'
import ProfileSec from './ProfileSec'
import Brouchers from './Brouchers'
import Certificets from './Certificets'
import Awards from './Awards'
import ClientLogorun from './ClientLogorun'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

function ProfilePage() {
  return (
    <>

      <div className='bg_main'>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column jr_tittle" style={{ height: '65vh' }}>
            <h2 className='text-white text-center lh-base fs-1 fw-bold text-capitalize' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true" style={{ letterSpacing: "1px" }}>Profile of Excellence in Kitchen Equipment</h2>
            <div className='text-white mt-2 fs-6 fw-semibold' data-aos="fade-up" data-aos-delay="800" data-aos-duration="1800" data-aos-once="true"><Link to={"/"} className='text-decoration-none text-white bgtittle'>Home</Link> <MdKeyboardDoubleArrowRight /> <span>Profile</span></div>
          </div>
        </div>
      </div>

      <ProfileSec />
      <Brouchers />
      <Certificets />
      <Awards />
      <ClientLogorun />
    </>
  )
}

export default HOC(ProfilePage)