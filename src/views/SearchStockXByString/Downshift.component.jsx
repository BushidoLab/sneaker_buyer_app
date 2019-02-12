import React from 'react'
import {render} from 'react-dom'
import Downshift from 'downshift'
import { withApollo, Query } from 'react-apollo';
import { queryStockXByString } from '../../graphql/queries/searchStockXByString'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';



const items = [
  {value: 'apple'},
  {value: 'pear'},
  {value: 'orange'},
  {value: 'grape'},
  {value: 'banana'},
]

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          shoeName: '',
          shoes: [{id: ''}],
          dataLoaded: false
        };
        this.handleChange=this.handleChange.bind(this);
      }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
        this.makeApiCall()
        // console.log(this.state.shoes[0].thumbnail_url);
    };

    makeApiCall = async e => {
        const { client } = this.props;
        let response = await client.query({
            query: queryStockXByString,
            variables: { query: encodeURIComponent(this.state.shoeName) }
        })
        .then((res) => {
            this.setState({shoes: res.data.queryStockXByString.hits, dataLoaded: true})
        })
    }

    render() {
        // const shoes = {this.state}
        return(
        <Downshift
          onChange={this.handleChange('shoeName')}
          itemToString={item => (item ? item.value : '')}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <div>
              <label {...getLabelProps()}>Enter a fruit</label>
              <input {...getInputProps({onChange: this.handleChange('shoeName')})} />
              {/* <ul {...getMenuProps()}> */}
              <List {...getMenuProps()}></List>
                {isOpen
                  ? this.state.shoes
                      /* .filter(item => !inputValue || item.value.includes(inputValue)) */

                      .map((item, index) => (
                        <ListItem
                          {...getItemProps({
                            key: item.value,
                            index,
                            item,
                            style: {
                              backgroundColor:
                                highlightedIndex === index ? 'lightgray' : 'white',
                              fontWeight: selectedItem === item ? 'bold' : 'normal',
                            },
                          })}
                        >
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.thumbnail_url} />
                        </ListItemAvatar>
                        <ListItemText>
                          {item.name}
                        </ListItemText>
                        </ListItem>

                      ))
                  : null}
                  <List />
              {/* </ul> */}
            </div>
          )}
        </Downshift>
        )

    }
    
}

export default (withApollo(AutoComplete));