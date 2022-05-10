import React from "react"
import { Typography, Grid, TextField, MenuItem, Button } from "@mui/material"

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
function ContacUs() {
  const [currency, setCurrency] = React.useState("EUR")

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  return (
    <>
      <div className="contact_bg"></div>
      <div className="contact">
        <Typography
          component="div"
          variant="h5"
          align="center"
          className="contact__main__header"
          gutterBottom
        >
          Contact Us
        </Typography>
        <section className="contact__flex">
          <div className="contact__left">
            <Typography component="div" variant="h6">
              Write us at
            </Typography>
            {/* <br /> */}
            <Typography component="div" variant="body2">
              {" "}
              Aventura world
              <br /> 250 Moonachie Road
              <br /> Suite 308 <br /> Moonachie, NJ 07074
              <br />
              United States of America
            </Typography>
            <br />
            <Typography component="div" variant="h6">
              Our Office Hours
            </Typography>
            <Typography component="div" variant="body2">
              {" "}
              Monday through Friday - 9:00 AM through 5:00 PM EST
              <br /> Toll Free Number: 888.482.5887 <br />
              Fax Number: 201.228.5240
              <br /> Email: info@aventuraworld.com
            </Typography>
          </div>
          <div className="contact__right">
            <Grid container spacing={2}>
              {" "}
              <Typography
                component="div"
                variant="subtitle2"
                align="left"
                gutterBottom
                px="20px"
              >
                <strong>
                  PLEASE FEEL FREE TO CONTACT US VIA THE INFORMATION PROVIDED OR
                  FILL OUT OUR CONTACT FORM BELOW
                </strong>
              </Typography>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Group Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
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
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Zip Code"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Questions"
                  multiline
                  rows={2}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained">Submit</Button>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContacUs
