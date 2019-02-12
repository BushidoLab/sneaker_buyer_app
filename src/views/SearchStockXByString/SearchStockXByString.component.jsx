import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withApollo, Query } from 'react-apollo';
import { queryStockXByString } from '../../graphql/queries/searchStockXByString'

// FOR NOW MAKE MASSIVE CONTAINER
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Downshift from 'downshift'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function renderComponent() {
  return (
    <List component="nav">
        <ListItem button>
          <ListItemText 
          // key={this.state.shoes}
          primary="my yeezy 2..0"
          />
        </ListItem>
  </List>
  )
}






class SearchStockXByString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeName: '',
      shoes: [{id: ''}],
      dataLoaded: false
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    // console.log(this.state)
  };

  handleClick = async e => {
    // const { shoeName } = this.state.shoeName
    const { client } = this.props;
    console.log(this.state.shoeName);
    let response = await client.query({
      query: queryStockXByString,
      variables: { query: encodeURIComponent(this.state.shoeName) }
    })
    .then((res) => {
      this.setState({shoes: res.data.queryStockXByString.hits, dataLoaded: true})
    })
    console.log(this.state.shoes)
    renderComponent()
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('shoeName')}
          margin="normal"
        />
      <Button variant="contained" className={classes.button} onClick={this.handleClick}>
        Default
      </Button>
      </form>
      
      <List component="nav">
        {this.state.shoes.map(({ shoe }) => (
            <ListItem button>
              <ListItemText 
              key={this.state.shoes}
              primary={shoe}
              />
            </ListItem>
        )) || []}
      </List>

      </div>


    );
  }
}

SearchStockXByString.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withApollo(SearchStockXByString));