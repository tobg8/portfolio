import React, { useRef, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// import Page from 'src/components/Page';
// import Grid1 from 'src/components/Grid1';
// import Grid2 from 'src/components/Grid2';
// import Grid3 from 'src/components/Grid3';

const Page = lazy(() => import('../Page'));
const Grid1 = lazy(() => import('../Grid1'));
const Grid2 = lazy(() => import('../Grid2'));
const Grid3 = lazy(() => import('../Grid3'));

const App = () => {
  const aboutRef = useRef(null);
  const scroll = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const workRef = useRef(null);
  const scrollWork = () => workRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Suspense fallback={(
            <div className="app__loader-container">
              <Loader
                type="Hearts"
                color="#6C9A8B"
                height={100}
                width={100}
              />
              <p style={{ marginTop: '1em' }}>loading scripts and stuff ...</p>
            </div>
          )}
          >
            <Page
              childrens={(
                <Grid1
                  scroll={scroll}
                  scrollWork={scrollWork}
                />
            )}
            />
            <Suspense fallback={<div>Loading</div>}>
              <Page
                childrens={(
                  <Grid2
                    scroll={scroll}
                    aboutRef={aboutRef}
                    scrollWork={scrollWork}
                  />
                )}
              />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
              <Page
                childrens={(
                  <Grid3
                    workRef={workRef}
                  />
              )}
              />
            </Suspense>
          </Suspense>
        </Route>
        <Route exact path="/credits">
          <div>Credits here</div>
        </Route>
      </Switch>

    </div>
  );
};

export default App;
