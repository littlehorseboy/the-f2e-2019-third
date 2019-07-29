import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <div data-testid="root-test">test</div>
    </>
  );
}
