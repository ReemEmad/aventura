import React, { useState, useEffect } from "react"
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Grid,
  Button,
  CircularProgress,
  Box,
  Alert,
  Snackbar,
} from "@mui/material"
import CountryCard from "./components/CountryCard"
import { useParams } from "react-router-dom"
import { getRegionPackages, getRegion } from "./apis"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function ProgramRegion() {
  const { id } = useParams()
  const [loading, setloading] = useState(false)
  const [filteredData, setfilteredData] = useState([])
  const [filteredSelection, setfilteredSelection] = useState([])
  const [countries, setcountries] = useState([])
  const [cardData, setcardData] = useState([])
  const [error, seterror] = useState()

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    console.log(event.target.value)
    setfilteredData(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    )
    console.log("Card data", cardData)
  }

  const getRegionsData = async () => {
    setloading(true)
    try {
      let { data } = await getRegionPackages(
        "61a62896c91cf8d9fba1e8d7",
        id,
        1,
        100,
      )
      setcardData(data.data)
      setfilteredSelection(data.data)
      setloading(false)
      console.log("fffffffff", data.data)
    } catch (e) {
      setloading(false)
      seterror(e.response.data.Message)
      console.log("e", e.response.status)
      setTimeout(() => {
        seterror(undefined)
      }, 3000)
    }
  }

  const getCountriesData = async () => {
    let { data } = await getRegion(id)
    // id(data.d)
    setcountries(data.data.countriesNames)
    console.log("datasssssss", data)
  }

  useEffect(() => {
    getCountriesData()
    getRegionsData()
  }, [id])

  const filterData = () => {
    let arr = cardData.filter((item) =>
      filteredData.includes(item.packageRegions[0].countryName)
        ? item
        : undefined,
    )
    setfilteredSelection(arr)
  }

  return (
    <div className="program-container">
      <div className="program-container__bgImg"></div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <FormControl sx={{ m: 1, width: 250 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Select Country
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={filteredData}
                onChange={handleChange}
                input={<OutlinedInput label="select country" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {countries.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={filteredData.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
              <Button variant="contained" mt="50" onClick={filterData}>
                Show Programs
              </Button>
            </FormControl>
            {error && (
              <Snackbar open={error} autoHideDuration={3000}>
                <Alert severity="error" variant="filled">
                  {error}
                </Alert>
              </Snackbar>
            )}
          </Grid>
        </Grid>
      </div>
      {!loading ? (
        <div className="program-container__grid">
          <Grid container spacing={2.5}>
            {filteredSelection.length > 0 ? (
              filteredSelection.map((card) => (
                <Grid key={card.id} item xs={4}>
                  <CountryCard
                    name={card.packageName}
                    days={card.days}
                    nights={card.nights}
                    description={card.description}
                    pckgId={card.id}
                    regionId={id}
                  />
                </Grid>
              ))
            ) : (
              <div>No packages in this region yet</div>
            )}
          </Grid>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  )
}

export default ProgramRegion
