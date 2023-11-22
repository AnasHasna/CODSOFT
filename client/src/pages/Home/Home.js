import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar";
import HomeSearch from "../../components/HomeSearch/HomeSearch";

const Home = () => {
  return (
    <div>
      <div className="home-content-container">
        <NavBar />
        <div className="home-content d-flex flex-column justify-content-center  ">
          <div className="mb-4">
            <h4 className="txt">4563+ Jobs Listed</h4>
            <h1 className="txt">Find Your Dream Job</h1>
            <h6 className="txt">
              We provide online instant cash loans with quick approval that suit
              your term length
            </h6>
          </div>
          <div className="home-button">
            <button className="btn btn-success px-4 p-2" type="submit">
              Upload Your Resume
            </button>
          </div>
        </div>
      </div>
      <HomeSearch />
    </div>
  );
};

export default Home;
