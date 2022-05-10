import React from "react"
import EndorsementCard from "./components/EndorsementCard"
import { Typography } from "@mui/material"

function Endorsments() {
  return (
    <div className="endorsements">
      <div className="endorsements_img"></div>
      <Typography variant="h5" component="div" align="center">
        Endorsements
      </Typography>
      <EndorsementCard />
    </div>
  )
}

export default Endorsments
