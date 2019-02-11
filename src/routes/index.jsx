import React from 'react';
import { Switch } from 'react-router-dom';
import { AddNewProduct } from './AddNewProduct';
import { SearchStockXByString } from './SearchStockXByString';
import { ListContainer } from './ListContainer';
// import { ListContainer } from '../views/ListContainer/ListContainer.component';
import Route from './route_component';

export default _ => (
  <Switch>
    {/* <Route patch="/addproduct" exact component={AddNewProduct} /> */}
    <Route patch="/searchStockXByString" exact component={SearchStockXByString} />
    {/* <Route patch="/listContainer" exact component={ListContainer} /> */}
    
  </Switch>
);
