import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Popper,
  Button,
  MenuList,
  ClickAwayListener,
  Grow,
  Stack,
} from "@mui/material"

import { NestedMenuItem, IconMenuItem } from "mui-nested-menu"
import { getRegions } from "../apis"

import MenuIcon from "@mui/icons-material/Menu"
import {
  FlutterDash,
  ArrowDropDown,
  Email,
  LocalPhone,
} from "@mui/icons-material"
import New from "./New"

export default function AppNav({ props, children }) {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [anchorElAbout, setAnchorElAbout] = React.useState(null)
  const [anchorElMedia, setAnchorElMedia] = React.useState(null)
  const [anchorElPrograms, setAnchorElPrograms] = React.useState(null)
  const openAbout = Boolean(anchorElAbout)
  const openMedia = Boolean(anchorElMedia)
  const openPrograms = Boolean(anchorElPrograms)

  const [data, setdata] = useState([])
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClickAbout = (event) => setAnchorElAbout(event.currentTarget)
  const handleClickPrograms = (event) =>
    setAnchorElPrograms(event.currentTarget)
  const handleClickMedia = (event) => setAnchorElMedia(event.currentTarget)
  const handleCloseAbout = () => setAnchorElAbout(null)
  const handleClosePrograms = () => setAnchorElPrograms(null)
  const handleCloseMedia = () => setAnchorElMedia(null)

  const getData = async () => {
    // let { data } = await getRegions("61d57f59cd155a856c9d4846", 1, 100)
    let { data } = await getRegions("61a62896c91cf8d9fba1e8d7", 1, 100)
    setdata(data.data)
    console.log("data", data.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const pages = [
    { name: "Home", path: "/" },
    { name: "About US", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Endorsements", path: "/endorsements" },
    { name: "Brochure", path: "/brochure" },
    { name: "Media", path: "/media" },
    { name: "Request Information", path: "information" },
    { name: "Contact Us", path: "/contact" },
  ]

  function ElevationScroll(props) {
    const { children, window } = props
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{ background: "#fff" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 0.5, display: { xs: "none", md: "flex" } }}
              >
                <Link to="/">
                  <img
                    src="https://www.aventuraworld.com/themes/en/img/logo.png"
                    alt="logo"
                    width="200"
                    height="60"
                  />
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  // open="false"
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <Link to={page.path}>
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                  <Box sx={{ flexGrow: 0, color: "#124b9c", fontSize: "13px" }}>
                    <Email sx={{ mb: -1, color: "#1F93C9" }} />{" "}
                    info@aventuraworld.com{"       "}
                    <LocalPhone sx={{ mb: -1, color: "#1F93C9" }} />{" "}
                    888.482.5887
                  </Box>
                </Menu>
              </Box>
              <Box
                sx={{
                  flexGrow: 0.75,
                  display: { xs: "none", md: "flex" },
                  ml: "45px",
                }}
              >
                <Link to="/">
                  <Button size="small" variant="text">
                    Home
                  </Button>
                </Link>
                <div>
                  <Button
                    variant="text"
                    onClick={handleClickAbout}
                    endIcon={<ArrowDropDown />}
                    size="small"
                    // ref={anchorElAbout}
                    // id="composition-button"
                    // aria-haspopup="true"
                    // aria-describedby={id}
                    // variant="contained"
                    // onClick={handleClick}
                  >
                    About Us
                  </Button>

                  <Menu
                    anchorEl={anchorElAbout}
                    open={openAbout}
                    onClose={handleCloseAbout}
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 6,
                        ml: 27.5,
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    anchorOrigin={{ horizontal: "left", vertical: "top" }}
                  >
                    <Link to="/about">
                      <MenuItem onClick={handleCloseAbout}>
                        Who are we?
                      </MenuItem>
                    </Link>
                    <Link to="/why-aventura">
                      <MenuItem onClick={handleCloseAbout}>
                        Why Aventura World?
                      </MenuItem>
                    </Link>
                    <Link to="/parent-company">
                      <MenuItem onClick={handleCloseAbout}>
                        Our Parent Company
                      </MenuItem>
                    </Link>
                  </Menu>
                </div>
                <Button
                  size="small"
                  variant="text"
                  onClick={handleClickPrograms}
                  endIcon={<ArrowDropDown />}
                >
                  Programs
                </Button>
                <Menu
                  anchorEl={anchorElPrograms}
                  open={openPrograms}
                  onClose={handleClosePrograms}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 6,
                      ml: "26%",
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  {data.map((item) => (
                    <Link to={`/programs/${item.id}`}>
                      <MenuItem onClick={handleClosePrograms}>
                        {item.name}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
                <Link to="/endorsements">
                  <Button size="small" variant="text">
                    Endorsements
                  </Button>
                </Link>
                <Link to="/brochure">
                  <Button size="small" variant="text">
                    Brochure
                  </Button>
                </Link>
                <Button
                  size="small"
                  onClick={handleClickMedia}
                  variant="text"
                  endIcon={<ArrowDropDown />}
                >
                  Media
                </Button>
                <Menu
                  anchorEl={anchorElMedia}
                  open={openMedia}
                  onClose={handleCloseMedia}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 6,
                      ml: "46.5%",
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <Link to="/videos">
                    <MenuItem onClick={handleCloseMedia}>Videos</MenuItem>
                  </Link>
                  <Link to="articles">
                    <MenuItem onClick={handleCloseMedia}>
                      Helpful Articles
                    </MenuItem>
                  </Link>
                </Menu>
                <Link to="/information">
                  <Button size="small" variant="text">
                    Request Information
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button size="small" variant="text">
                    Contact US
                  </Button>
                </Link>
                {/* <Link to="/contact-us">
                  <Button>
                    <Email sx={{ mb: -1, color: "#1F93C9" }} />{" "}
                    info@aventuraworld.com
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button>
                    <LocalPhone sx={{ mb: -1, color: "#1F93C9" }} />{" "}
                    888.482.5887
                  </Button>
                </Link> */}
              </Box>
              {/* <Box sx={{ flexGrow: 0, color: "#124b9c", fontSize: "13px" }}> */}
              {"       "}
              {/* </Box> */}
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box sx={{ mt: "1%", position: "relative", minHeight: "100vh" }}>
        {children}
      </Box>
    </React.Fragment>
  )
}
