import Header from "./Header"
import Footer from "./Footer"
import { Outlet, useLocation } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import Contact from "./Contact"
import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react" // optional icon

const Layout = () => {
  const location = useLocation()
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
        {location.pathname === "/contact" ? "" : <Contact />}
      </main>
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  )
}

export default Layout
