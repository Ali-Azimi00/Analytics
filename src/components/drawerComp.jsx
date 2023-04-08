import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';

import Icon from '@mdi/react';
import { mdiText } from '@mdi/js';

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

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
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
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                color: 'white',
                backgroundColor: '#1a1a1a',
                // width: 250,
                height: 800,
                // maxHeight: "100%",
                backgroundImage: "../assets/polygonPattern.png",

            }}
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div>
                <div className="drawerItem" >
                    <img src={logo} alt="logo" style={{ width: '150px', height: '150px' }} />
                    <div style={{ marginTop: '5%' }}>
                        Ali Azimi
                    </div>
                    <div>
                        Full-Stack
                    </div>
                </div>
            </div>


            <Divider style={{ color: 'white' }} />

            <List style={{ marginTop: '10%' }}>
                {['Google Analytics', 'Stocks', 'Cyrpto'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <div className='drawerItem' >
                <div style={{ marginTop: '5%' }}>
                    Contact
                </div>
                <div style={{ fontSize: '14px', marginTop: '10px' }}>
                    azimi-swe@gmail.com
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <div onClick={toggleDrawer(anchor, true)}
                        className='button'
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
                </React.Fragment>
            ))
            }
        </div >
    );
}