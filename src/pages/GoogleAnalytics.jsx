import React from 'react'
import './analytics.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chart from '../components/chart'
// import { CardContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const GA = () => {

    const wMatch = useMediaQuery('(min-width:600px)');

    // console.log('change?', typeof wMatch)

    const cardTheme = {
        background: 'transparent',

        display: 'flex',
        flexWrap: 'wrap',
        alignItems: "center",

        width: '100%',
        height: '100%',
        borderRadius: '15px',
    }




    return (
        <React.Fragment>
            {/* <h1 style={{ textAlign: "center" }}>Google Analytics</h1> */}
            <div className="boxes" style={{ padding: "5%", width: '90%', alignItems: 'flex-end' }} >

                {/* try adding a second Grid container */}
                <div>
                    <Grid container
                        rowSpacing={{ xs: 5, sm: 5, md: 5, lg: 5 }}
                        columnSpacing={{ xs: 5, sm: 5, md: 5, lg: 5 }}
                    >
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <Card sx={{ background: 'transparent' }}>
                                <div className=''>
                                    <div style={{ width: ' 70%' }}>
                                        {<Chart type='bar' />}
                                    </div>
                                </div>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: "" }}>
                            <Card
                                sx={{
                                    theme: cardTheme,
                                    background: 'transparent',
                                    backgroundColor: `${wMatch ? '#00AA63' : 'blue'}`,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: "center",
                                    justifyContent: 'space-evenly',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '15px',
                                    boxShadow: '0px 0px 20px 1px #1a1a1a inset',
                                }}>

                                <div>
                                    {<Chart type='line' />}
                                </div>

                                <div>
                                    {<Chart type='bar' />}
                                </div>

                            </Card>
                        </Grid>

                        {/*  */}


                        <Grid item xs={12} sm={12} md={3} lg={4}>
                            <Card sx={cardTheme}>
                                <div className='aCard'>
                                    <div>{<Chart type='radar' />}</div>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={9} lg={4}>
                            <Card sx={cardTheme}>
                                <div className='aCard'>
                                    <div>{<Chart type='radar' />}</div>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card sx={cardTheme}>
                                <div className='aCard'>
                                    <div>{<Chart type='line' />}</div>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={12}>
                            <Card sx={cardTheme}>
                                <div className='aCard'>
                                    <div>{<Chart type='line' />}</div>
                                </div>
                            </Card>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </React.Fragment >
    )
}

export default GA;