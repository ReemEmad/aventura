import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Typography,
  Button,
  Tab,
  Tabs,
  Box,
  Card,
  CardContent,
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import AppSlider from "./components/AppSlider"
import {
  FormatQuote,
  Groups,
  LocalAirport,
  Public,
  NavigateNext,
  NavigateBefore,
} from "@mui/icons-material"
import { pink } from "@mui/material/colors"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {
  responsive,
  items,
  responsive_endorsements,
  testimonials,
} from "./utils/utils"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const theme = createTheme()

theme.typography.h5 = {
  fontSize: "1.2rem",
  "@media (max-width:480px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}

theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (max-width:480px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}

function Home() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <AppSlider />

      <section>
        <div className="aventura-experience__icons">
          <Typography align="center">
            <LocalAirport sx={{ color: pink[500] }} fontSize="large" />
          </Typography>
          <Typography align="center">
            <Public sx={{ color: pink[500] }} fontSize="large" />
          </Typography>
          <Typography align="center">
            <Groups fontSize="large" sx={{ color: pink[500] }} />
          </Typography>
        </div>
        <article className="aventura-experience">
          <article>
            {/* <Typography align="center">
            <LocalAirport sx={{ color: pink[500] }} fontSize="large" />
          </Typography> */}
            <ThemeProvider theme={theme}>
              <Typography
                component="div"
                variant="h5"
                align="center"
                fontWeight="500"
                color={"#124b9c"}
                gutterBottom
              >
                Aventura World Experience
              </Typography>
            </ThemeProvider>
            <Typography
              component="div"
              variant="p"
              align="center"
              color={"#3A3A3A"}
            >
              It’s all about traveling to spectacular places at a relaxed pace,
              discovery, education, and inspiring interactions.
            </Typography>
          </article>
          <article>
            {/* <Typography align="center">
            <Public sx={{ color: pink[500] }} fontSize="large" />
          </Typography> */}
            <ThemeProvider theme={theme}>
              <Typography
                component="div"
                variant="h5"
                align="center"
                fontWeight="500"
                color={"#124b9c"}
                gutterBottom
              >
                Travel For All
              </Typography>
            </ThemeProvider>
            <Typography
              component="div"
              variant="p"
              align="center"
              color={"#3A3A3A"}
            >
              We go the extra mile to deliver meticulously planned travel
              programs at prices to suit all budgets
            </Typography>
          </article>
          <article>
            {/* <Typography align="center">
            <Groups fontSize="large" sx={{ color: pink[500] }} />
          </Typography> */}
            <ThemeProvider theme={theme}>
              <Typography
                component="div"
                variant="h5"
                align="center"
                gutterBottom
                fontWeight="500"
                color={"#124b9c"}
              >
                Cultural Discovery
              </Typography>
            </ThemeProvider>
            <Typography
              component="div"
              variant="p"
              align="center"
              color={"#3A3A3A"}
            >
              Meet locals, enjoy people-to-people interactions to understand
              their life, culture, social aspects, and the region’s economy.
            </Typography>
          </article>
        </article>
      </section>

      <section className="aventura-programs">
        <Typography
          variant="h4"
          component="div"
          align="center"
          color={"#ffff"}
          gutterBottom
          mb={5}
        >
          From Our Programs
        </Typography>
        <div className="aventura-programs__carousel">
          <Carousel
            responsive={responsive}
            slidesToSlide={1}
            additionalTransfrom={0}
            centerMode={false}
            focusOnSelect={false}
            minimumTouchDrag={80}
            containerClass="container-with-dots"
            autoPlay={false}
            infinite={false}
            swipeable
            draggable
            arrows
          >
            {items.map((item, i) => (
              <section key={i}>
                <img src={item.src} height="300" width="400" alt={item.name} />
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h5"
                    align="left"
                    component="div"
                    gutterBottom
                    color="#fff"
                  >
                    {item.name}
                  </Typography>
                </ThemeProvider>
                <Typography variant="body1" component="div" color="#fff">
                  {item.duration}
                </Typography>

                <Typography
                  variant="text"
                  className="CheckButton"
                  color="info"
                  mr="-3"
                  onClick={() => console.log("clicked")}
                >
                  Read More
                </Typography>
              </section>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="aventura-destination">
        <Typography
          variant="h4"
          component="div"
          align="center"
          gutterBottom
          color="#124b9c"
          mb={3}
        >
          Our Destinations
        </Typography>
        <Box sx={{ width: "50%", margin: "auto" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              // orientation="vertical"
              variant="scrollable"
              centered
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Europe" {...a11yProps(0)} />
              <Tab label="South Pacific" {...a11yProps(1)} />
              <Tab label="Asia" {...a11yProps(2)} />
              <Tab label="Africa" {...a11yProps(3)} />
              <Tab label="Latin America" {...a11yProps(4)} />
              <Tab label="USA" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="aventura-destination__package">
              <img
                src="https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="450"
                height="350"
              />
              <Button variant="contained">View Europe packages</Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="aventura-destination__package">
              <img
                src="https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="450"
                height="350"
              />
              <Button variant="contained">View South Pacific packages</Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="aventura-destination__package">
              <img
                src="https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="450"
                height="350"
              />
              <Button variant="contained">View Asia packages</Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="aventura-destination__package">
              <img
                src="https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="450"
                height="350"
              />
              <Button variant="contained">View Africa packages</Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="aventura-destination__package">
              <img
                src="https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="450"
                height="350"
              />
              <Button variant="contained">View Latin America packages</Button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div className="aventura-destination__package">
              <img
                src="https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="450"
                height="350"
              />
              <Button variant="contained">View USA packages</Button>
            </div>
          </TabPanel>
        </Box>
      </section>

      <section className="aventura-why">
        <div className="aventura-why__left">
          <Typography
            variant="h4"
            component="div"
            align="center"
            gutterBottom
            color="#fff"
          >
            Why Aventura
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            gutterBottom
            px="60px"
          >
            At Aventura World we understand that a great travel offer needs to
            be communicated. Our marketing department is pleased to provide
            multi-channeled support that can be easily integrated into your
            program to create a comprehensive advertising campaign at no
            additional cost.
          </Typography>
          <Typography align="center" mt={5}>
            <Button variant="outlined">Read More</Button>
            {"       "} <Button variant="outlined">Request Information</Button>
          </Typography>
        </div>
        <div className="aventura-why__right">
          <img
            width="415px"
            height="396px"
            src="https://images.pexels.com/photos/922978/pexels-photo-922978.jpeg?cs=srgb&dl=pexels-tranmautritam-922978.jpg&fm=jpg"
            alt=""
          />
        </div>
      </section>

      <section className="aventura-youtube">
        <div className="aventura-youtube__left">
          <iframe
            width="410"
            height="285"
            src="https://www.youtube.com/embed/m5TX0Y9-3EM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="aventura-youtube__right">
          <Typography
            variant="h4"
            component="div"
            align="center"
            gutterBottom
            color="#124b9c"
            px="50px"
          >
            Experience the world with our YouTube of the day
          </Typography>
          <Typography
            variant="p"
            component="p"
            align="center"
            gutterBottom
            color="#3a3a3a"
            px="55px"
          >
            We invite you to become part of Aventura World…a living, breathing
            entity made up of a team of destination experts and travel planning
            partners that collaborate to share unforgettable travel experiences,
            and work in fruitful ways to enhance economies and promote overall
            wellbeing of our entire global community.
          </Typography>
        </div>
      </section>

      <section className="aventura-request">
        <Typography
          variant="h5"
          component="div"
          align="center"
          pt={5}
          gutterBottom
        >
          REQUEST INFORMATION
        </Typography>

        <Typography
          variant="subtitle1"
          component="div"
          align="center"
          gutterBottom
        >
          <div className="aventura-request__p">
            Let our professional, experienced staff handle the details of your
            next group travel program with Aventura World, a valued leader in
            the U.S group travel marketplace since 1972.
          </div>
        </Typography>
        <Button variant="contained" margin="auto">
          Read More
        </Button>
      </section>

      <section className="aventura-endorsements">
        <Carousel
          autoPlay
          infinite
          showDots
          centerMode={false}
          arrows={false}
          responsive={responsive_endorsements}
          // customButtonGroup={<CustomButtonGroup />}
          className="aventura-endorsements__carousel"
        >
          {testimonials.map((item, i) => (
            <Card variant="elevation" key={item}>
              <CardContent>
                <Typography variant="body1" align="left">
                  <FormatQuote id="quotes" /> {item.content}
                  <FormatQuote />
                </Typography>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                  {item.user}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
        <div>
          <Typography
            variant="h4"
            component="div"
            align="center"
            gutterBottom
            color="#124b9c"
          >
            Our sponsor
          </Typography>
          <img
            src="https://www.aventuraworld.com/themes/en/img/acce-logo.jpg"
            alt="sponsor"
          />
        </div>
      </section>
    </>
  )
}

export default Home

// const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const {
//     carouselState: { currentSlide, totalItems, slidesToShow },
//   } = rest
//   return (
//     <div className="carousel-button-group">
//       <NavigateBefore
//         onClick={() => previous()}
//         className={
//           currentSlide === totalItems - slidesToShow
// ? "disable"
//             : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
//         }
//       />
//       <NavigateNext
//         onClick={() => next()}
//         className={
//           currentSlide === totalItems - slidesToShow
//             ? "disable"
//             : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
//         }
//       />
//     </div>
//   )
// }
