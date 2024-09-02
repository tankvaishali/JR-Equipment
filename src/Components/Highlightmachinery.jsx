import React, { useState, useEffect, useRef } from "react";
import { ProductItemlist } from "./ProductItemlist";
import { GrNext, GrPrevious } from "react-icons/gr";
import TittlesAll from "./TittlesAll";

function Highlightmachinery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  const totalItems = ProductItemlist.length;

  // Create a list with duplicated items for seamless looping
  const items = [...ProductItemlist, ...ProductItemlist];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex >= totalItems) {
        setCurrentIndex(currentIndex - totalItems);
        galleryRef.current.style.transition = "none";
        galleryRef.current.style.transform = `translateX(-${(currentIndex - totalItems) * 250
          }px)`;
        setTimeout(() => {
          galleryRef.current.style.transition = "transform 0.4s ease-in-out";
        }, 0);
      } else if (currentIndex < 0) {
        setCurrentIndex(currentIndex + totalItems);
        galleryRef.current.style.transition = "none";
        galleryRef.current.style.transform = `translateX(-${(currentIndex + totalItems) * 250
          }px)`;
        setTimeout(() => {
          galleryRef.current.style.transition = "transform 0.4s ease-in-out";
        }, 0);
      }
    };

    if (galleryRef.current) {
      galleryRef.current.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (galleryRef.current) {
        galleryRef.current.removeEventListener(
          "transitionend",
          handleTransitionEnd
        );
      }
    };
  }, [currentIndex, totalItems]);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.style.transform = `translateX(-${currentIndex * 250
        }px)`;
    }
  }, [currentIndex]);

  return (
    <div className="container">
      <div className="mt-3">

<div className="border-start border-secondary border-4 ">

<div className="jr_tittle ps-3 text-capitalize">Highlites Our Machinery</div>
</div>
</div>
<div className="pera py-3">We are bestowed with a team of skilled and specialized professionals that helps us in executing our business processes effortlessly. Their in-depth knowledge and profound leadership help us to manufacture and deliver high quality kitchen equipment within the specified time frame. We regularly conduct training sessions and seminars for our professionals to keep them up-to-date with the prevailing technological and market trends.</div>
      <div className="background mb-5 mt-5">
        <button
          onClick={prevSlide}
          className="slider-button left d-flex align-content-center align-items-center justify-content-center p-2"
        >
          <GrPrevious />
        </button>
        <div className="gallery" ref={galleryRef}>
          {ProductItemlist.map((x, index) => (
            <div className="card box rounded-0" key={index}>
              <img src={x.img} alt={x.name} />
              <h1 className="jr_tittle">{x.name}</h1>
            </div>
          ))}
          {ProductItemlist.map((x, index) => (
            <div className="card box rounded-0" key={index}>
              <img src={x.img} alt={x.name} />
              <h1 className="jr_tittle">{x.name}</h1>
            </div>
          ))}
          {/* <div className="d-md-none d-sm-block">
            {ProductItemlist.map((x, index) => (
              <div className="card box rounded-0" key={index}>
                <img src={x.img} alt={x.name} />
                <h1 className="jr_tittle">{x.name}</h1>
              </div>
            ))}
          </div> */}
        </div>
        <button
          onClick={nextSlide}
          className="slider-button right d-flex align-content-center align-items-center justify-content-center p-2"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default Highlightmachinery;
