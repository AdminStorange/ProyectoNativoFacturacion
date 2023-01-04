import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../context/GlobalStateContext"
import LayoutCC from "./LayoutCC"

const Layout = () => {

    const navigate = useNavigate()

    const handleLogOut = () => {
      localStorage.setItem('isTrustedUser', false)
    }

    return (
      <LayoutCC
      navigate = {navigate}
      handleLogOut = {handleLogOut}
      ></LayoutCC>
    ) 
}

export default Layout