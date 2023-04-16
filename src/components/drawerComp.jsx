import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';

// import Icon from '@mdi/react';
// import { mdiText } from '@mdi/js';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { logo } from '../assets'
import '../pages/analytics.css'

const TemporaryDrawer = () => {
    const [state, setState] = useState({
        top: false,
        // left: false,
        // bottom: false,
        // right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                // width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                color: 'gray',
                backgroundColor: '#1a1a1a',
                // width: 250,
                height: '100%',
                // maxHeight: "100%",
                backgroundImage: "../assets/polygonPattern.png",
                overflow: 'hidden',

                justifyContent: 'space-evenly'

            }}
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div style={{}}>
                <div>
                    <div className="drawerItem" >
                        <img src={logo} alt="logo" style={{ width: '150px', height: '150px' }} className='logo' />
                        <div style={{
                            marginTop: '5%',
                            marginBottom: '5%'
                        }}>
                            Ali Azimi
                        </div>
                        <div style={{
                            marginTop: '5%',
                            marginBottom: '5%'
                        }}>
                            Full-Stack Developer
                        </div>
                    </div>
                </div>


                <Divider color='#00E396' inset='3em' />

                <List style={{
                    marginTop: ''
                }}>
                    {['Google Analytics', 'Stocks', 'Cyrpto'].map((text, index) => (
                        <ListItem key={text} disablePadding className='aButton'>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider color='#00E396' />


                <div className='drawerItem' >
                    <div style={{
                        marginTop: '5%'
                    }}>
                        Contact
                    </div>
                    <div style={{ fontSize: '14px', marginTop: '10px' }}>
                        azimi-swe@gmail.com
                    </div>
                </div>

            </div>
        </Box>
    );

    return (
        <div>

            <Box
                sx={{
                    display: 'inline-flex',
                    flexWrap: 'wrap',
                    // width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                    color: 'gray',
                    backgroundColor: '#1a1a1a',
                    // width: 250,
                    height: '100%',
                    // maxHeight: "100%",
                    backgroundImage: "../assets/polygonPattern.png",
                    overflow: 'hidden',

                    justifyContent: 'space-evenly'

                }}
            // role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
            >
                <div style={{}}>
                    <div>
                        <div className="drawerItem" >
                            <img src={logo} alt="logo" style={{ width: '150px', height: '150px' }} className='logo' />
                            <div style={{
                                marginTop: '5%',
                                marginBottom: '5%'
                            }}>
                                Ali Azimi
                            </div>
                            <div style={{
                                marginTop: '5%',
                                marginBottom: '5%'
                            }}>
                                Full-Stack Developer
                            </div>
                        </div>
                    </div>


                    <Divider color='#00E396' inset='3em' />

                    <List style={{
                        marginTop: ''
                    }}>
                        {['Google Analytics', 'Stocks', 'Cyrpto'].map((text, index) => (
                            <ListItem key={text} disablePadding className='aButton'>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider color='#00E396' />


                    <div className='drawerItem' >
                        <div style={{
                            marginTop: '5%'
                        }}>
                            Contact
                        </div>
                        <div style={{ fontSize: '14px', marginTop: '10px' }}>
                            azimi-swe@gmail.com
                        </div>
                    </div>

                </div>
            </Box>
            {/* {['left'].map((anchor) => (
                <div key={anchor}>

                    <div onClick={toggleDrawer(anchor, true)}
                        className='button aButton'
                    >
                        <Icon path={mdiText} size={1} />
                    </div>

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))
            } */}
        </div >
    );
}

export default TemporaryDrawer;