import FarmLots from "../FarmLots"
import { Outlet, useLocation } from "react-router-dom"

const FarmLotsLayout = () => {
    const location = useLocation()

  return (
    <>
        {
            location.pathname !== '/farm-lots' ? '' : <FarmLots />
        }
        <Outlet />
    </>
  )
}

export default FarmLotsLayout