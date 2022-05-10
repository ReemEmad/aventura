import React from "react"
import { Typography } from "@mui/material"

function ParentCompany() {
  return (
    <div className="parent_company">
      <div className="parent_company__imgContainer"></div>
      <Typography
        variant="h3"
        component="div"
        align="center"
        color="#124B9C"
        gutterBottom
      >
        Our Parent Company
      </Typography>
      <div className="parent_company__text">
        <img
          src="https://www.aventuraworld.com/MyUpload/imagesimages/sgi-logo.png"
          alt="logo"
        />
        <section>
          <Typography
            variant="subtitle1"
            component="div"
            align="left"
            color="#3a3a3a"
          >
            Established in 1972, Sakkara Group International enjoys more than 45
            time-honored years of success in Hospitality, Travel, and Tourism –
            equating to more than four decades of experience, insight, skills,
            and knowledge that continue to drive our positive growth. Since we
            opened our first tour operation business more than four decades ago,
            the company has grown strategically with destination management
            services, hotels, a cruise fleet, tour operations and more, while
            always staying true to our corporate philosophy of emphasizing
            exceptional customer service and destination expertise in our
            offering of a wide range of quality travel and tourism related
            products.
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            align="left"
            color="#3a3a3a"
          >
            <br />
            Our ever-growing global presence gives us the unique experience and
            edge to continue diversifying to present a world of amazing travel
            opportunities. We currently maintain worldwide hubs in the heart of
            five of the most dynamic, historical and culturally rich cities in
            the world: New York, London, Paris, Cairo & Delhi. Our multilingual
            and highly motivated staff of 2000 employees are known for their
            unparalleled destination knowledge and experience in Hospitality and
            Travel. Together, we are all dedicated to serving our clientele
            across the globe and working together to ensure their utmost
            satisfaction is met. It is all of these distinctive attributes and a
            fervent passion for travel that have helped us maintain our position
            as one of the leading hospitality and tourism groups in the
            world…and this is just the beginning!
          </Typography>{" "}
          <br />
          <Typography
            variant="subtitle1"
            component="div"
            align="left"
            color="#3a3a3a"
          >
            {" "}
            Look for great new things to come from Sakkara Group International
            and Aventura World as we continue our path of growth in culturally
            rich, unique programs.
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            align="left"
            color="#3a3a3a"
          >
            <br /> Wishing you the happiest of travel always!
          </Typography>
        </section>
      </div>
    </div>
  )
}

export default ParentCompany
