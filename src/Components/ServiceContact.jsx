import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaMailBulk } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function ServiceContact() {

    const contact = [
        {
            icon: <FaMailBulk />,
            title: "E-mail",
            content: "abcdef@gmail.com",
            Link: "mailto:abcdef@gmail.com"
        },
        {
            icon: <FaMapLocationDot />,
            title: "Address",
            content: "172, RJD Textile Park,Ichhapore-1, Hazira Road, Bhatha, Surat - 395009, Gujarat, India.",
            Link: "https://www.google.com/maps?q=21.19087440,72.74226350",
            delay: "400"
        },
        {
            icon: <BiSolidPhoneCall />,
            title: "Phone no.",
            content: "(+91) 80489 71629",
            Link: "tel:8048971629",
            delay: "800"
        }
    ]

    return (
        <>
            <div class="contact-service-area overflow-hidden pb-sm-0 pb-5">
                <div class="container my-3 my-lg-5">
                    <div class="row">
                        {contact.map((contact) => (
                            <div class="col-lg-4 col-sm-12">
                                <Link to={contact.Link} className="text-decoration-none text-dark" target='_blank'>
                                    <div class="contact-service-box text-center my-4 my-lg-5 hover-border-6" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={contact.delay}>
                                        <div class="contact-service-icon mb-4 text-white fs-3 d-inline-block lh-lg">
                                            {contact.icon}
                                        </div>
                                        <div class="contact-inform-title pb-5">
                                            <h4 class='jr_tittle fs-4 fw-semibold text-capitalize'>{contact.title}</h4>
                                            <div class='pera'>{contact.content}</div>
                                        </div>
                                        <span class="hover-element"></span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceContact