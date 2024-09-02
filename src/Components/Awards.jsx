import React from 'react'
import TittlesAll from './TittlesAll'

function Awards() {
    let awardsdata = [
        {
            images: require("../Assets/images/Awards/6241606209fe9.jpg"),
        },
        {
            images: require("../Assets/images/Awards/6241626c93005.jpg"),
            delay: "400"
        },
        {
            images: require("../Assets/images/Awards/6241606209fe9.jpg"),
            delay: "800"
        },
        {
            images: require("../Assets/images/Awards/6241626c93005.jpg"),
            delay: "1200"
        },
    ]
    return (

        <>
            <div className="container py-1 py-lg-5 my-5">
                <div className="border-start border-secondary border-4 mt-3 ">
                    <div className="jr_tittle ps-3"><TittlesAll tittle="Our Achivement" /></div>
                </div>
                <div className="pera pt-3" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1800" data-aos-once="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus quis explicabo libero perspiciatis aliquam eum asperiores sint nesciunt voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus quis explicabo libero perspiciatis aliquam eum asperiores sint nesciunt voluptates?  Nemo necessitatibus quis explicabo libero perspiciatis aliquam eum asperiores sint nesciunt voluptates?</div>
                <div className="row p-0 m-0  py-3 gx-5">
                    {
                        awardsdata.map((x, i) => {
                            return (
                                <>
                                    <div className="col-12 col-md-6 col-lg-3 pt-5">
                                        <div class="image-all-together shadow test-shine" style={{ height: "300px" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={x.delay} data-aos-once="true">
                                            <img src={x.images} alt="" className='img-fluid w-100 h-100  object-fit-fill' />
                                            <span class="one"></span>
                                            <span class="two"></span>
                                            <span class="three"></span>
                                            <span class="four"></span>
                                        </div>
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

export default Awards