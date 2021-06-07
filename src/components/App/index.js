// == Import npm
import React, { useRef } from 'react';
import './styles.scss';
import Page from 'src/components/Page';
import Grid1 from 'src/components/Grid1';
import Grid2 from 'src/components/Grid2';
import Grid3 from 'src/components/Grid3';
// == Import

// == Composant
const App = () => {
  const aboutRef = useRef(null);
  const scroll = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const workRef = useRef(null);
  const scrollWork = () => workRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="app">
      <Page
        childrens={(
          <Grid1
            scroll={scroll}
            scrollWork={scrollWork}
          />
        )}
      />
      <Page childrens={<Grid2 scroll={scroll} aboutRef={aboutRef} scrollWork={scrollWork} />} />
      <Page childrens={<Grid3 workRef={workRef} />} />
    </div>
  );
};
// == Export
export default App;
