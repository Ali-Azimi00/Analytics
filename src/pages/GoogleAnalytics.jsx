import React from 'react'
import './analytics.css';
import Grid from '@mui/material/Grid';

import Chart from '../components/chart'



function GA() {

    return (
        <React.Fragment>
            {/* <h1 style={{ textAlign: "center" }}>Google Analytics</h1> */}
            <div className="boxes" style={{ padding: "5%", width: '90%', alignItems: 'flex-end' }} >


                {/* try adding a second Grid container */}
                <Grid container rowSpacing={2} columnSpacing={{ xs: 5, sm: 5, md: 5, lg: 5 }}>
                    <Grid item xs={11} sm={6} md={6} lg={4}>
                        <div className='aCard'>
                            <div>{<Chart type='bar' />}</div>
                        </div>

                    </Grid>
                    <Grid item xs={11} sm={6} md={6} lg={4}>
                        <div className='aCard'>
                            <div>{<Chart type='line' />}</div>
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={4} md={4} lg={4}>
                        <div className='aCard'>
                            <div>{<Chart type='radar' />}</div>
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={4} md={4} lg={4}>
                        <div className='aCard'>
                            <div>{<Chart type='radialBar' />}</div>
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={4} md={4} lg={4}>
                        <div className='aCard'>
                            <div>{<Chart type='scatter' />}</div>
                        </div>
                    </Grid>
                    <Grid item xs={11} sm={4} md={4} lg={4}>
                        <div className='aCard'>
                            <div>{<Chart type='heatmap' />}</div>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
    )
}

export default GA;