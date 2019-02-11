import React from 'react';
import Loadable from 'react-loadable';

export const SearchStockXByString = Loadable({
  loader: _ => import('../views/SearchStockXByString/SearchStockXByString.component'),
  loading: _ => <div>Loading</div>,
});
