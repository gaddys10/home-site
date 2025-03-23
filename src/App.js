import './App.css';

import {Route, Routes, BrowserRouter} from "react-router-dom";
import React, {Suspense, lazy} from 'react';

// import Home from './Pages/Home/Home';
// import ResumeWriting from './Pages/ResumeWriting/ResumeWriting';
// import PhotoSite from './Pages/PhotoSite/PhotoSite';
// import OldSite from './Pages/OldSite/OldSite';
// import OldSiteResume from './Pages/OldSite/OldSiteResume/OldSiteResume';
// import OldSiteBio from './Pages/OldSite/OldSiteBio/OldSiteBio';
// import OldSiteSorry from './Pages/OldSite/OldSiteSorry/OldSiteSorry';

const Home = lazy(() => import('./Pages/Home/Home'));
const ResumeWriting = lazy(() => import('./Pages/ResumeWriting/ResumeWriting'));
const PhotoSite = lazy(() => import('./Pages/PhotoSite/PhotoSite'));
const OldSite = lazy(() => import('./Pages/OldSite/OldSite'));
const OldSiteResume = lazy(() => import('./Pages/OldSite/OldSiteResume/OldSiteResume'));
const OldSiteBio = lazy(() => import('./Pages/OldSite/OldSiteBio/OldSiteBio'));
const OldSiteSorry = lazy(() => import('./Pages/OldSite/OldSiteSorry/OldSiteSorry'))

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/Portfolio/MockResumeWriting" element={ <ResumeWriting/> } />
              <Route path="/Portfolio/MockPhotography" element={ <PhotoSite /> } />
              <Route path="/Portfolio/OldHomeSite" element={ <OldSite /> } />
              <Route path="/Portfolio/OldHomeSite/Resume" element={<OldSiteResume />} />
              <Route path="/Portfolio/OldHomeSite/Bio" element={<OldSiteBio /> } />
              <Route path="/Portfolio/OldHomeSite/Sorry" element={<OldSiteSorry />}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
