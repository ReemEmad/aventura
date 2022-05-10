import { Typography, TextField, Grid, MenuItem } from "@mui/material"
import React from "react"

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
]
function Information() {
  const [currency, setCurrency] = React.useState("EUR")

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  return (
    <>
      <div className="info_bg"></div>
      <div className="info">
        <Typography
          component="div"
          variant="h5"
          align="center"
          className="info__main__header"
        >
          Request Information
        </Typography>
        <Typography component="div" variant="body1" align="left" px="115px">
          <strong>THANK YOU</strong> for your interest in Aventura World and our
          programs. Please fill out the form below so one of our destination
          experts can process your request and contact you. Thanks again for
          trusting Aventura World with your Travel arrangements.
        </Typography>
        <section className="info__form">
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Group Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={3}></Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField id="outlined-basic" label="City" variant="outlined" />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-select-currency"
                select
                label="State/Province"
                value={currency}
                onChange={handleChange}
                helperText="----Select State----"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Zip Code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Phone No"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
          <Typography
            component="div"
            variant="subtitle1"
            align="left"
            px="50px"
            gutterBottom
            className="info__subtitle"
          >
            In Order To Provide You With An Accurate Quote, All The Trip
            Information Below Is Required.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Program Selected"
                value={currency}
                onChange={handleChange}
                helperText="--Select--"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Preferred Year"
                value={currency}
                onChange={handleChange}
                helperText="--Select Year--"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="outlined-basic"
                label="Departure City"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Question/Comment"
                multiline
                rows={4}
                defaultValue="Please fill in any additional information here such as desired upgrades, extentions, flexibility of dates or any other information that will help in processing your request."
              />
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </section>
      </div>
    </>
  )
}

export default Information
