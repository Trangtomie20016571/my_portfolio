import React from "react"


import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout =()=>{
    // arrow functions
    return(
        <>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footer />
        </>
    )
}
export default Layout