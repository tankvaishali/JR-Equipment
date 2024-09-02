import React from 'react'
import TittlesAll from './TittlesAll'

function Certificets() {
    let certificatesdata = [
        {
            images: require("../Assets/images/Screenshot 2024-07-20 155732.png"),
        },
        {
            images: require("../Assets/images/Screenshot 2024-07-20 155732.png"),
            aosdelay: "400"
        },
        {
            images: require("../Assets/images/Screenshot 2024-07-20 155732.png"),
            aosdelay: "800"
        },
        {
            images: require("../Assets/images/Screenshot 2024-07-20 155732.png"),
            aosdelay: "1200"
        },
    ]
    return (
        <>
            <div className="container py-5 my-5">
                <div className="border-start border-secondary border-4 mt-3 ">
                    <div className="jr_tittle ps-3"><TittlesAll tittle="Our Certificates" /></div>
                </div>
                <div className="pera pt-3" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus quis explicabo libero perspiciatis aliquam eum asperiores sint nesciunt voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus quis explicabo libero perspiciatis aliquam eum asperiores sint nesciunt voluptates?  Nemo necessitatibus quis explicabo libero perspiciatis aliquam eum asperiores sint nesciunt voluptates?</div>
                <div className="row p-0 m-0  py-3 gx-5">
                    {
                        certificatesdata.map((x, i) => {
                            return (
                                <>
                                    <div className="col-12 col-md-6 col-lg-3 pt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={x.aosdelay} data-aos-once="true">
                                        <div className="certificate shadow"> <span> <img src={x.images} alt="" className='img-fluid w-100 h-100' /></span></div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Certificets