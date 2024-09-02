import React from 'react'
import { RiArrowRightDoubleLine } from 'react-icons/ri'
import TittlesAll from './TittlesAll'

function ClientSatisfication() {
    return (
        <>
            <div className='mb-5 overflow-hidden'>
                <div className='clientmain'>
                    <div className='container'>
                        <div className="row align-items-center align-content-center justify-content-center py-5 gx-5">
                            <div className='clientmain col-lg-6 col-sm-12 col-md-6 z-2 pb-4' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1800">
                                <div className="border-start border-secondary border-4 mt-3 text-white">
                                    <div className="jr_tittle ps-3"><TittlesAll tittle="Our Esteemed Clients" /></div>
                                </div>
                                <p className='pera py-3 lh-base' style={{ color: "var(--lightgray--)", textAlign: "justify" }}>We are a client-centric organisation focusing on attaining maximum customer satisfaction. For that matter, we deliver quality kitchen equipments at competitive pricing and in high-grade packaging. We have been able to win the trust and support of a large number of clients worldwide because of our sound business practices and customer-centric approach. Clients'' specific demands and requirements are given due importance while designing & developing our range of equipments. This has helped us in becoming their preferred choice.</p>
                                <div className='pera' style={{ color: "var(--lightgray--)" }}>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> Sound infrastructure</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> Team of experts to monitor the manufacturing process</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> Adherence with the industrial norms and international quality standards</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> Production and supply of only zero-defect products</div>
                                    <div className='py-2'><RiArrowRightDoubleLine className='fs-3 text-white' /> Affordable prices and timely delivery, leaving no room for customer grievances</div>
                                </div>
                            </div>
                            <div className="clientmain col-lg-6 col-sm-12 col-md-6 pb-4">
                                <div className="client_bg ms-auto" data-aos="zoom-in" data-aos-once="true" data-aos-duration="1800"></div>
                                <div style={{ marginTop: "-240px" }}>
                                    <div className="client_image test-shine" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true">
                                        <img src="https://img.freepik.com/premium-photo/shop-assistant-hypermarket-shows-new-model-gas-stove-young-couple-all-wearing-medical-masks_93675-125617.jpg?ga=GA1.1.949763891.1720709653" className="img-fluid" alt="" />
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

export default ClientSatisfication