import React from "react"
import Carousel from "react-material-ui-carousel"
import { Button, Typography } from "@mui/material"

function AppSlider() {
  var items = [
    {
      name: "From The Alps To The Adriatic",
      src: "https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "South pacific highlights",
      src: "https://images.pexels.com/photos/221387/pexels-photo-221387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Switzerland & Austria",
      src: "https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg?cs=srgb&dl=pexels-tranmautritam-922978.jpg&fm=jpg",
    },
    {
      name: "Tuscany, Italy",
      src: "https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "National Parks Of The West",
      src: "https://images.pexels.com/photos/6526177/pexels-photo-6526177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Taste of tyroll-Innsbruck, Austria",
      src: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ]

  return (
    <article className="carousel-container">
      <Carousel
        cycleNavigation
        next={(next, active) =>
          console.log(`we left ${active}, and are now at ${next}`)
        }
        prev={(prev, active) =>
          console.log(`we left ${active}, and are now at ${prev}`)
        }
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </article>
  )
}

function Item(props) {
  return (
    <section className="paper">
      <img
        className="paper-carousel-img"
        src={props.item.src}
        height="650"
        width="1535"
        alt={props.item.name}
      />
      <Typography
        variant="h2"
        align="center"
        component="div"
        gutterBottom
        className="paper-carousel__name"
        sx={{ fontWeight: "400" }}
      >
        {props.item.name}
      </Typography>

      <Button variant="contained" className="CheckButton">
        Read More
      </Button>
    </section>
  )
}

export default AppSlider
