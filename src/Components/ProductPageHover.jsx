import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Image, Modal, Button } from "react-bootstrap";
import "../Assets/Css/ProductPage.css";
import { ProductItemlist } from "./ProductItemlist";
import HOC from "./HOC";
import TittlesAll from "./TittlesAll";
import { FaRegCheckCircle } from "react-icons/fa";

function ProductPageHover() {
  const { productId } = useParams();
  console.log(productId);
  const product = ProductItemlist.find((p) => p.id === productId);
  console.log(product);

  const [mainImage, setMainImage] = useState(product.img);
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleHover = (img) => {
    setMainImage(img);
  };

  const handleMouseOut = () => {
    // setMainImage(product.img);
  };

  const handleShowModal = (subProduct) => {
    setModalContent(subProduct);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };


  // <<<<<<< HEAD
  const generateWhatsAppURL = (productName) => {
    const message = `Hello, I'm interested in the product: ${productName}`;
    return `https://wa.me/8048971629/?text=${encodeURIComponent(message)}`;
  };
  return (
    <>
      <Container className="my-5 ">
        <div className="row p-0 m-0 g-3 g-lg-5 ">
          <div className="py-3 my-5 mb-0">
            <div className="border-start border-secondary border-4">
              <div className="jr_tittle text-start ps-3">
                <TittlesAll tittle={product.name} />
              </div>
            </div>
            <div
              className="pera pt-3 text-start"
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              {product.detail}
            </div>
          </div>

          <div
            className="col-12 col-md-5 p-0 d-none d-md-block "
            data-aos="fade-right"
            data-aos-duration="1800"
            data-aos-once="true"
            style={{ backgroundColor: "rgba(177, 180, 193, 0.41)" }}
          >
            <div className="h-100 shadow p-5 text-center sticky-column scrollable d-flex align-content-center">
              <div className="mx-auto main-image-container d-flex align-content-center">
                <Image
                  src={mainImage}
                  alt="Main"
                  fluid
                  className="main-image object-fit-contain"
                  height={350}
                  width={350}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="container "  >
              <div className="row g-4 " >
                {product.subProducts.map((Item) => (
                  <div className="col-12 col-md-6 col-lg-4" key={Item.id} data-aos="zoom-in"
                  data-aos-duration="1800"
                  data-aos-once="true">
                    <div
                      className="h-100 p-2 text-center shadow overflow-hidden border border-2 "
                      onMouseOver={() => handleHover(Item.img)}
                      onMouseOut={handleMouseOut}
                      onClick={() => handleShowModal(Item)}
                      style={{
                        cursor: "pointer",
                        borderRadius: "35px 0px 35px 0px",
                      }}
                    >
                      <div className="mb-1">
                        <Image
                          src={Item.img}
                          alt={Item.name}
                          fluid
                          className="thumbnail"
                        />
                      </div>
                      <p className="mt-auto jr_tittle fs-6 pt-1">{Item.name}</p>
                    </div>
                  </div>
                ))}
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
      </Container>
    </>
  );
}

export default HOC(ProductPageHover);
