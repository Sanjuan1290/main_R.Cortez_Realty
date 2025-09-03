import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"

const Layout = () => {
  return (
    <>
        <ScrollToTop />
        <Header />
        <main className="">
            
            <Outlet />
        </main>
        <Footer />
    </>   
  )
}

export default Layout