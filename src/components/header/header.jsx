import React from "react";
import "./header.css";
import Logo from "../../assets/logof.png";
import MenuIcon from "../../assets/menu.png";
import UserIcon from "../../assets/user.png";
import CartIcon from "../../assets/shopping-cart.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { addCart } = useSelector((state) => state.product);
  console.log(addCart);
  return (
    <>
      <div className="d-flex justify-content-between bg-to-header">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Home Improvement Deals | Financing Options
            </a>
          </li>
        </ul>

        <ul class="nav">
          <li class="nav-item">
            <a className="nav-link text-white" href="#">
              Our App{" "}
            </a>
          </li>
          <li class="nav-item">
            <a className="nav-link text-white" href="#">
              Wayfair Professional
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white" href="#">
              Free Shipping Over $35*
            </a>
          </li>
        </ul>
      </div>

      <header className="pt-1 ">
        <div className="">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2">
                  <nav className="">
                    <div className="container-fluid">
                      <button
                        className="navbar-toggler fs-3"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                      >
                        <img height={26} src={MenuIcon} alt="" />
                        <span className="text-grey"> Menu </span>
                      </button>
                      <div
                        className="offcanvas offcanvas-start"
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                      >
                        <div className="offcanvas-header">
                          <h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                          >
                            Wayfair
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="offcanvas-body">
                          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Departments
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Sale
                              </a>
                            </li>
                            <hr />
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                My Account
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                My Oders
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Review My Purchases
                              </a>
                            </li>
                            <hr />
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Recently Viewed
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Lists
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Design Services
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                3D Room Planer
                              </a>
                            </li>
                            <hr />
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Wayfair Credit Card
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Wayfair Financing
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Gift Card
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Waifaire Professional
                              </a>
                            </li>
                            <hr />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </nav>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  <img height={35} src={Logo} alt="" />
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-7 mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Find anything home..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn me-2">
                <img src={UserIcon} alt="" height={26} /> Sign In
              </button>
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbarCart"
                aria-controls="offcanvasNavbarCart"
                aria-label="Toggle navigation"
              >
                <img src={CartIcon} alt="" height={26} /> Cart
              </button>

              <nav class="navbar">
                <div class="container-fluid">
                  <div
                    class="offcanvas offcanvas-end text-bg-dark"
                    tabindex="-1"
                    id="offcanvasNavbarCart"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                  >
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                        Dark offcanvas
                      </h5>
                      <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="offcanvas-body">
                      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Link
                          </a>
                        </li>
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul class="dropdown-menu dropdown-menu-dark">
                            <li>
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <hr class="dropdown-divider" />
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <header className="d-flex justify-content-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link " aria-current="page">
              furniture
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Outdoor
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Bedding & Bath
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Rags
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Decor & Pillows
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Organization
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Lighting
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Kitchen
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Baby & Kids
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home Improvement
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Holidays
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Appliances
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
