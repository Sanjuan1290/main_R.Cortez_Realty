import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
import Contact from "./Contact"

const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <Header />
        <main className="">
          
            <Outlet />
            <Contact />
        </main>
        <Footer />
    </>   
  )
}

export default Layout