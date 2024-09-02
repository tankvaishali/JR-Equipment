import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDoubleDown, FaAngleDoubleRight, FaRegCheckCircle } from "react-icons/fa";
import "aos/dist/aos.css";
import { ProductItemlist } from "./ProductItemlist";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Col, Container, Image, Modal, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const categories = ProductItemlist;

function EquipmentProduct() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalContent, setModalContent] = useState({});
  const [show, setShow] = useState(false);
  const [visibleItems, setVisibleItems] = useState(5);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 576) {
        setVisibleItems(5);
      } else {
        setVisibleItems(categories.length);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const handleShowModal = (subProduct) => {
    setModalContent(subProduct);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory && selectedCategory.id === category.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const renderRows = (columns) => {
    const rows = [];
    for (let i = 0; i < Math.min(visibleItems, categories.length); i += columns) {
      rows.push(categories.slice(i, i + columns));
    }
    return rows;
  };

  const CategoryGrid = ({ columns, displayClass }) => {
    const rows = renderRows(columns);
    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      swipe: true,
      pauseOnHover: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={`${displayClass} py-lg-5 pt-3 my-3`}>
        <div className="overflow-hidden">
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="row">
                {row.map((category) => (
                  <div
                    key={category.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 p-sm-3 p-4"
                  >
                    <div
                      className={`category-box h-100 ${selectedCategory && selectedCategory.id === category.id
                        ? "selected"
                        : ""
                        }`}
                      onClick={() => handleCategoryClick(category)}
                      style={{ cursor: "pointer" }}
                    >
                      <h5>
                        <span
                          className="category-name jr_tittle text-capitalize"
                          style={{ fontSize: "14px" }}
                        >
                          {category.name}
                        </span>
                        <span className="category-icon">
                          {selectedCategory &&
                            selectedCategory.id === category.id ? (
                            <FaAngleDoubleDown />
                          ) : (
                            <FaAngleDoubleRight />
                          )}
                        </span>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              {selectedCategory &&
                row.some((category) => category.id === selectedCategory.id) && (
                  <div
                    className={`row align-items-center justify-content-center subcategory-box ${selectedCategory ? "open" : ""
                      }`}
                    data-aos="fade-down"
                  >
                    <div className="col-12 px-0">
                      <div className="border subcategory-content">
                        <h4 className="ms-2 ms-lg-5 my-3 jr_tittle border-start border-secondary border-4">
                          <span className="ps-3 Categoryname">
                            {selectedCategory.name}
                          </span>
                        </h4>
                        <div className="col-12 mx-auto my-2">
                          <Slider {...sliderSettings} className="selectedCategory" style={{ cursor: "pointer" }}>
                            {selectedCategory.subProducts.map((subcategory) => (
                              <div
                                key={subcategory.id}
                                className="subcategory-item text-center"
                                onClick={() => handleShowModal(subcategory)}
                                style={{ cursor: "pointer" }}
                              >
                                <img
                                  src={subcategory.img}
                                  alt=""
                                  className="m-4 p-2 mx-auto imgdrop rounded-circle object-fit-fill"
                                  style={{ height: "150px", width: "150px" }}
                                />
                                <p className="py-1 fw-semibold fs-6">
                                  {subcategory.name}
                                </p>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </React.Fragment>
          ))}
        </div>
        {visibleItems < categories.length && (
          <div className="text-center loadmore my-4">
            <div className="elementor-button py-2 px-3" style={{ boxShadow: "0 2px 5px var(--lightgray--)" }}>
              <button onClick={handleLoadMore} className="elementor-button-text text-white text-decoration-none fs-6 fw-bold">
                Load More
              </button>
            </div>
          </div>
        )
        }
      </div >
    );
  };

  const text = "Our Product Range";
  const [ref, inView] = useInView({ triggerOnce: true });
  const letters = text.split("");

  let generateWhatsAppURL = (productName) => {
    const message = `Hello, I'm interested in the product: ${productName}`;
    return `https://wa.me/8048971629/?text=${encodeURIComponent(message)}`;
  };
  return (
    <>
      <div className="CategoryDisplay py-5">
        <div
          className="jr_tittle border-bottom border-5 pb-1 pt-4 border-light text-center text-white mx-auto"
          style={{ width: "fit-content" }}
        >
          <div ref={ref}>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </div>
        <div
          className="overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1800"
          data-aos-once="true"
        >
          <div className="py-2 pt-0">
            <div className="container2 container-md py-0">
              <CategoryGrid columns={4} displayClass="d-lg-block d-none" />
              <CategoryGrid
                columns={3}
                displayClass="d-md-block d-none d-lg-none"
              />
              <CategoryGrid
                columns={2}
                displayClass="d-sm-block d-none d-md-none"
              />
              <CategoryGrid columns={1} displayClass="d-block d-sm-none" />
            </div>
          </div>
        </div>
      </div>
      <Modal
          show={show}
          onHide={handleCloseModal}
          size="xl"
          aria-labelledby="product-modal-title"
          className="productHoverModal border-0 " id="modal_scrollbar"
          centered
        >
          <Modal.Body className="modal-body-scroll p-3 p-lg-5 pb-lg-1  pb-1 shadow-lg border-0 w-100">
            <div className="container">
              <div className="row g-3">
                <div className="col-12 col-md-12  col-lg-5 bg-secondary  sticky-column top-0  scrollable">
                  <div className="h-100 p-3 d-flex align-content-center align-items-center justify-content-center" >
                    <div className="product_modal_image">
                      <Image
                        src={modalContent.img}
                        alt={modalContent.name}
                        fluid
                        className="object-fit-contain w-100 h-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-12 col-lg-7 z-0 p-0 ps-lg-3 ">
                  <div className="h-100 shadow-lg bg-light bg-opacity-100 p-3  p-lg-4  ">
                    <div className="border-start border-secondary border-4">
                      <div className="jr_tittle text-start ps-3">
                        {modalContent.name}
                      </div>
                    </div>
                    <h5 className="fw-semibold jr_tittle fs-5 text-capitalize py-2">
                      {modalContent.price}
                    </h5>
                    <p className=" text-capitalize pera">
                      <table className="table table-bordered table-striped table-hover ">
                        <tbody>
                          <div className="jr_tittle fs-6 py-1">
                            {modalContent.desctable?.at(0)}
                          </div>
                          {modalContent.desctable &&
                            modalContent.desctable
                              .slice(1)
                              .map((desc, index) => {
                                const [key, value] = desc.split(":");
                                return (
                                  <tr key={index}>
                                    <td className=" px-1 px-lg-4 ">{key}</td>
                                    <td className=" px-1 px-lg-4 ">{value}</td>
                                  </tr>
                                );
                              })}
                        </tbody>
                      </table>

                      <div>
                        {" "}
                        {modalContent.description && (
                          <>
                            {modalContent.description.map((line, i) => (
                              <div key={i} className="mb-0 pera ">
                                <div className="d-flex ">
                                  <div>
                                    {" "}
                                    <FaRegCheckCircle />{" "}
                                  </div>
                                  <div className="ps-2 kjh text-lowercase"> {line}</div>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      <div>
                        {modalContent.additional && (
                          <>
                            <div className="jr_tittle fs-6 py-1 pt-3">
                              {modalContent.additional[0]}
                            </div>
                            {modalContent.additional.slice(1).map((line, i) => (
                              <li key={i} className="mb-0 pera">
                                {line}
                              </li>
                            ))}
                          </>
                        )}
                      </div>
                    </p>
                    <div className="my-2 mt-3">
                      <div className="elementor-button p-1 py-2 px-4">
                        <Link
                          to={generateWhatsAppURL(modalContent.name)}
                          target="_blank"
                          className="elementor-button-text text-white text-decoration-none fw-medium"
                        >
                          Get Quotes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-3">
              <Button
                type="button"
                className="form-control btn-close rounded-circle ms-2 bg-secondary p-3 "
                aria-label="Close"
                onClick={handleCloseModal}
              ></Button>
            </div>
          </Modal.Body>

        </Modal>
    </>
  );
}

export default EquipmentProduct;
