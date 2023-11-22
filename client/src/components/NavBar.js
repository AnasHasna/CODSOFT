import React from "react";
import Logo from "../assets/Logo.png";

const navBarLiStyle = {
  color: "white",
  fontSize: "13px",
  fontWeight: "bold",
};

const transparentBackground = {
  backgroundColor: "rgba(0, 0, 0, 0)", // Use RGBA with an alpha value of 0 for transparency
  boxShadow: "none", // Remove any box shadow
};
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg " style={transparentBackground}>
      <div className="container-fluid">
        <img
          src={Logo}
          alt="Logo"
          width="170"
          height="60"
          className="d-inline-block align-top"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={navBarLiStyle}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={navBarLiStyle}>
                Browse Job
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={navBarLiStyle}>
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={navBarLiStyle}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={navBarLiStyle}>
                Contact
              </a>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
            }}>
            <a className="nav-link" href="#" style={navBarLiStyle}>
              Log In
            </a>
            <button
              class="btn btn-success"
              type="submit"
              style={{ marginLeft: "20px" }}>
              Post A Job
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
