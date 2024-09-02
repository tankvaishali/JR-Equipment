import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { ProductItemlist } from "./ProductItemlist";
import { MdWifiCalling3 } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FiCheckSquare } from "react-icons/fi";
import Slider from "react-slick";
import ButtonHover from "./ButtonHover";

function Header() {
  const [showNavColor, setShowNavColor] = useState(true);
  const lastScrollY = useRef(0);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const navigate = useNavigate();
  const searchFormRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowNavColor(scrollY <= lastScrollY.current);
    lastScrollY.current = scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const allProducts = ProductItemlist.flatMap(product =>
      [product, ...(product.subProducts || [])]
    );

    const filtered = searchInput
      ? allProducts.filter(product =>
        product.name.toLowerCase().startsWith(searchInput.toLowerCase())
      )
      : [];

    setFilteredProducts(filtered);
  }, [searchInput]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchFormRef.current && !searchFormRef.current.contains(event.target)) {
        resetSearchModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSearchModal = () => {
    setShowSearchForm(prev => !prev);
  };

  const resetSearchModal = () => {
    setSearchInput("");
    setFilteredProducts([]);
    setShowSearchForm(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleProductClick = (productLink) => {
    navigate(productLink);
    resetSearchModal();
  };

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleDropdownMouseEnter1 = () => {
    setShowDropdown1(true);
  };

  const handleDropdownMouseLeave1 = () => {
    setShowDropdown1(false);
  };

  const ColumnProductList = ({ items }) => (
    <div>
      {items.map((x, i) => (
        <Link to={x.link} className="text-decoration-none d-flex headerproduct_link" key={i} onClick={handleDropdownMouseLeave1}>
          <div className="px-1 pera fw-bold">
            <FiCheckSquare />
          </div>
          <div className=" prdouctlist_text fw-bold py-1">
            {x.name}
          </div>
        </Link>
      ))}
    </div>
  );

  const midpoint1 = Math.ceil(ProductItemlist.length / 3);
  const midpoint2 = Math.ceil((ProductItemlist.length * 2) / 3);
  const firstThird = ProductItemlist.slice(0, midpoint1);
  const secondThird = ProductItemlist.slice(midpoint1, midpoint2);
  const thirdThird = ProductItemlist.slice(midpoint2);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1800,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    swipe: false,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div style={{ marginBottom: "70px" }}>
      <div className={`navcolor text-white p-0 m-0 ${showNavColor ? "show" : "hide"}`}>
        <div className="container" style={{ height: 55 }}>
          <div className="pera d-flex justify-content-between align-content-center align-items-center">
            <div className="p-1 pera">
              <Link to={"tel:+91 08048971629"} className="text-decoration-none linktext_hover text-white fw-medium d-flex align-content-center align-items-center">
                <span className="pe-2 fs-5">
                  <MdWifiCalling3 />
                </span>
                +(91) 8048971629
              </Link>
            </div>
            <div style={{ width: "55px" }} className="text-center d-none d-md-block">
              <img src={require("../Assets/images/j-r-sales-services-logo-90x90.png")} alt="" className="img-fluid w-100 h-100" />
            </div>
            <div className="text-end">
              <span className="pe-2 fs-5">
                <LiaClipboardListSolid />
              </span>
              GST No : 24ANQPV9757N1ZO
            </div>
          </div>
        </div>
      </div>

      <div className={`header p-0 m-0 position-fixed w-100 ${showNavColor ? "stickyShow" : "top-0"}`} style={{ zIndex: 1200 }}>
        <nav className="navbar navbar-expand-lg p-0 bg-light shadow-lg">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              <div className="d-block d-lg-none" style={{ width: "60px" }}>
                <img src={require("../Assets/images/j-r-sales-services-logo-90x90.png")} alt="" className="img-fluid" />
              </div>
            </Link>

            <div className="order-0 order-lg-1">
              <button
                type="button"
                className="rounded-circle border border-0   d-flex align-items-center align-content-center justify-content-center"
                onClick={toggleSearchModal}
                style={{ width: "50px", height: "50px", backgroundColor: "#b1b4c1" }}
              >
                <Player src={"https://lottie.host/05d8cc09-86c6-45a6-8c7a-c7a4e28a82ae/PIlO41tOS2.json"} autoplay loop controls className="search_size" />
              </button>
            </div>
            <button className="navbar-toggler border-0 shadow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pt-3 pt-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link text-decoration-none p-0 headmenu"
                    activeClassName="active"
                  >
                    <div className="parallelogram m-2 m-lg-0 mt-0 mx-5">
                      <div className="text">Home</div>
                    </div>
                  </NavLink>
                </li>
                <li
                  className="nav-item position-relative abouthover"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <NavLink
                    exact
                    to="/aboutus"
                    className="nav-link text-decoration-none p-0 headmenu"
                    activeClassName="active"
                  >
                    <div className="parallelogram m-2 m-lg-0 mx-5">
                      <div className="text">About</div>
                    </div>
                  </NavLink>
                  {showDropdown && (
                    <div className="dropdown-menu border-0 d-none d-lg-block">
                      <div className="row p-0 m-0 w-100">
                        <div className="col-7 pera py-3 ps-4">
                          We are a proprietorship firm, which is guided by Mr.
                          Jitendra Velari, who has years of experience in this
                          industry. Owing to his excellent leadership and
                          efficient supervision, we have been able to establish
                          a great rapport in the competitive market. His
                          professional work ethics and profound knowledge has
                          helped us a lot in developing strong relationships
                          with our valuable clients.
                          <div className="mt-2">
                            <Link to={"/"}>
                              <ButtonHover
                                btnttitle="Read More"
                                className=" p-2"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-5 p-3">
                          <div className="about_hoverimage d-flex align-content-center align-items-center justify-content-center">
                            <div className="text-center pt-2">
                              <img
                                src={require("../Assets/images/j-r-sales-services-logo-90x90.png")}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li
                  className="nav-item position-relative producthover"
                  onMouseEnter={handleDropdownMouseEnter1}
                  onMouseLeave={handleDropdownMouseLeave1}
                >
                  <NavLink
                    exact
                    to="/product"
                    className="nav-link text-decoration-none p-0 headmenu"
                    activeClassName="active"
                  >
                    <div className="parallelogram m-2 m-lg-0 mx-5">
                      <div className="text">Product</div>
                    </div>
                  </NavLink>
                  {showDropdown1 && (
                    <div className="dropdown-menu border-0 d-none d-lg-block">
                      <div className="row p-0 m-0 py-3">
                        <div className="col-7 pera ps-4">
                          <div className="row">
                            <div className="col text-start">
                              <ColumnProductList items={firstThird} />
                            </div>
                            <div className="col text-start">
                              <ColumnProductList items={secondThird} />
                            </div>
                            <div className="col text-start">
                              <ColumnProductList items={thirdThird} />
                            </div>
                          </div>
                        </div>
                        <div className="col-5 p-0 m-0 overflow-hidden">
                          <div className="h-100">
                            <div className="producthover_slick p-0 m-0">
                              <Slider
                                {...settings}
                                className="p-0 m-0 header_slickslider"
                              >
                                {ProductItemlist?.map((x, i) => (
                                  <div className="bg-white overflow-hidden h-100" key={i} onClick={handleDropdownMouseLeave1}>
                                    <div className="text-center mx-auto pt-2 headerproduct_image">
                                      <img
                                        src={x.img}
                                        alt=""
                                        className="img-fluid h-100 w-100 object-fit-contain"
                                      />
                                    </div>
                                    <div className="text-center fw-bold fs-6 pt-3">
                                      {x.name}
                                    </div>
                                    <Link to={x.link} className="mt-auto">
                                      <div className="mx-auto my-2 mt-3 text-center">
                                        <div className="elementor-button p-1 py-2 px-3">
                                          <div  className="elementor-button-text text-white text-decoration-none">
                                            Read More
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                ))}
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/service"
                    className="nav-link text-decoration-none p-0 headmenu"
                    activeClassName="active"
                  >
                    <div className="parallelogram m-2 m-lg-0 mx-5">
                      <div className="text">Service</div>
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className="nav-link text-decoration-none p-0 headmenu"
                    activeClassName="active"
                  >
                    <div className="parallelogram m-2 m-lg-0 mx-5">
                      <div className="text">Profile</div>
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contactus"
                    className="nav-link text-decoration-none p-0 headmenu"
                    activeClassName="active"
                  >
                    <div className="parallelogram m-2 m-lg-0 mx-5">
                      <div className="text">Contact</div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {showSearchForm && (
        <div ref={searchFormRef} className="search-form-container fixed-top d-flex justify-content-center align-items-center" style={{ zIndex: 1300 }}>
          <div className="container">
            <div className="shadow rounded formsearch m-auto p-3 bg-white">
              <form action="" className="d-flex">
                <input
                  type="text"
                  className="form-control border border-secondary rounded-start mx-auto fs-6 formshadow"
                  placeholder="Search your products..."
                  aria-label="Search"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  style={{ boxShadow: 'none', outline: 'none' }}
                />
                <button
                  type="button"
                  className="form-control btn-close rounded-circle ms-2 bg-secondary-subtle p-3"
                  aria-label="Close"
                  onClick={resetSearchModal}
                ></button>
              </form>
            </div>
            {searchInput && (
              <div className="searchbody mt-2 bg-white rounded p-4 m-0" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {filteredProducts.length > 0 ? (
                  <div className="row">
                    {filteredProducts.map((product, index) => {
                      let mainProductLink = '';
                      let isSubProduct = false;

                      ProductItemlist.forEach(mainProduct => {
                        const subProduct = mainProduct.subProducts.find(sub => sub.name === product.name);
                        if (subProduct) {
                          mainProductLink = mainProduct.link;
                          isSubProduct = true;
                        }
                      });

                      const productLink = isSubProduct ? mainProductLink : product.link;

                      return (
                        <Link to={productLink} key={index} className="text-decoration-none searchmain col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-center">
                          <div className="searchimg rounded-circle border border-2 shadow p-2">
                            <img
                              src={product.img}
                              alt={product.name}
                              style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                            />
                          </div>
                          <Link
                            to={productLink}
                            className="searchtittle text-secondary text-decoration-none ms-3 fw-bolder"
                            onClick={() => handleProductClick(productLink)}
                          >
                            {product.name}
                          </Link>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <li className="list-group-item">No results found.</li>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Header;
