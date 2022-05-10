import {
  FacebookOutlined,
  YouTube,
  LocationOn,
  Phone,
  Email,
  Dialpad,
} from "@mui/icons-material"
import { Typography, Divider } from "@mui/material"
import React from "react"

function Footer() {
  return (
    <div className="aventura-footer">
      <article className="aventura-footer__links">
        <section className="aventura-footer__links__first">
          <img
            src="https://www.aventuraworld.com/themes/en/img/logo-f.png"
            alt="logo"
            height="80"
            width="250"
          />
          <Typography variant="subtitle1" component="div" px="35px">
            It's no secret that travelers love to experience new places, people,
            cultures, international cuisines and traditions ... and we love to
            provide superior service, flexibility and reliability - always going
            the extra mile to deliver meticulously planned travel programs that
            promote excellence at prices to suit all budgets.
          </Typography>
        </section>
        <section>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <ul>
              <li>Who are we?</li>
              <li>Why Aventura World?</li>
              <li>Our Parent Company</li>
            </ul>
            <li>Endorsements</li>
            <li>Brochure</li>
            <li>Media</li>
            <ul>
              <li>Videos</li>
              <li>Helpful Articles</li>
            </ul>
            <li>Travel Protection</li>
            <li>Terms & Conditions</li>
            <li>Request Information</li>
            <li>Career Opportunities</li>
            <li>Contact Us</li>
          </ul>
        </section>
        <section>
          <h1 style={{ color: "#fff" }}>Our Destinations</h1>
          <ul>
            <li>Europe</li>
            <li>Souh Pacific</li>
            <li>Asia</li>
            <li>Africa</li>
            <li>Latin America</li>
            <li>USA</li>
          </ul>
        </section>
        <section className="aventura-footer__links__last">
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            Contact Us
          </Typography>
          <ul>
            <li>
              <LocationOn /> Aventura World
              <br />
              250 Moonachie Road
              <br />
              Suite 308
              <br />
              Moonachie NJ 07074
              <br />
              United States of America
            </li>
            <li>
              <Phone /> 888.482.5887
            </li>
            <li>
              <Email /> info@aventuraworld
            </li>
            <li>
              <Dialpad /> 201.228.5240
            </li>
          </ul>
          <p>
            Follow us on:
            <span>
              {" "}
              <FacebookOutlined
                fontSize="large"
                sx={{ mt: 1, mb: -1, color: "#fff" }}
              />{" "}
              <YouTube fontSize="large" sx={{ mt: 1, mb: -1, color: "#fff" }} />
            </span>
          </p>
          <a href="#home">Book Now with program/group Code</a>
        </section>
      </article>
      <Divider sx={{ backgroundColor: "white", marginTop: "30px" }} />
      <Typography align="center" mt={4}>
        &copy; Copyright Aventura World 2022. All Rights Reserved.
      </Typography>
    </div>
  )
}

export default Footer
