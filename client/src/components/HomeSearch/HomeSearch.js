import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const dropdownStyle = {
  backgroundColor: "white", // Set the background color to white
};

const HomeSearch = () => {
  return (
    <div className="my-5 mx-1 d-flex flex-row justify-content-center">
      <div className="m-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search Keyword"
        />
      </div>
      <DropdownButton
        className="custom-dropdown m-2"
        id="dropdown-basic-button"
        title="Category"
        variant="secondary"
        drop="up">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        className="custom-dropdown m-2"
        id="dropdown-basic-button"
        title="Location"
        drop="up"
        variant="secondary">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>

      <div className="home-search-button  m-2">
        <button className="btn btn-success px-4" type="submit">
          Find Job
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
