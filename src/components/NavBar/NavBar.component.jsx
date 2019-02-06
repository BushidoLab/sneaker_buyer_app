import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import { styles } from './NavBar.styles';

const NavBar = ({ classes }) => (
  <AppBar>
    <Toolbar>
      <Tabs>
        <Tab label="Add Product" component={Link} to="/addproduct" />
      </Tabs>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(NavBar);
