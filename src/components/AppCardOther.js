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

function AppCardOther({ pckgId, name, days, nights, packageName }) {
  return (
    <>
      <Card sx={{ maxWidth: 370 }} raised>
        <CardHeader title={name} />
        <CardMedia
          component="img"
          height="240"
          image="https://www.aventuraworld.com/MyUpload/022520201957410AWphotoGal850X550austria_1.jpg"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {packageName}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            align="center"
          >
            {days} Days/{nights} Nights
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{ margin: "auto" }}>
            <Button size="small" variant="contained">
              <Link to={`/programs/${pckgId}`}>Read More</Link>
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  )
}

export default AppCardOther
