import React from 'react';
import Drawer from "../components/drawerComp";
// import { paperClasses } from "@mui/material/Paper"

function NavBar() {

    return (
        <div className="navBar">
            <Drawer
                variant="persistent"
                sx={{
                    "& .MuiPaper-root": {
                        width: 5
                    }
                }}


            />


            <div style={{ paddingTop: '1%', fontSize: "1.5em", marginLeft: "1rem" }}>
                Google_Analytics
            </div>
        </div>
    )
}

export default NavBar