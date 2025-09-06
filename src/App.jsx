import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/layoutComponents/Layout"

import Home from "./components/home/Home"
import About from "./components/aboutUs/AboutUs"
import Realtors from "./components/realtors/Realtors"
import FAQs from "./components/FAQs/FAQs_Component"
import ContactPage from "./components/contact/ContactPage"

import Properties from "./components/properties/Properties"
import HighEndProperties from "./components/properties/HighEndProperties"
import TownHomes from './components/properties/TownHomes'

import FarmLotsLayout from "./components/properties/FarmLotsList/FarmLotsLayout"
import CaviteList from "./components/properties/FarmLotsList/Cavite/CaviteList"

import SingleProperty from "./components/SingleProperty"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/realtors" element={<Realtors />} />
      <Route path="/FAQs" element={<FAQs />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/high-end" element={<HighEndProperties />}/>
      <Route path="/townhomes" element={<TownHomes />}/>

      <Route path="/farm-lots" element={<FarmLotsLayout />}>
        <Route path="cavite" element={<CaviteList />}/>
      </Route>

      <Route path="/property/:id" element={<SingleProperty />}/>

    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
