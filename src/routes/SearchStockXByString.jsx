import React from 'react';
import Loadable from 'react-loadable';

export const SearchStockXByString = Loadable({
  // loader: _ => import('../views/AlternateSearchStockXByString/AlternateSearchStockXByString.component'),
  // loader: _ => import('../views/SearchStockXByString/SearchStockXByString.component'),
  loader: _ => import('../views/SearchStockXByString/Downshift.component'),
  loading: _ => <div>Loading</div>,
});
