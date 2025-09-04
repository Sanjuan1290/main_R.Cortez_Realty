import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/layoutComponents/Layout"

import Home from "./components/home/Home"
import About from "./components/aboutUs/AboutUs"
import Realtors from "./components/realtors/Realtors"
import FAQs from "./components/FAQs/faqs"
import ContactPage from "./components/contact/ContactPage"

import Properties from "./components/properties/Properties"
import HighEndProperties from "./components/properties/HighEndProperties"
import TownHomes from './components/properties/TownHomes'
import FarmLots from './components/properties/FarmLots'

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
      <Route path="/farm-lots" element={<FarmLots />}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
