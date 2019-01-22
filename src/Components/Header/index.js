import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InfoButtons from '../InfoButtons';


function Header(props) {
  return (
    <div >
      <AppBar position="static">
        <Toolbar className='flex justify-between'>
          <Typography variant="h6" color="inherit" >
            File Parser
          </Typography>
         <InfoButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
