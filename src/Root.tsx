import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Main from './pages/Main/Main';
import store from './reducers/configureStore';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#964A4D',
    },
  },
});

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MuiThemeProvider>
    </>
  );
}
