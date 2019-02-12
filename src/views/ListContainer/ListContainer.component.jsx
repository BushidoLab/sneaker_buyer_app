import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import { renderToStringWithData } from 'react-apollo';

import { withApollo } from 'react-apollo';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // shoeName: '',
      options: []
    };
    // this.handleClick=this.handleClick.bind(this);
  }

  render(){
    return (
      <div >
      <h1> Your Shoes here</h1>
        <List component="nav">
          <ListItem button>
            <ListItemText 
            primary="your shoe name here" 
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

ListContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withApollo(ListContainer))