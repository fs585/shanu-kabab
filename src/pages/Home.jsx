import React from "react";
import MenuBtn from "../components/MenuBtn";
import "../css/Home.css";
import cart from "../utils/img/cart.jpg";
import { Link } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import ContactInfo from "../components/ContactInfo";

export default function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
            <h2 className="mb-0 text-black fw-bold">Welcome to</h2>
            <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
              Shanu Shahi Kabab
              <MenuBtn />
            </h1>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={cart} className="img-fluid w-60" alt="about img" />
          </div>
          <div className="col-lg-6 d-flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">About Us</h2>
            <p>
              We are a restaurant that specializes in non-vegetarian dishes. Our
              specialty, Seekh Kabab is renowned all over Sangli, city. Along
              with Kabab we also serve sea food such as fish fry, and Vegetarian
              option of Spring Roll.
            </p>
            <p className="mb-5">
              At Shanu Shahi Kabab, our philosophy is simple yet profound -
              <strong> Customer First</strong>. We believe in delighting our
              patrons with exceptional service, delectable dishes, and a warm
              ambiance. Your satisfaction is our top priority, and we strive to
              create memorable dining experiences for you. Come, indulge in a
              culinary journey where you are truly valued and pampered.
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-outline-success btn-lg">
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="fs-1 mb-5 text-uppercase fw-bold">Our Favorites</h2>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Food</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Seekh Kabab</p>
                  <p className="fs-3 mx-2 text-success fw-nold">₹100</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Fish Fry</p>
                  <p className="fs-3 mx-2 text-success fw-nold">₹50</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Chicken Lollipop</p>
                  <p className="fs-3 mx-2 text-success fw-nold">₹130</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5">Fast Food</h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Kabab Pav</p>
                  <p className="fs-3 mx-2 text-success fw-nold">₹10</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Chicken Roll</p>
                  <p className="fs-3 mx-2 text-success fw-nold">₹40</p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2">Chicken Samosa</p>
                  <p className="fs-3 mx-2 text-success fw-nold">₹25</p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
      <ImageGallery />

      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
