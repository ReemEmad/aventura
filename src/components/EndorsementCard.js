import React from "react"
import { Card, CardContent, Typography } from "@mui/material"
import { FormatQuote } from "@mui/icons-material"

function EndorsementCard() {
  return (
    <Card sx={{ maxWidth: 345 }} raised>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          By Scott Mertie, TN
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <FormatQuote id="quotes" /> Visiting the Tyrol region of Austria was
          breathtaking. This was truly a trip of a lifetime. Prost!{" "}
          <FormatQuote />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EndorsementCard
