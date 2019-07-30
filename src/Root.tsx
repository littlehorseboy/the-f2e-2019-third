import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Main from './pages/Main/Main';

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Main />
    </>
  );
}
