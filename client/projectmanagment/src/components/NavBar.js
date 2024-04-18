
import React from "react";
import axios from "axios";
import { useEmail } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { email } = useEmail();
  console.log("object", email)
  
  function handleLogout() {
    localStorage.removeItem("email");
    navigate("/")
  }
  
  return (
    <>
      <header id="header-demo ">
        <nav className="navbar navbar-expand-md bg-body-tertiary bsb-navbar-3">
          <div className="container">
            <a className="navbar-brand" href="/project">
              <img
                src="./pm.png"
                className="img-fluid"
                alt="Project Managment App"
                width={50}
                height={44}
              />
            </a>
            <a className="navbar-brand" href="/project">
              Project Managment
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#bsbNavbar"
              aria-controls="bsbNavbar"
              aria-label="Toggle Navigation"
            >
              <i className="bi bi-three-dots" />
            </button>
            <div className="collapse navbar-collapse" id="bsbNavbar">
              <ul className="navbar-nav bsb-dropdown-menu-responsive ms-auto align-items-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                    href="/add-project"
                  >
                    Add Projects
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                    href="/project"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="position-relative pt-1">
                      <i className="bi bi-search" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                    <form className="row g-1 px-3 py-2 align-items-center">
                      <div className="col-8">
                        <label
                          className="visually-hidden"
                          htmlFor="inputSearchNavbar"
                        >
                          Search
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputSearchNavbar"
                        />
                      </div>
                      <div className="col-4">
                        <button type="submit" className="btn btn-primary">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle bsb-dropdown-toggle-caret-disable"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="./pp.jpg"
                      width={50}
                      height={50}
                      className="img-fluid rounded-circle"
                      alt="User Profile Photo"
                    ></img>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn">
                    <li>
                      {email && (
                        <h6 className="dropdown-header fs-7 text-center">
                          Welcome, {email.name}
                        </h6>
                      )}
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a href="#" className="dropdown-item" aria-current="true">
                        <div className="row g-0 align-items-center">
                          <div className="col-3">
                            <img
                              src="./pp.jpg"
                              width={55}
                              height={55}
                              className="img-fluid rounded-circle"
                              alt="Luke Reeves"
                            />
                          </div>
                          <div className="col-9">
                            <div className="ps-3">
                              <div className="text-secondary mt-1 fs-7">
                                Premium Account
                              </div>
                              {email && (
                                <div className="text-secondary mt-1 fs-7">
                                  {email.email}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span>
                          <i className="bi bi-person-fill me-2" />
                          <span className="fs-7">View Profile</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span>
                          <i className="bi bi-bell-fill me-2" />
                          <span className="fs-7">Notifications</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span>
                          <i className="bi bi-gear-fill me-2" />
                          <span className="fs-7">Settings &amp; Privacy</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        <span>
                          <i className="bi bi-question-circle-fill me-2" />
                          <span className="fs-7">Help Center</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item text-center" href="#!">
                        <span>
                          <button type="button" className="btn btn-danger" onClick={handleLogout}>
                            <span className="fs-7">Log Out</span>
                          </button>
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
