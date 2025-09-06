import Header from "./Header"
import Footer from "./Footer"
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
import Contact from "./Contact"

const Layout = () => {
  const location = useLocation()
  return (
    <>
        <ScrollToTop />
        <Header />
        <main className="">
          
            <Outlet />
            {
              location.pathname === '/contact' ? '' : <Contact />
            }
        </main>
        <Footer />
    </>   
  )
}

export default Layout