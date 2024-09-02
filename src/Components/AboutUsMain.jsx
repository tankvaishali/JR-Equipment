import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function AboutUsMain() {
    return (
        <>
            <div className='bg_main'>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-column jr_tittle" style={{ height: '65vh' }}>
                        <h2 className='text-white text-center lh-base fs-1 fw-bold text-capitalize' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true" style={{ letterSpacing: "1px" }}>Our story in about crafting excellence every day in kitchen equipment</h2>
                        <div className='text-white mt-2 fs-6 fw-semibold' data-aos="fade-up" data-aos-delay="800" data-aos-duration="1800" data-aos-once="true"><Link to={"/"} className='text-decoration-none text-white bgtittle'>Home</Link> <MdKeyboardDoubleArrowRight /> <span>About</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsMain