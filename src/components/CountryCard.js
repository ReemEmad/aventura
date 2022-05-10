import React from "react"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
} from "@mui/material"
import { Link } from "react-router-dom"

function CountryCard({ pckgId, name, days, nights, description, regionId }) {
  return (
    <>
      <Card sx={{ maxWidth: 455 }} raised>
        <CardHeader title={name} />
        <CardMedia
          component="img"
          height="240"
          image="https://www.aventuraworld.com/MyUpload/022520201957410AWphotoGal850X550austria_1.jpg"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {days} Days/{nights} Nights
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            id="readMore"
            dangerouslySetInnerHTML={{ __html: description }}
          ></Typography>
          <Typography variant="body2" component="div">
            Read More
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            <Link to={`/programs/${regionId}/${pckgId}`}>More Details</Link>
          </Button>
          <Button size="small" variant="contained" color="error">
            Download Flyer
          </Button>
          <Button size="small" variant="contained" color="secondary">
            Request Information
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CountryCard
