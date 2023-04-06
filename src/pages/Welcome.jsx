import React from 'react'
import { Link } from 'react-router-dom';
// import { fadeIn } from '../utils/motion';
// import { motion } from 'framer-motion';
import { logo } from '../assets';



function Welcome() {

    return (
        <React.Fragment >
            <div className="landing">
                <div className='vCenter'>
                    <img src={logo} alt="logo" className='logo react'></img>
                    <h2 style={{ marginBottom: "0" }}>Welcome to my </h2>
                    <h2 style={{ marginTop: "0" }}>Analytics Page</h2>

                    {/* Buttons */}
                    <div>
                        <Link to="/GA">
                            <button variant="contained">Google Analytics</button>
                        </Link>
                    </div>


                </div>

            </div>
        </React.Fragment>
    )
}

export default Welcome;