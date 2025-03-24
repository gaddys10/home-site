import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import TheGround from '../../Components/Home/TheGround/TheGround';
import Tree from '../../Components/Home/Tree/Tree';
import Character from '../../Components/Home/Character/Character';
import Shark from '../../Components/Home/Shark/Shark';
import Wrapper from '../../Components/Home/Wrapper/Wrapper';
import Flower from '../../Components/Home/Flower/Flower';
import Bird from '../../Components/Home/Bird/Bird';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    const [state, setState] = useState({
        showResumes: false,
        showPortfolio: false,
        showArt: false,
        showMocks: false,
        showPrototypes: false,
        showGraphics: false,
        showGraphicCategories: false,
        showPrototypeCategories: false,
        showLogos: false,
        showResponsive: false,
        showFeature: false,
        showIPad: false,
        showInit: false
    });

    const toggleState = (key) => {
        setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
    };

    const setTrue = (keysTrue = [], keysFalse = []) => {
        setState((prevState) => {
            const newState = { ...prevState };
            keysTrue.forEach(key => newState[key] = true);
            keysFalse.forEach(key => newState[key] = false);
            return newState;
        });
    };
    
    const closePortfolio = () => setTrue([], [
        'showArt', 'showPortfolio', 'showGraphics', 'showMocks', 'showPrototypes',
        'showGraphicCategories', 'showPrototypeCategories', 'showLogos',
        'showResponsive', 'showFeature', 'showIPad', 'showResumes', 'showInit'
    ]);
    
    const turnOffPages = () => {
        if (state.showGraphics || state.showLogos) {
            setTrue(['showGraphicCategories'], ['showGraphics', 'showLogos']);
        } else if (state.showResponsive || state.showFeature || state.showIPad || state.showInit) {
            setTrue(['showPrototypeCategories'], ['showResponsive', 'showFeature', 'showIPad', 'showInit']);
        } else if (state.showPrototypes) {
            setTrue(['showPrototypeCategories'], ['showPrototypes']);
        } else {
            setTrue(['showPortfolio'], [
            'showArt', 'showGraphics', 'showMocks', 'showPrototypes',
            'showGraphicCategories', 'showPrototypeCategories', 'showLogos',
            'showResponsive', 'showFeature', 'showIPad', 'showResumes', 'showInit'
            ]);
        }
    };

    return (
        <>
            <TheGround /><Tree /><Character /><Shark /><Wrapper /><Flower /><Bird />
            <div className = "leaf"></div>
            <div id = "sky"></div>
            <div id = "ground_container"></div>
            <div className= "shadow3"> </div>
            <div className= "shadow4"> </div>
            <div className='shadow6'></div>
            <div className='shadow7'></div>
            <div className='shadow8'></div>
            <div className='shadow9'></div>
            <div className='shadow10'></div>
            <div className='shadow11'></div>
            <div className='shadow12'></div>
            <div className='shadow13'></div>
            <div className='shadow14'></div>
            <div className='shadow15'></div>
            <div className='shadow16'></div>
            <div className='shadow18'></div>
            <div className= "birdShadow"></div>
            <div id = "character_container"></div>
            <div id = "tree_container"></div>
            <div className= "rock1">
                <div className= "rock1highlight"></div>
            </div>
            <div className= "rock2">
                <div className= "rock2highlight"></div>
            </div>
            <div className= "rock3">
                <div className= "rock3highlight"></div>
            </div>
            <div className= "rock4">
                <div className= "rock4highlight"></div>
            </div>
            <div className= "rock5">
                <div className= "rock5highlight"></div>
            </div>
            <div className= "rock6">
                <div className= "rock6highlight"></div>
            </div>
            <div className= "rock7">
                <div className= "rock7highlight"></div>
            </div>
            <div className= "rock8">
                <div className= "rock8highlight"></div>
            </div>
            <div className= "rock9">
                <div className= "rock9highlight"></div>
            </div>
            <div className= "rock10">
                <div className= "rock10highlight"></div>
            </div>
            <div className="fallen-apple"></div>
            <div className="fallen-apple2"></div>
            <div className='fallen-leaf'></div>
            <div className='fallen-leaf2'></div>
            <div className='fallen-leaf3'></div>
            <div id = "flower_container"></div>
            <div id = "bird_container"></div>
            <div className= "cloud1"> 
                <div className= "puff1"></div>
                <div className= "puff2"></div>
                <div className= "puff3"></div>
                <div className= "puff4"></div>
            </div>
            <div className= "cloud2">
                <div className= "puff1a"></div>
                <div className= "puff2a"></div>
                <div className= "puff3a"></div>
                <div className= "puff4a"></div>
            </div>  
            <div className= "cloud3"> 
                <div className= "puff1"></div>
                <div className= "puff2"></div>
                <div className= "puff3"></div>
                <div className= "puff4"></div>
            </div>
            <div className= "cloud4"> 
                <div className= "puff1"></div>
                <div className= "puff3"></div>
                <div className= "puff4"></div>
                <div className= "puff2"></div>
            </div>
            <div className= "cloud5">
                <div className= "puff1a"></div>
                <div className= "puff2a"></div>
                <div className= "puff3a"></div>

                <div className= "puff4a"></div>
            </div>  
            <div className= "cloud6">
                <div className= "puff1a"></div>
                <div className= "puff2a"></div>
                <div className= "puff3a"></div>
                <div className= "puff4a"></div>
            </div>  
            <div className= "cloud7"></div>
            <div className= "cloud8"></div>
            <div className= "cloud9"></div>
            <div className= "cloud10"></div>
            <div className= "cloud11"></div>
            <div className= "cloud12"></div>

            {state.showPortfolio && (
                <div className='portfolioContainer'>
                    <div className='portfolioHeader'>
                        {
                            [
                                state.showArt,
                                state.showGraphics,
                                state.showMocks,
                                state.showPrototypes,
                                state.showGraphics,
                                state.showGraphicCategories,
                                state.showPrototypeCategories,
                                state.showLogos,
                                state.showResponsive,
                                state.showFeature,
                                state.showIPad,
                                state.showInit
                            ].some(state => state) &&
                                <div className='back-box' onClick={turnOffPages}>
                                    <FontAwesomeIcon icon={faLeftLong} className='back-arrow' onClick={turnOffPages} />
                                </div>
                        }
                        
                        {
                            // Portfolio splash
                            !state.showArt && 
                            !state.showGraphics && 
                            !state.showMocks && 
                            !state.showPrototypes &&
                            !state.showGraphics &&
                            !state.showGraphicCategories &&
                            !state.showPrototypeCategories &&
                            !state.showLogos &&
                            !state.showInit &&
                            !state.showResponsive &&
                            !state.showFeature &&
                            !state.showIPad &&
                                <p className='portfolioTitle' >Portfolio</p>
                        }
                        {
                            //Art Page
                            state.showArt && 
                                <p className='portfolioTitle' >Art</p>
                        }
                        {
                            //Prototype Categories
                            state.showPrototypeCategories &&
                                <p className='portfolioTitle' >Prototypes</p>
                        }

                        {
                            //Graphic design categories
                            state.showGraphicCategories &&
                                <p className='portfolioTitle' >Design Types</p>
                        }

                        {
                            //Graphic Designs page
                            state.showGraphics && 
                                <p className='portfolioTitle' >Graphic Designs</p>
                        }
                        {
                            //Logo design page
                            state.showLogos &&
                                <p className='portfolioTitle' >Logo Designs</p>
                        }
                        {
                            //Mock websites page
                            state.showMocks && 
                                <p className='portfolioTitle' >Mock Websites</p>
                        }
                        {
                            //Responsive Mobile Design
                            state.showResponsive &&
                                <p className='portfolioTitle' >Responsive Mobile Login</p>
                        }
                        {
                            //feature walkthrough
                            state.showFeature && 
                            <p className='portfolioTitle' >Feature Walkthrough Prototypes</p>
                        }
                        {
                            //iPad feature walkthrough
                            state.showIPad &&
                                <p className='portfolioTitle' >Tablet Feature Prototypes</p>
                        }
                        {
                            //iPad feature walkthrough
                            state.showInit &&
                                <p className='portfolioTitle' >iPad Feature Walkthrough</p>
                        }
                        {
                            //Initial prototypes walkthrough
                            state.showInit &&
                                <p className='portfolioTitle' >Initial Product Prototypes</p>
                        }
                        <p className='portfolioClose' onClick={closePortfolio}><span className='xx'>X</span></p>
                    </div>
                    <div className='portfolioBody'>
                        {
                            // Portfolio splash
                            !state.showArt && 
                            !state.showGraphics && 
                            !state.showMocks && 
                            !state.showPrototypes &&
                            !state.showGraphics &&
                            !state.showGraphicCategories &&
                            !state.showPrototypeCategories &&
                            !state.showLogos &&
                            !state.showResponsive &&
                            !state.showFeature &&
                            !state.showIPad &&
                            !state.showInit &&
                                <>
                                    <div onClick={() => setTrue(['showArt'])} className='art-box portfolio-body-box'>
                                        <p className='art-box-title'>Art</p>
                                    </div>

                                    <div onClick={() => setTrue(['showPrototypeCategories'])} className='prototype-box portfolio-body-box'>
                                        <p className='prototype-box-title'>Prototypes</p>
                                    </div>

                                    <div onClick={() => setTrue(['showGraphicCategories'])} className='graphic-box portfolio-body-box'>
                                        <p className='graphics-box-title'>Graphics</p>
                                    </div>

                                    <div onClick={() => setTrue(['showMocks'])} className='mock-box portfolio-body-box'>
                                        <p className='mock-box-title'>Mock Websites</p>
                                    </div>
                                </>
                        }
                        {
                            //Art Page
                            state.showArt && 
                                <>
                                    {/* <div className='imageContainer'> */}
                                        <img className="portfolio-img art-1" src="/ActualArt/IMG_0339.jpeg" onClick={() => window.location.href = "/ActualArt/IMG_0339.jpeg"} />
                                        <img className="portfolio-img art-2" src="/ActualArt/IMG_0346.jpeg" onClick={() => window.location.href = "/ActualArt/IMG_0346.jpeg"}/>
                                        <img className="portfolio-img art-3" src="/ActualArt/IMG_0347.jpeg" onClick={() => window.location.href = "/ActualArt/IMG_0347.jpeg"}/>
                                    {/* </div> */}
                                </>
                        }
                        {
                            //Prototype Categories
                            state.showPrototypeCategories &&
                                //Prototypes
                                <>
                                    <div className='art-box portfolio-body-box' onClick={() => setTrue(['showResponsive'], ['showPrototypeCategories'])}>
                                        <p className='art-box-title prototype-title-1'>Responsive Mobile Login</p>
                                    </div>

                                    {/* <div className='prototype-box portfolio-body-box' onClick={this.turnOnFeature}>
                                        <p className='prototype-box-title'> Feature Walkthrough </p>
                                    </div> */}

                                    <div className='graphic-box portfolio-body-box' onClick={() => setTrue(['showIPad'], ['showPrototypeCategories'])}>
                                        <p className='graphics-box-title prototype-title-2'>iPad Feature Walkthrough</p>
                                    </div>

                                    <div className='graphic-box portfolio-body-box' onClick={() => setTrue(['showInit'], ['showPrototypeCategories'])}>
                                        <p className='graphics-box-title prototype-title-3'>Initial Prototypes</p>
                                    </div>
                                </>
                        }
                        {
                            //Responsive Mobile Design
                            state.showResponsive &&
                                <>
                                    <div className="img-container">
                                        <img style={{cursor: 'pointer'}} className="portfolio-img responsive-1" alt="prototype" src="/ActualPrototypes/call-1729 android pixel 4 XL fixed.png" onClick={() => window.location.href= "/ActualPrototypes/call-1729 android pixel 4 XL fixed.png"} />
                                        <p className='picture-sub'>Google Pixel 4 XL</p>
                                    </div>

                                    <div className="img-container">
                                        <img style={{cursor: 'pointer'}} className="portfolio-img responsive-2" alt="prototype" src="/ActualPrototypes/call-1729 android pixel 5 22.24 fixed.PNG" onClick={() => window.location.href="/ActualPrototypes/call-1729 android pixel 5 22.24 fixed.PNG"}/>
                                        <p className='picture-sub'>Google Pixel 5</p>
                                    </div>

                                    <div className='img-container'>
                                        <img style={{cursor: 'pointer'}} className="portfolio-img responsive-3" alt="prototype" src="/ActualPrototypes/call-1729 iPhone 12 Pro 22.28 fixed.png" onClick={() => window.location.href= "/ActualPrototypes/call-1729 iPhone 12 Pro 22.28 fixed.png"}/>
                                        <p className='picture-sub'>iPhone 12 Pro</p>
                                    </div>

                                    <div className='img-container'>
                                        <img style={{cursor: 'pointer'}} className="portfolio-img responsive-4" alt="prototype" src="/ActualPrototypes/call-1792 Nexus 6 22.26 fixed.png" onClick={() => window.location.href="/ActualPrototypes/call-1792 Nexus 6 22.26 fixed.PNG"}/>
                                        <p className='picture-sub'>Nexus 6</p>
                                    </div>

                                    <div className='img-container'>
                                        <img style={{cursor: 'pointer'}} className="portfolio-img responsive-5" alt="prototype" src="/ActualPrototypes/call-1792 Nexus 10 fixed.PNG" onClick={() => window.location.href="/ActualPrototypes/call-1792 Nexus 10 fixed.PNG"}/>
                                        <p className='picture-sub'>Nexus 10</p>
                                    </div>
                                    
                                </>
                        }
                        {
                            //iPad feature walkthrough
                            state.showIPad &&
                                <>
                                    <div className='img-container'>
                                        <img className="ipad-1" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.17.54 PM.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.17.54 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-2" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.17.40 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.17.40 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-3" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.51 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.51 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-4" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.00 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.00 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-5" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.15 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.15 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-6" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.27 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.27 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-7" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.41 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.41 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-8" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.54 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.54 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-9" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.21.07 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.21.07 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-10" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.21.19 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.21.19 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-11" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.10 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.10 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-12" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.22.48 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.22.48 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-13" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.22 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.22 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-14" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.35 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.35 PM fixed.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img className="ipad-15" alt="ipad" style={{cursor: 'pointer'}} src="/ActualPrototypes/Screenshot 2023-12-01 at 9.23.10 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.23.10 PM fixed.png")}/>
                                    </div>
                                </>
                        }
                        {
                            //initial prototypes
                            state.showInit &&
                                //Responsive Mobile Login Prototypes
                                <>
                                    <div className='img-container'>
                                        <img style={{cursor: 'pointer'}} src="/ActualPrototypes/initial1.png" onClick={() => window.open("/ActualPrototypes/initial1.png")}/>
                                    </div>
                                    <div className='img-container'>
                                        <img style={{cursor: 'pointer'}} src="/ActualPrototypes/initial2.png" onClick={() => window.open("/ActualPrototypes/initial2.png")}/>
                                    </div>
                                </>
                            }
                        {
                            //Graphic design categories
                            state.showGraphicCategories &&
                                <>
                                    <div onClick={() => setTrue(['showGraphics'], ['showGraphicCategories'])} className='art-box portfolio-body-box'>
                                        <p className='art-box-title'> Graphic Designs </p>
                                    </div>

                                    <div onClick={() => setTrue(['showLogos'], ['showGraphicCategories'])} className='prototype-box portfolio-body-box'>
                                        <p className='prototype-box-title'> Logo Designs </p>
                                    </div>
                                </>
                        }
                        {
                            //Graphic Designs page
                            state.showGraphics && 
                                //Graphic Designs 
                                <>
                                    <p className='logo-subtitle'> Fayetteville State University Class & Event Infographics</p>
                                    <img className="portfolio-img" src="/ActualDesigns/IMG_0338_fixed.png" onClick={() => window.location.href= "/ActualArt/IMG_0338_fixed.png"} />
                                    <img className="portfolio-img" src="/ActualDesigns/LunchAndLearn_flyer2-Recovered.png" onClick={() => window.location.href = "/ActualArt/LunchAndLearn_flyer2-Recovered.png"} />
                                    <img className="portfolio-img" src="/ActualDesigns/Londonflyerplustext.png" onClick={() => window.location.href = "/ActualDesigns/Londonflyerplustext.png"} />
                                </>
                        }
                        {
                            //Logo design page
                            state.showLogos &&
                                <>
                                    <p className='logo-subtitle'>Logo Design for MAG Aerospace's Software Technology Operations Division</p>
                                    <div className='img-container'>
                                        <img src="/ActualDesigns/IMG_0348.jpeg" onClick={() => window.location.href = "/ActualDesigns/IMG_0348.jpeg"} />
                                    </div>
                                    <div className='img-container'>
                                        <img src="/ActualDesigns/IMG_0349.jpeg" onClick={() => window.location.href = "/ActualDesigns/IMG_0349.jpeg"}/>   
                                    </div>             
                                    <div className='img-container'>                      
                                        <img src="/ActualDesigns/IMG_0350.jpeg" onClick={() => window.location.href = "/ActualDesigns/IMG_0350.jpeg"}/>
                                    </div>
                                    <div className='img-container'>                      
                                        <img src="/ActualDesigns/STOPS logo Profile A.png" onClick={() => window.location.href = "/ActualDesigns/STOPS logo Profile A.png"}/>
                                    </div>
                                    <div className='img-container'>                      
                                        <img src="/ActualDesigns/STOPS logo.png" onClick={() => window.location.href = "/ActualDesigns/STOPS logo.png"}/>
                                    </div>
                                </>
                        }
                        {
                            //Mock websites page
                            state.showMocks && 
                                <>
                                {/* <div className="img-container">
                                        <img className="portfolio-img" src="/ActualPrototypes/android_pixel_4_XL.png" onClick={() => window.open("/ActualPrototypes/android_pixel_4_XL.png")} />
                                        <p className='picture-sub'>Google Pixel 4 XL</p>
                                    </div> */}
                                    <div className='mock-big-container'>
                                        <div className='mock-container mock-1'>
                                            <Link to="/Portfolio/OldHomeSite" >
                                                <img className="mock-img" src='/OldThumbnail.png' />
                                            </Link>
                                            <p className='mock-sub'>Old Home Site</p>
                                        </div>
                                        <div className='mock-container mock-2'>
                                            <Link to="/Portfolio/MockPhotography" >
                                                <img className="mock-img" src='/PhotoThumbnail.png' />
                                            </Link>
                                            <p className='mock-sub'>Photography Mock Website</p>
                                        </div>
                                        <div className='mock-container mock-3'>
                                            <Link to="/Portfolio/MockResumeWriting" >
                                                <img className="mock-img" src='/ResumeThumbnail.png' />
                                            </Link>
                                            <p className='mock-sub sub-3'>Resume Writing Mock Website</p>
                                        </div>
                                    </div>
                                </>
                        }

                    </div>
                </div>
            )}

            <div className= "ribbon">
                <a href="https://www.linkedin.com/in/syrus-gaddy-815ab169">LinkedIn</a>
            </div>
            <div className= "ribbonfold"></div>
            <div className= "ribbon1">
                <a href="https://www.github.com/gaddys10"> Github </a>        
            </div>
            <div className= "ribbonfold1"></div>
            <div className= "ribbon2" onClick={() => toggleState('showPortfolio')}>
                <a>Portfolio</a>
            </div>
            <div className= "ribbonfold2"></div>
            <div className= "ribbon3" onClick={() => toggleState('showResumes')}>
                <a href = "#">Download <br />Resume</a>
            </div>
            <div className= "ribbonfold3"></div>
            <script
                src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossOrigin="anonymous">
            </script>
            <script src = "./RESUME/ResumeSite.js"></script>
        </>
    )
}

export default HomePage;