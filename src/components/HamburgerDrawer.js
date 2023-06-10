import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import categories  from '../data/category';



export default function SwipeableTemporaryDrawer({setCategory}) {
  const [state, setState] = React.useState({
  left: false,
    
  });

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'light' : 'dark',
        },
      }),
    [prefersDarkMode],
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
       <ListItemText style={{marginLeft:12}}>Categories</ListItemText>
    </List>
        <Divider />
      <List>
        {categories.map((text) => (
          <ListItem key={text} disablePadding onClick={()=>setCategory(text)}>
            <ListItemButton>
              <ListItemText primary={text} style={{paddingLeft :18}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
    <ThemeProvider theme={theme}>
      <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{marginTop:12, marginLeft:5, fontSize:30, color:"darkblue"}}/>
          </Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
     </ThemeProvider>
    </div>
  );
}
