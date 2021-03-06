import React, {
  useRef, Suspense, lazy, useState, useEffect,
} from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Credits from 'src/components/Credits';
import NotFound from 'src/components/404';
// import Page from 'src/components/Page';
// import Grid1 from 'src/components/Grid1';
// import Grid2 from 'src/components/Grid2';
// import Grid3 from 'src/components/Grid3';

const Page = lazy(() => import('../Page'));
const Grid1 = lazy(() => import('../Grid1'));
const Grid2 = lazy(() => import('../Grid2'));
const Grid3 = lazy(() => import('../Grid3'));
const ProgressBar = lazy(() => import('../ProgressBar'));

const App = () => {
  const aboutRef = useRef(null);
  const scroll = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const workRef = useRef(null);
  const scrollWork = () => workRef.current.scrollIntoView({ behavior: 'smooth' });

  const creditsRef = useRef(null);
  const scrollCredits = () => creditsRef.current.scrollIntoView({ behavior: 'smooth' });

  const [progress, setProgress] = useState(0);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const windowHeightPx = document.documentElement.scrollHeight
    - document.documentElement.clientHeight;
    const scrolled = `${scrollPx / windowHeightPx * 100}`;

    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollProgress);

    return () => window.removeEventListener('scroll', scrollProgress);
  });

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          {/* <div className="progress-container" style={progressContainerStyle}>
            <div className="progress-bar" style={progressBarStyle} />
          </div> */}
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
            <ProgressBar height={progress.toString()} />
            <Page
              childrens={(
                <Grid1
                  scroll={scroll}
                  scrollWork={scrollWork}
                  scrollCredits={scrollCredits}
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
                    scrollCredits={scrollCredits}
                  />
                )}
              />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
              <Page
                childrens={(
                  <Grid3
                    workRef={workRef}
                    creditsRef={creditsRef}
                    scrollCredits={scrollCredits}
                  />
              )}
              />
            </Suspense>
          </Suspense>
        </Route>
        <Route exact path="/credits">
          <Credits />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
