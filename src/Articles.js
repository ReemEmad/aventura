import React from "react"
import { Button, Divider, Typography } from "@mui/material"
import { ChevronRight } from "@mui/icons-material"

function Articles() {
  return (
    <>
      <div className="articles__bg"></div>
      <Typography
        variant="h5"
        component="div"
        align="center"
        gutterBottom
        className="articles__main__header"
      >
        Helpful Articles
      </Typography>
      <div className="articles__container">
        <div>
          <article className="articles">
            <div className="articles__img">
              <img
                src="https://images.pexels.com/photos/4353632/pexels-photo-4353632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="300px"
                height="250px"
              />
            </div>
            <div className="articles__text">
              <Typography
                variant="h5"
                component="div"
                align="left"
                className="articles__text__header"
              >
                What Makes Napa Valley Such A Famous Winegrowing Region?
              </Typography>
              <Typography variant="body1" component="div" align="left">
                California’s Napa has a rich history since it was settled back
                in the 1800’s. The area boasts a completely distinctive
                combination of climate, geology, geography – unlike any other
                part....
              </Typography>
              <Button variant="contained" className="articles__text__btn">
                Continue Reading
              </Button>
            </div>
          </article>
          <Divider variant="inset" />
          <article className="articles">
            <div className="articles__img">
              <img
                src="https://images.pexels.com/photos/4353632/pexels-photo-4353632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                width="300px"
                height="250px"
              />
            </div>
            <div className="articles__text">
              <Typography
                variant="h5"
                component="div"
                align="left"
                className="articles__text__header"
              >
                What Makes Napa Valley Such A Famous Winegrowing Region?
              </Typography>
              <Typography variant="body1" component="div" align="left">
                California’s Napa has a rich history since it was settled back
                in the 1800’s. The area boasts a completely distinctive
                combination of climate, geology, geography – unlike any other
                part....
              </Typography>
              <Button variant="contained" className="articles__text__btn">
                Continue Reading
              </Button>
            </div>
          </article>
          <Divider variant="inset" />
        </div>

        <div className="links">
          <Typography variant="h5" component="div" align="left">
            Positive Vibes Dedicated To You
          </Typography>
          <Divider />
          <div className="links__div">
            <Typography variant="body2" component="div" align="left">
              {/* <ChevronRight sx={{ fontSize: "17px", marginTop: "15px" }} /> */}
              Welcome to a whole new sharing experience online
            </Typography>
            <a href="#">Continue Reading>></a>
          </div>
          <div className="links__div">
            <Typography variant="body2" component="div" align="left">
              {/* <ChevronRight sx={{ fontSize: "17px", marginTop: "15px" }} /> */}
              Welcome to a whole new sharing experience online
            </Typography>
            <a href="#">Continue Reading>></a>
          </div>
          <div className="links__div">
            <Typography variant="body2" component="div" align="left">
              {/* <ChevronRight sx={{ fontSize: "17px", marginTop: "15px" }} /> */}
              Welcome to a whole new sharing experience online
            </Typography>
            <a href="#">Continue Reading>></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Articles
