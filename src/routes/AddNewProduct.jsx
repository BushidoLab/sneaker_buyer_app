import React from 'react';
import Loadable from 'react-loadable';

export const AddNewProduct = Loadable({
  loader: _ => import('../views/AddNewProduct/AddNewProduct.component'),
  loading: _ => <div>Loading</div>,
});
