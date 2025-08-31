import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        <main className="h-[500px]">
            
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout