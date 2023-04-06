import React from 'react'
import './analytics.css';
import Grid from '@mui/material/Grid';



function GA() {

    return (
        <React.Fragment>
            {/* <h1 style={{ textAlign: "center" }}>Google Analytics</h1> */}
            <div className="boxes" style={{ padding: "2%" }} >

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={9}>
                        <div className='aCard'>
                            <div>GeoMap</div>
                        </div>

                    </Grid>
                    <Grid item xs={4} sm={6} md={6} lg={3}>
                        <div className='aCard'>
                            Views
                        </div>
                    </Grid>
                    <Grid item xs={8} sm={4} md={4} lg={3}>
                        <div className='aCard'>
                            OS
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={3}>
                        <div className='aCard'>
                            Browser
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} md={4} lg={6}>
                        <div className='aCard'>
                            Events
                        </div>
                    </Grid>



                </Grid>
            </div>
        </React.Fragment>
    )
}

export default GA;