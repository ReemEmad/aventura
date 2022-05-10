import React from "react"
import { Typography } from "@mui/material"

function About() {
  return (
    <>
      <div className="aventura_about_container">
        <div className="aventura_about_img">
          {/* <div className="circle"></div> */}
          <img
            src="https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            height="500"
            width="700"
            alt=""
            style={{ zIndex: 10 }}
          />
        </div>
        <section className="aventura_about">
          <Typography variant="h2" component="div" align="center" gutterBottom>
            Who are we?
          </Typography>
          <Typography variant="subtitle1" component="div" align="LEFT">
            Aventura World goes the extra mile! Exemplary client service,
            destination expertise and meticulously planned tour and travel
            packages are just a few of the key attributes that set Aventura
            World apart from others and keep travelers exploring the world with
            us time and time again. Featuring our exclusive first-class
            “international awareness programs”, our team’s insight into each
            destination offers your group and members of the local community
            spectacular travel opportunities enriched by the splendors of the
            world. Let our professional, experienced staff handle the details of
            your next group travel program with Aventura World, a valued leader
            in the US group travel marketplace since 1972. Due to constant
            feedback from our valued travelers, our philosophy of travel has
            evolved to encompass “the experience of travel”. No longer is travel
            just about seeing monuments and the local sites. It’s all about
            traveling to spectacular places at a relaxed pace, discovery,
            education, and inspiring interactions. Oh, we will still visit the
            sights and sounds of the region, but we will also meet locals and
            have people-to-people interactions to understand their life,
            culture, social aspects, and economy. We will plan unusual,
            off-the-beaten-track events such as truffle hunting with a family in
            Croatia, discovering a thermal greenhouse in Iceland powered by
            volcanic steam and tasting soup made from their greenhouse tomatoes,
            dropping in at a village pub in Ireland to meet the locals over a
            Guinness, or visiting a family olive plantation in Sicily to learn
            about their production and sample their product. Join us to
            experience the wonders of the world. Aventura World – It’s all about
            the experience.
          </Typography>
        </section>
      </div>
    </>
  )
}

export default About
