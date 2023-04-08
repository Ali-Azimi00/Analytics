import React from "react";
import GA from "./GoogleAnalytics"
import NavBar from "../components/navBar"


function Analytics() {
    return (
        <div>

            <NavBar></NavBar>

            <div style={{ marginTop: '80px' }} >
                <GA></GA>
            </div>
        </div>

    )
}

export default Analytics;