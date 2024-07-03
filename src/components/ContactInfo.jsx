import React from "react";
import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="fs-1 mb-3 text-uppercase fw-bold">Where To Find Us</h2>
      <p className="mb-5">Matan Market, Khan bhag, Sangli 416416</p>
      <h3>Opening Hours</h3>
      <p className="mb-2">Mon - Sat: 17:00 - 23:00</p>
      <h3>Phone</h3>
      <p className="m-0">
        <a className="phone" href="tel:8999164198">
          8999164198
        </a>
      </p>
    </div>
  );
}
