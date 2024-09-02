import React, { useEffect } from 'react';
import Slider from "react-slick";
import TittlesAll from './TittlesAll';
import AOS from 'aos';

function ClientLogorun() {
    //   useEffect(() => {
    //     AOS.init({
    //         once: true, 
    //     });
    // }, []);
    var settings = {
        dots: false,
        infinite: true,
        speed: 1800,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        swipe: true,
        arrows: false,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    };
    let logoimage = [
        {
            img: require("../Assets/images/logos/Classmate_Logo.png")
        },
        {
            img: require("../Assets/images/logos/Crayola-Logo-1024x640.png")
        },
        {
            img: require("../Assets/images/logos/Faber-Castell-Logo.png")
        },
        {
            img: require("../Assets/images/logos/bic .images.png")
        },
        {
            img: require("../Assets/images/logos/apsara-logo.jpg")
        },
        {
            img: require("../Assets/images/logos/images-3.jpg")
        },
    ]

    return (
        <div className='py-sm-5 py-3 my-5 container'>
            <div className="border-start border-secondary border-4 mt-3 ">
                <div className="jr_tittle ps-3 "><TittlesAll tittle="Our Esteemed Clients" /></div>
            </div>
            <div className="pera py-3" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" >Owing to the premium quality of the products we offer to our customers, we have successfully managed to attain maximum customer satisfaction within a very short span of time. Furthermore, we offer our kitchen equipment in high-grade packaging at very competitive prices. Our customer-focused approach and superb business practices have helped us a lot in winning the trust and support across both the Indian and overseas market.</div>
            <Slider {...settings} className="p-0 m-0  overflow-hidden ">
                {logoimage?.map((x, i) => {
                    console.log(x);
                    return (
                        <>
                            <div className="logorun_bgimage d-flex align-content-center align-items-center justify-content-center m-0 m-md-3 ">
                                <div className="logorun_image w-75 mx-auto">
                                    <img src={x.img} alt="" className="img-fluid w-100 h-100 object-fit-cover" />
                                </div>
                            </div>

                        </>
                    );
                })}
            </Slider>
        </div>
    )
}

export default ClientLogorun