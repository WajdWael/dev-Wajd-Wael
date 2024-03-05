import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./Navbar";

const Layout = () => {
    return <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
}
export default Layout;