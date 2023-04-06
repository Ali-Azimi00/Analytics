import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
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
                backgroundColor: '#1a1a1a'

            }}
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div
                className="logo"
                style={{ paddingLeft: '30%', paddingTop: '10%', marginBottom: '5%', width: '100px', height: '100px' }}
            >
                <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '15%' }}>
                <div>Ali Azimi</div>
                <div>Full Stack Developer</div>
            </div>


            {/* <Divider /> */}


            <List style={{ marginTop: '58%' }}>
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

            <div className='center'>
                Contact
            </div>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button onClick={toggleDrawer(anchor, true)}
                        style={{ color: 'red', borderWidth: '0', borderRadius: '0' }}
                    > =icon= </button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}