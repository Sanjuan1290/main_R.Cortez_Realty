import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/layoutComponents/Layout"

import Home from "./components/home/Home"
import About from "./components/aboutUs/AboutUs"
import Realtors from "./components/realtors/Realtors"
import FAQs from "./components/FAQs/faqs"
import ContactPage from "./components/contact/ContactPage"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/realtors" element={<Realtors />} />
      <Route path="/FAQs" element={<FAQs />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
