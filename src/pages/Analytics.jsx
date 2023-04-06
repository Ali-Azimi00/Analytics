import React from "react";
import GA from "./GoogleAnalytics"
import NavBar from "../components/navBar"


function Analytics() {
    return (
        <div>
            <NavBar></NavBar>
            <GA></GA>
        </div>

    )
}

export default Analytics;