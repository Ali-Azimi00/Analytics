import React from 'react';
// import Drawer from "../components/drawerComp";
import Drawer from "./drawerComp";
// import { paperClasses } from "@mui/material/Paper"

const NavBar = () => {

    return (
        <div className="navBar">

            <div style={{ paddingTop: '.8%' }}>
                <Drawer
                />
            </div>


            <div style={{ paddingTop: '1%', fontSize: "1.5em", marginLeft: "1rem" }}>
                Google_Analytics
            </div>
        </div>
    )
}

export default NavBar