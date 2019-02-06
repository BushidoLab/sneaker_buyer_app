import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './AppRoot.styles';
import { NavBar } from '../components';
import Routes from '../routes';

const AppRoot = ({ classes, children }) => (
  <div>
    <div className={classes.root}>
      <NavBar />
    </div>
    <div>
      <Routes />
    </div>
  </div>
);

export default withStyles(styles)(AppRoot);
