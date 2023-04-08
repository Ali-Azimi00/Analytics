import React from 'react'
import { Link } from 'react-router-dom';
// import { fadeIn } from '../utils/motion';
// import { motion } from 'framer-motion';
import { logo } from '../assets';
import Icon from '@mdi/react';
import { mdiFinance } from '@mdi/js';





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

                            <button variant="contained" sytle={{ width: '200px' }}>
                                <div>
                                    <Icon path={mdiFinance} size={1} style={{ marginRight: '5%' }} />

                                </div>
                                <div>
                                    Google Analytics
                                </div>
                            </button>
                        </Link>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Welcome;