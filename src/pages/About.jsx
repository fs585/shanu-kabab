import React from "react";
import "../css/About.css";
import shanu from "../utils/img/shanu.jpg";
import cart from "../utils/img/cart.jpg";
import ImageGallery from "../components/ImageGallery";

export default function About() {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About</h1>
        </div>
      </header>
      <div className="container my-5">
        <p>
          We are a restaurant that specializes in non-vegetarian dishes. Our
          specialty, Seekh Kabab is renowned all over Sangli, city. Along with
          Kabab we also serve sea food such as fish fry, and Vegetarian option
          of Spring Roll.
        </p>
        <p>
          At Shanu Shahi Kabab, our philosophy is simple yet profound -
          <strong> Customer First</strong>. We believe in delighting our patrons
          with exceptional service, delectable dishes, and a warm ambiance. Your
          satisfaction is our top priority, and we strive to create memorable
          dining experiences for you. Come, indulge in a culinary journey where
          you are truly valued and pampered.
        </p>

        <p></p>

        <div className="row">
          <div className="col-lg-6">
            <img
              src={shanu}
              className="img-fluid my-4"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-lg-6">
            <img
              src={cart}
              className="img-fluid my-4"
              alt=""
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>

        <p>
          <h2 className="text-center mb-4">About Me</h2>
          <p>
            I'm Shahnawaj, the founder of Shanu Shahi Kabab. My passion for
            cooking and serving people led me to create this culinary haven.
            Born and raised in Sangli, I've always been fascinated by the rich
            flavors and aromas of traditional Indian cuisine. With years of
            experience in the food industry, I decided to bring my vision to
            life and share it with the world.
          </p>
          <p>
            My journey began with a small food stall, where I perfected my
            recipes and learned the art of pleasing palates. The overwhelming
            response and encouragement from my customers motivated me to expand
            and create a restaurant that would become a benchmark for quality
            and taste.
          </p>
          <p>
            Today, Shanu Shahi Kabab is a testament to my dedication and hard
            work. I take pride in every dish that leaves our kitchen, ensuring
            that each bite is a reflection of my passion and commitment to
            excellence. I invite you to come and experience the flavors of my
            childhood, infused with love and care.
          </p>
        </p>
      </div>

      <div className="bg-dark text-light">
        <ImageGallery />
      </div>
    </div>
  );
}
