import React, { useState, useEffect } from 'react';
import 'animate.css';
import { Carousel } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function Slider() {
    const [textAnimationClass, setTextAnimationClass] = useState('');
    const [imageAnimationClass, setImageAnimationClass] = useState('');

    useEffect(() => {
        setTextAnimationClass('animate__fadeIn animate__delay-1s');
        setImageAnimationClass('animate__fadeInRight animate__delay-1s');
        const time1 = setTimeout(() => {
            setTextAnimationClass('animate__fadeOutLeft animate__slow');
            setImageAnimationClass('animate__fadeOutRight animate__slow');
        }, 4000);
        return () => {
            clearTimeout(time1)
        }
    }, []);

    const handleSlideChange = (event) => {
        const { direction } = event;

        setTextAnimationClass('animate__fadeIn animate__delay-1s');
        setImageAnimationClass('animate__fadeInRight animate__delay-1s');

        setTimeout(() => {
            if (direction === 'prev') {
                setTextAnimationClass('animate__fadeOutRight animate__slow d-none');
                setImageAnimationClass('animate__fadeOutLeft animate__slow d-none');
            } else {
                setTextAnimationClass('animate__fadeOutLeft animate__slow');
                setImageAnimationClass('animate__fadeOutRight animate__slow');
            }
        }, 4500);
    };

    return (
        <Carousel
            className="icons overflow-x-hidden"
            pause={false}
            interval={5000}

            indicators={false}
            prevIcon={false}
            nextIcon={false}
            onSlide={handleSlideChange}
        >
            <Carousel.Item>
                <div className='position-relative'>
                    <img
                        src={require("../Assets/images/reviews1.jpg")}
                        className="vh-100 img-fluid w-100 object-fit-cover shadowed-image"
                        alt="First slide"
                    />
                    <div className="shadow_inset"></div>
                </div>
                <Carousel.Caption>
                    <div className="container col-lg-9 col-ms-10 col-12">
                        <div className="row align-items-sm-center align-items-start justify-content-center mx-auto py-5 container">
                            <div className={`border-top border-2 py-2 animate__animated ${imageAnimationClass}`}></div>
                            <div className={`lh-lg col-lg-6 col-md-6 col-12 ps-sm-0 ps-4 text-sm-start text-center animate__animated ${textAnimationClass}`}>
                                <p className='lh-lg animate__animated animate__fadeInLeft animate__delay-1s text-md-start text-sm-center text-start '>1/03</p>
                                <h1 className='fw-bold lh-base jr_tittle fs-1 text-capitalize text-md-start text-sm-center text-start display-5 animate__animated animate__fadeIn animate__delay-2s animate__slow' style={{ fontFamily: 'Oswald, sans-serif' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h1>
                            </div>
                            <div className={`col-lg-6 col-md-6 p-lg-2 p-0 col-12 animate__animated ${imageAnimationClass}`}>
                                <img
                                    src={require("../Assets/images/empty-seats-store_1048944-9045659.jpg")}
                                    alt=""
                                    className='col-lg-12 col-md-9 col-sm-7 col-10 img-fluid object-fit-fill animate__animated animate__fadeLeft p-lg-2 p-0'
                                />
                            </div>
                            <div className={`border-bottom border-2 py-3 animate__animated  animate__fadeInLeft ${textAnimationClass}`}></div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            < Carousel.Item>
                <div className='position-relative'>
                    <img
                        src={require('../Assets/images/reviews3.avif')}
                        className="vh-100 img-fluid w-100 object-fit-cover shadowed-image"
                        alt="First slide"
                    />
                    <div className="shadow_inset"></div>
                </div>
                <Carousel.Caption>
                    <div className="container col-lg-9 col-ms-10 col-12">
                        <div className="row align-items-sm-center align-items-start justify-content-center mx-auto py-5 container">
                            <div className={`border-top border-2 py-2 animate__animated ${imageAnimationClass}`}></div>
                            <div className={`lh-lg col-lg-6 col-md-6 col-12 ps-sm-0 ps-4 text-sm-start text-center animate__animated ${textAnimationClass}`}>
                                <p className='lh-lg animate__animated animate__fadeInLeft animate__delay-1s text-md-start text-sm-center text-start '>2/03</p>
                                <h1 className='fw-bold lh-base jr_tittle fs-1  text-capitalize text-md-start text-sm-center text-start display-5 animate__animated animate__fadeIn animate__delay-2s animate__slow' style={{ fontFamily: 'Oswald, sans-serif' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h1>
                            </div>
                            <div className={`col-lg-6 col-md-6 p-lg-2 p-0 col-12 animate__animated ${imageAnimationClass}`}>
                                <img
                                    src={require("../Assets/images/reviews4.jpg")}
                                    alt=""
                                    className='col-lg-12 col-md-9 col-sm-7 col-10 img-fluid object-fit-fill animate__animated animate__fadeLeft p-lg-2 p-0'
                                />
                            </div>
                            <div className={`border-bottom border-2 py-3 animate__animated  animate__fadeInLeft ${textAnimationClass}`}></div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className='position-relative'>
                    <img
                        src={require('../Assets/images/reviews2.avif')}
                        className="vh-100 img-fluid w-100 object-fit-cover shadowed-image custom-shadow "
                        alt="First slide"
                    />
                    <div className="shadow_inset"></div>
                </div>
                <Carousel.Caption>
                    <div className="container col-lg-9 col-ms-10 col-12">
                        <div className="row align-items-sm-center align-items-start justify-content-center mx-auto py-5 container">
                            <div className={`border-top border-2 py-2 animate__animated ${imageAnimationClass}`}></div>
                            <div className={`lh-lg col-lg-6 col-md-6 col-12 ps-sm-0 ps-4 text-sm-start text-center animate__animated ${textAnimationClass}`}>
                                <p className='lh-lg animate__animated animate__fadeInLeft animate__delay-1s text-md-start text-sm-center text-start '>3/03</p>
                                <h1 className='fw-bold lh-base jr_tittle fs-1  text-capitalize text-md-start text-sm-center text-start display-5 animate__animated animate__fadeIn animate__delay-2s animate__slow' style={{ fontFamily: 'Oswald, sans-serif' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h1>
                            </div>
                            <div className={`col-lg-6 col-md-6 p-lg-2 p-0 col-12 animate__animated ${imageAnimationClass}`}>
                                <img src={require('../Assets/images/reviews5 (1).png')}
                                    alt=""
                                    className='col-lg-12 col-md-9 col-sm-7 col-10 img-fluid object-fit-fill animate__animated animate__fadeLeft p-lg-2 p-0'
                                />
                            </div>
                            <div className={`border-bottom border-2 py-3 animate__animated  animate__fadeInLeft ${textAnimationClass}`}></div>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;