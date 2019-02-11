import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withApollo } from 'react-apollo';
import { queryStockXByString } from '../../graphql/queries/searchStockXByString'


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


class SearchStockXByString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeName: '',
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    // console.log(this.state)
  };

  handleClick = async e => {
    const { shoeName } = this.state
    const { client } = this.props;
    // console.log(this.state);
    let response = await client.query({
      query: queryStockXByString,
      variables: { query: shoeName }
    })
    console.log(response.data)
  }

  render() {
    const { classes } = this.props;

    return (
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
    );
  }
}

SearchStockXByString.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withApollo(SearchStockXByString));