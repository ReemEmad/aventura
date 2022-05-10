import React from "react"
import { Typography } from "@mui/material"

function WhyAventura() {
  return (
    <>
      <div className="why_conatiner">
        <div className="why_img" id="content">
          <Typography
            variant="h3"
            component="div"
            align="center"
            color="#1f93c9"
            gutterBottom
            mt="50px"
          >
            Why Aventura World?
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            align="left"
            color="#1f93c9"
          >
            At Aventura World we understand that a great travel offer needs to
            be communicated. Our marketing department is pleased to provide
            multi-channeled support that can be easily integrated into your
            program to create a comprehensive advertising campaign at no
            additional cost:
          </Typography>
          <ul style={{ color: "#1f93c9" }}>
            <li>
              Professionally designed 4-page full color customized brochures{" "}
            </li>
            <li>Web page PDF </li>
            <li>
              Full color and/or black and white ads for newspaper placements{" "}
            </li>
            <li>Personalized full color posters</li>
            <li>Travel presentations conducted by our professional staff </li>
            <li>Custom PowerPoint presentations</li>
            <li>Presentations and webinars</li>
            <li>Expert informational handouts on how to get the message out</li>
          </ul>
          <Typography variant="subtitle1" component="div" align="left">
            Aventura World is dedicated to providing the best travel programs
            and unparalleled client service. We have designed a system to enable
            you to offer a seamless service without any additional work. Our
            Partnership includes:
          </Typography>
          <ul>
            <li>
              Accounting – Cashing of checks, charging of credit cards,
              invoicing travelers etc. - We handle this for you!
            </li>
            <li>
              Program operations – Our expert travel planners manage all details
              pre-, during and post-trip.{" "}
            </li>
            <li>
              Customer care – Our customer service staff are with you every step
              of the way.{" "}
            </li>
            <li>
              Professional well-traveled business development team – Our
              experienced business development team goes the extra mile.{" "}
            </li>
            <li>
              Booking Engine – We have an Internet booking engine that makes it
              easy for your travelers to reserve their program and helps to
              reduce your workload!
            </li>
          </ul>
          <Typography variant="subtitle1" component="div" align="left">
            It's no secret that travelers love to experience new places, people,
            cultures, international cuisines and traditions ... and we love to
            provide superior service, flexibility and reliability - always going
            the extra mile to deliver meticulously planned travel programs that
            promote excellence at prices to suit all budgets. Let our
            professional, experienced staff handle the details of your next
            group travel program to destinations across the globe with Aventura
            World.
          </Typography>
        </div>
        <div id="background"></div>
      </div>
    </>
  )
}

export default WhyAventura
