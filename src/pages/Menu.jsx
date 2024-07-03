import React from "react";
import "../css/Menu.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import FastFoodImg from "../utils/img/pav.jpg";
// import DinnerImg from "../utils/img/dinner.jpg";
import ChickenImg from "../utils/img/chicken.jpg";
import ChickenImg2 from "../utils/img/chicken2.jpg";

const chicken = [
  {
    id: 1,
    name: "Full Chicken Tandoori",
    description:
      "Full plate (2 breasts and leg pieces) \n half plate (1 breast and leg piece)",
    price: "₹380 / ₹200",
  },
  {
    id: 2,
    name: "Chicken Alfaam",
    description: "Full plate and half plate",
    price: "₹ 400 / ₹210",
  },
  {
    id: 3,
    name: "Chicken Roll",
    description: "One piece",
    price: "₹50",
  },
  {
    id: 4,
    name: "Chicken Tikka Fry",
    description: "100g Boneless per serving",
    price: "₹55",
  },
  {
    id: 5,
    name: "Chicken Seekh Kabab",
    description: "per serving",
    price: "₹100",
  },
  {
    id: 6,
    name: "Chicken Pahadi Kabab",
    description: "per serving",
    price: "₹80",
  },
  {
    id: 7,
    name: "Chicken Angara Kabab",
    description: "per serving",
    price: "₹80",
  },
  {
    id: 8,
    name: "Chicken 65",
    description: "per serving (100g)",
    price: "₹50",
  },
  {
    id: 9,
    name: "Chicken Lollipop",
    description: "2 leg pieces",
    price: "₹130",
  },
];

const fast_food = [
  {
    id: 1,
    name: "Chicken Samosa",
    price: "₹25",
  },
  {
    id: 2,
    name: "Kabab Pav",
    price: "₹10",
  },

  {
    id: 3,
    name: "Chicken Roll",
    price: "₹10",
  },
];

const dinner = [
  {
    id: 1,
    name: "Spicy Beef",
    description: "spicy beef, potatoes, carrots, cheese sauce, spices",
    price: "£17",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description: "onion, carrot, celery, minced meat, spaghetti, parmesan",
    price: "£15",
  },
  {
    id: 3,
    name: "Chickpea Curry",
    description: "onion, chickpea, garlic, mushrooms, tomatoes, spices",
    price: "£12",
  },
];

export default function Menu() {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>

      <div className="breakfast my-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Chicken Dishes
          </h2>
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-6 d-flex-row justify-content-center">
              <img
                src={ChickenImg}
                className="img-fluid w-75 mt-4 mt-lg-0 mb-5"
                alt="chicken"
              />
              <img
                src={ChickenImg2}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt="chicken tandoori"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {chicken.map((breakfast) => (
                <div key={breakfast.id} className="">
                  <Card className="border-0">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {breakfast.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {breakfast.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {breakfast.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lunch bg-dark py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Fast Food
          </h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {fast_food.map((fast_food) => (
                <div key={fast_food.id} className="">
                  <Card className="border-0 bg-dark text-light">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {fast_food.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {fast_food.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {fast_food.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex-row justify-content-center">
              <img
                src={FastFoodImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt="lunch"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="dinner py-5">
        <div className="container">
          <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">
            Dinner
          </h2>
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
              {dinner.map((dinner) => (
                <div key={dinner.id} className="">
                  <Card className="border-0 ">
                    <CardBody>
                      <CardTitle className="text-center fs-3">
                        {dinner.name}
                      </CardTitle>
                      <CardText className="text-center fs-5">
                        {dinner.description}
                      </CardText>
                      <CardText className="text-center fs-3 fw-bold text-success">
                        {dinner.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col-lg-6 d-flex-row justify-content-center">
              <img
                src={DinnerImg}
                className="img-fluid w-75 mt-4 mt-lg-0"
                alt="lunch"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
