import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Menu({ isShowMenu, setShowMenu }) {

  const list = () => (
    <Box
      sx={{ minWidth: 250 }}
      role="presentation"
    >
      <List>
        <ListItem  disablePadding>
          <ListItemButton>
            <ListItemText primary={'Main background:'} />
              <input type="color"></input>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <ListItem  disablePadding>
        <ListItemButton>
        <ListItemText primary={'Table background:'} />
          <input type="color"></input>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem  disablePadding>
        <ListItemButton>
        <ListItemText primary={'Menu background:'} />
          <input type="color"></input>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem  disablePadding>
        <ListItemButton>
        <ListItemText primary={'Menu color:'} />
          <input type="color"></input>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem  disablePadding>
        <ListItemButton>
        <ListItemText primary={'Primary color:'} />
          <input type="color"></input>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem  disablePadding>
        <ListItemButton>
        <ListItemText primary={'Secondary color:'} />
          <input type="color"></input>
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <React.Fragment>
        <Drawer
          anchor={'left'}
          open={isShowMenu}
          onClose={() => setShowMenu(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
  );
}