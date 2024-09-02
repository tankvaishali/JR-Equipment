import React from 'react'
import { FaKitchenSet } from 'react-icons/fa6';
import { MdOutlineKitchen, MdOutlineSoupKitchen } from 'react-icons/md';
import { RiHotelLine, RiRestaurantLine } from 'react-icons/ri';
import TittlesAll from './TittlesAll';
function ServiceProvide() {

    const services = [
        {
            icon: <RiHotelLine />,
            title: 'Custom Kitchen Design',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-right"
        },
        {
            icon: <RiRestaurantLine />,
            title: 'Kitchen essentials',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-left",
            delay: "400"
        },
        {
            icon: <MdOutlineSoupKitchen />,
            title: 'Prime Kitchen Services',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-right",
            delay: "400"
        },
        {
            icon: <FaKitchenSet />,
            title: 'Kitchen Management',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "flip-up",
            delay: "600"
        },
        {
            icon: <MdOutlineKitchen />,
            title: 'Trusted Kitchen Repairs',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto vel explicabo voluptatem debitis non.',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, id.',
            animation: "fade-left",
            delay: "800"
        },
    ];

    return (
        <>

            <div className="service-area  overflow-hidden">
                <div>
                    <div className="service-area pb-5 overflow-hidden">

                        <div className='servicepro_bgimage pt-5 pb-3'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className=' border-start border-secondary border-4 text-white' >
                                            <div className='jr_tittle fs-5 ps-3' style={{ color: "var(--lightgray--)" }} data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">Services</div>
                                            <div className='jr_tittle ps-3'><TittlesAll tittle={"The Best Services We Provide"} /></div>
                                        </div>

                                        <p className="about-text pera text-white py-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum in molestias voluptates ipsum sint iste aliquid, possimus perspiciatis earum blanditiis.
                                        </p>
                                    </div>
                                    {services.map((service) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos={service.animation} data-aos-duration="1500" data-aos-delay={service.delay} data-aos-once="true">
                                            <div className="single-service-box mb-4 overflow-hidden">
                                                <div className="service-icon-thumb text-white fs-1 py-2">
                                                    {service.icon}
                                                </div>
                                                <div className="service-title">
                                                    <h2 className="jr_tittle text-white text-capitalize fs-4 py-1">{service.title}</h2>
                                                    <p className="pera" style={{ color: "rgba(211, 211, 211, 0.546)" }}>{service.description}</p>
                                                </div>
                                                <div className="service-button" style={{ color: "rgba(211, 211, 211, 0.546)" }}>
                                                    <div className="pera d-inline">{service.content}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceProvide