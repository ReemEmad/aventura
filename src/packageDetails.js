import React, { useState, useEffect } from "react"
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  CircularProgress,
  Skeleton,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import { styled } from "@mui/material/styles"
import PropTypes from "prop-types"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import AppCardOther from "./components/AppCardOther"
import { useParams } from "react-router-dom"
import { getPackageDetails, getRegionPackages } from "./apis"

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

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

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

function PackageDetails() {
  const { regionId, id } = useParams()
  const [value, setValue] = useState(0)
  const [data, setdata] = useState([])
  const [otherProgramsShuffled, setotherProgramsShuffled] = useState([])
  const [otherPrograms, setotherPrograms] = useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const getData = async () => {
    let { data } = await getPackageDetails(id)
    setdata(data.data)
    console.log(data.data)
  }

  const getotherPrograms = async () => {
    let { data } = await getRegionPackages(
      "61a62896c91cf8d9fba1e8d7",
      regionId,
      1,
      100,
    )
    console.log("other programs", data.data)
    setotherPrograms(data.data)
  }

  const shuffleArray = () => {
    let shuffled = otherPrograms.slice(0, 3).sort(() => Math.random() - 0.5)
    setotherProgramsShuffled(shuffled)
  }

  useEffect(() => {
    getData()
    getotherPrograms()
  }, [])

  useEffect(() => {
    shuffleArray()
  }, [otherPrograms])

  return (
    <>
      {/* {arr.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))} */}
      <div className="packageDetails__bgImg"></div>
      {data.id ? (
        <div className="packageDetails">
          <div className="packageDetails__title">
            <Typography component="div" variant="h5" align="left">
              {data.packageName}{" "}
              <span>
                {data.days} days / {data.nights} Nights
              </span>
            </Typography>
          </div>
          <div className="packageDetails__description">
            <Typography component="div" variant="subtitle1" mb={1}>
              <b>
                {data.packageRegions[0].countryName} /{" "}
                {data.packageRegions[0].regionName}{" "}
              </b>
            </Typography>
            <Typography
              component="div"
              variant="subtitle1"
              mb={1}
              color="primary"
            >
              Description
            </Typography>
            <Typography
              component="div"
              variant="body1"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></Typography>
          </div>
          <Box sx={{ width: "70%" }} className="packageDetails__tabs">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Highlights" {...a11yProps(0)} />
                <Tab label="Itinerary" {...a11yProps(1)} />
                <Tab label="Includes" {...a11yProps(2)} />
                <Tab label="Extention" {...a11yProps(3)} />
                <Tab label="Video" {...a11yProps(4)} />
                <Tab label="Photo Gallery" {...a11yProps(5)} />
                <Tab label="Map" {...a11yProps(6)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div dangerouslySetInnerHTML={{ __html: data.highlights }} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {data.itineraryDays.map((item, index) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: item.title !== null ? item.title : undefined,
                      }}
                    />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ul>
                {data.include.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Typography component="div" variant="h5" gutterBottom>
                {data.photos.title}
              </Typography>

              <ImageList variant="quilted" cols={4} rowHeight={121}>
                {data.photos.url.map((item) => (
                  <ImageListItem key={item} cols={2 || 1} rows={2 || 1}>
                    <img
                      {...srcset(item, 121, 2, 2)}
                      alt={item}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              {/* ))
              ) : (
                <Skeleton variant="rectangular" width={250} height={218} />
              )} */}
            </TabPanel>
            <TabPanel value={value} index={6}>
              Item Three dddddd
            </TabPanel>
          </Box>
          <div className="packageDetails__other">
            <Typography component="div" variant="h5" align="center">
              Other Programs
            </Typography>
            <div className="program-container__grid">
              <Grid container spacing={2}>
                {otherPrograms &&
                  otherProgramsShuffled.map((item) => (
                    <Grid key={item.id} item xs={4}>
                      <AppCardOther
                        key={item.id}
                        name={item.packageName}
                        days={item.days}
                        nights={item.nights}
                        description={item.description}
                        id={item.id}
                        packageName={item.packageName}
                        regionId={item.packageRegions[0].regionId}
                      />
                    </Grid>
                  ))}
              </Grid>
            </div>
          </div>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "65px",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  )
}

export default PackageDetails
