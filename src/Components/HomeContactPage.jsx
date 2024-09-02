import React from 'react'
import videoSourceMP4 from '../Assets/video/equipment2.mp4';
import { Link } from 'react-router-dom';
import ButtonHover from './ButtonHover';

function HomeContactPage() {
    return (
        <>
            <div className="mainvideo my-5 overflow-hidden">
                <div className="video-background">
                    <video autoPlay loop muted>
                        <source src={videoSourceMP4} type="video/mp4" />
                    </video>
                </div>
                <div className="container overflow-hidden" data-aos="zoom-out" data-aos-duration="1800" data-aos-once="true">
                    <div className="d-flex align-items-center align-content-center justify-content-center  w-100" style={{ height: 450 }}>
                        <div className="video-overlay-content text-center text-white p-4 p-md-5 ">
                            <h1 className='py-3  jr_tittle text-capitalize fs-1'>Contact Us for Any Assistance</h1>
                            <p className='py-3 pera kjh'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, veritatis. Veniam nostrum, dolorem adipisci repudiandae suscipit doloremque sequi perferendis quos ex tenetur nisi quia autem, facilis ipsum? Voluptas, quam laborum!
                            </p>

                            <ButtonHover btnttitle="Contact Us" to="/contactus" className="fw-medium p-3 px-5 fs-5" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeContactPage