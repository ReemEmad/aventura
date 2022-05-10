import React from "react"
import { Typography, Grid } from "@mui/material"
function Videos() {
  return (
    <>
      <div className="videos__bg"></div>
      <div className="videos">
        <Typography variant="h4" component="div" align="center" gutterBottom>
          Videos
          {/* </Typography> */}
          <Grid
            className="videos__grid"
            container
            rowSpacing={{ xs: 2, sm: 2, md: 3 }}
            columnSpacing={{ xs: 3, sm: 2, md: 0 }}
          >
            <Grid item xs={4}>
              <iframe
                width="380"
                height="260"
                src="https://www.youtube.com/embed/ORLVtrXnvfQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                component="div"
                align="left"
                pl="24px"
                gutterBottom
              >
                Best Of The Amalfi Coast & Rome
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <iframe
                width="380"
                height="260"
                src="https://www.youtube.com/embed/ORLVtrXnvfQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                component="div"
                align="left"
                pl="24px"
                gutterBottom
              >
                Budapest, Vienna & Prague
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <iframe
                width="380"
                height="260"
                src="https://www.youtube.com/embed/ORLVtrXnvfQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                component="div"
                align="left"
                pl="24px"
                gutterBottom
              >
                Egypt – Land Of The Pharaohs
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <iframe
                width="380"
                height="260"
                src="https://www.youtube.com/embed/ORLVtrXnvfQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                component="div"
                align="left"
                pl="24px"
                gutterBottom
              >
                Best Of The Amalfi Coast & Rome
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <iframe
                width="380"
                height="260"
                src="https://www.youtube.com/embed/ORLVtrXnvfQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                component="div"
                align="left"
                pl="24px"
                gutterBottom
              >
                Best Of The Amalfi Coast & Rome
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <iframe
                width="380"
                height="260"
                src="https://www.youtube.com/embed/ORLVtrXnvfQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                component="div"
                align="left"
                pl="24px"
                gutterBottom
              >
                Best Of The Amalfi Coast & Rome
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </div>
    </>
  )
}

export default Videos
