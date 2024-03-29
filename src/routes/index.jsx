import React from 'react';
import { Switch } from 'react-router-dom';
import { AddNewProduct } from './AddNewProduct';
import Route from './route_component';

export default _ => (
  <Switch>
    <Route patch="/addproduct" exact component={AddNewProduct} />
  </Switch>
);
