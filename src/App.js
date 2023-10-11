import './App.css';
import Home from './Pages/Home/Home';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import React from 'react';
import ResumeWriting from './Pages/ResumeWriting/ResumeWriting';
import PhotoSite from './Pages/PhotoSite/PhotoSite';
import OldSite from './Pages/OldSite/OldSite';
import OldSiteResume from './Pages/OldSite/OldSiteResume/OldSiteResume';
import OldSiteBio from './Pages/OldSite/OldSiteBio/OldSiteBio';
import OldSiteSorry from './Pages/OldSite/OldSiteSorry/OldSiteSorry';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/Portfolio/MockResumeWriting" element={ <ResumeWriting/> } />
            <Route path="/Portfolio/MockPhotography" element={ <PhotoSite /> } />
            <Route path="/Portfolio/OldHomeSite" element={ <OldSite /> } />
            <Route path="/Portfolio/OldHomeSite/Resume" element={<OldSiteResume />} />
            <Route path="/Portfolio/OldHomeSite/Bio" element={<OldSiteBio /> } />
            <Route path="/Portfolio/OldHomeSite/Sorry" element={<OldSiteSorry />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
