import React from 'react';
import Loadable from 'react-loadable';

export const ListContainer = Loadable({
  loader: _ => import('../views/ListContainer/ListContainer.component'),
  loading: _ => <div>Loading</div>,
});

