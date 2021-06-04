// == Import npm
import React from 'react';
import './styles.scss';
import Page from 'src/components/Page';
import Grid1 from 'src/components/Grid1';
import Grid2 from 'src/components/Grid2';
import Grid3 from 'src/components/Grid3';
// == Import

// == Composant
const App = () => (
  <div className="app">
    <Page childrens={<Grid1 />} />
    <Page childrens={<Grid2 />} />
    <Page childrens={<Grid2 />} />
  </div>
);

// == Export
export default App;
