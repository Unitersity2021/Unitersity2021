import React from 'react';
import {CssBaseline, Container } from '@material-ui/core';
import Layout from './Layout';



export default function AppStart() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <main>
          <Layout />
        </main>
      </Container>
    </div>
  );
}

