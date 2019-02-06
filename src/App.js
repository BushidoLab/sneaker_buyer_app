import React from 'react';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ApolloClient from './graphql/ApolloClient';
import AppRoot from './views/AppRoot';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: 'jss-insertion-point',
});
const AppTheme = createMuiTheme({ palette: { type: 'dark' } });

const App = () => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <ApolloProvider client={ApolloClient}>
      <MuiThemeProvider>
        <Router>
          <Switch>
            <AppRoot />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </ApolloProvider>
  </JssProvider>
);

export default App;
