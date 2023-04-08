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
                <div>
                    <Grid container
                        rowSpacing={2}
                        columnSpacing={{ xs: 5, sm: 5, md: 5, lg: 10 }}
                    // style={{ marginBottom: '2%' }}
                    >
                        <Grid item xs={12} sm={12} md={9} lg={6}>
                            <div className='aCard'>
                                <div>{<Chart type='bar' />}</div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={6}>
                            <div className='aCard'
                                style={{ minHeight: '85%' }}
                            >
                                <div>{<Chart type='line' />}</div>
                            </div>
                        </Grid>

                        {/*  */}

                        <Grid item xs={12} sm={12} md={3} lg={4}>
                            <div className='aCard'>
                                <div>{<Chart type='radar' />}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} lg={4}>
                            <div className='aCard'>
                                <div>{<Chart type='radar' />}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className='aCard'>
                                <div>{<Chart type='line' />}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={12}>
                            <div className='aCard'>
                                <div>{<Chart type='line' />}</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GA;