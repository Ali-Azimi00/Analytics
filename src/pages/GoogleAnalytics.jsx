import React from 'react'
import './analytics.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chart from '../components/chart'
// import { CardContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function GA() {

    const wMatch = useMediaQuery('(min-width:600px)');

    console.log('change?', typeof wMatch)




    return (
        <React.Fragment>
            {/* <h1 style={{ textAlign: "center" }}>Google Analytics</h1> */}
            <div className="boxes" style={{ padding: "5%", width: '90%', alignItems: 'flex-end' }} >

                {/* try adding a second Grid container */}
                <div>
                    <Grid container
                        rowSpacing={5}
                        columnSpacing={{ xs: 5, sm: 5, md: 5, lg: 5 }}
                    // style={{ display: 'table', width: '100%' }}
                    >
                        <Grid item xs={12} sm={12} md={9} lg={9}>
                            <div className='aCard'
                            // style={{ minHeight: '2vw', maxHeight: '65%' }}
                            >
                                <div>{<Chart type='bar' />}</div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: "" }}>
                            <Card
                                variant='outline'
                                sx={{
                                    // background: 'transparent',
                                    backgroundColor: `${wMatch ? 'red' : 'blue'}`,
                                    // backgroundColor: 'blue',
                                    //flexWrap 'wrap'fixes {lg}
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: '100%',
                                    // paddingBottom: '40px'
                                }}>
                                <div className=''
                                    style={{ minHeight: '2vw', maxHeight: '40%' }}
                                >
                                    <div>{`${wMatch}`}</div>
                                    <div>{<Chart type='line' />}</div>
                                </div>
                                <div className=''
                                    style={{ minHeight: '2vw', maxHeight: '45%' }}
                                >
                                    <div>{<Chart type='bar' />}</div>
                                </div>
                            </Card>

                        </Grid>

                        {/*  */}

                        <Grid item xs={12} sm={12} md={3} lg={4}>
                            <div className='aCard'
                            >
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
        </React.Fragment >
    )
}

export default GA;