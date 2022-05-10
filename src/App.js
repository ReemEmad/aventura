import { Routes, Route } from "react-router-dom"
import AppNav from "./components/AppNav"
import Home from "./Home"
import About from "./About"
import WhyAventura from "./WhyAventura"
import ParentCompany from "./ParentCompany"
import SouthPacific from "./SouthPacific"
import Asia from "./Asia"
import Africa from "./Africa"
import LatinAmerica from "./LatinAmerica"
import USA from "./USA"
import Information from "./Information"
import ContacUs from "./ContacUs"
import Endorsments from "./Endorsments"
import Brochure from "./Brochure"
import Videos from "./Videos"
import Articles from "./Articles"
import "./App.scss"
import Footer from "./components/Footer"
import ProgramRegion from "./ProgramRegion"
import PackageDetails from "./packageDetails"

function App() {
  return (
    <div className="App">
      <AppNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Why-aventura" element={<WhyAventura />} />
          <Route path="parent-company" element={<ParentCompany />} />
          <Route path="programs/:id" element={<ProgramRegion />} />
          <Route path="programs/:regionId/:id" element={<PackageDetails />} />
          {/* <Route path="south-pacific" element={<SouthPacific />} />
          <Route path="asia" element={<Asia />} />
          <Route path="africa" element={<Africa />} />
          <Route path="latin-america" element={<LatinAmerica />} />
          <Route path="usa" element={<USA />} /> */}
          <Route path="videos" element={<Videos />} />
          <Route path="articles" element={<Articles />} />
          <Route path="information" element={<Information />} />
          <Route path="contact-us" element={<ContacUs />} />
          <Route path="endorsements" element={<Endorsments />} />
          <Route path="brochure" element={<Brochure />} />
          <Route path="*" element={<div>404!</div>} />
        </Routes>
        <Footer />
      </AppNav>
    </div>
  )
}

export default App
