import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import TheGround from '../../Components/Home/TheGround/TheGround';
import Tree from '../../Components/Home/Tree/Tree';
import Character from '../../Components/Home/Character/Character';
import Shark from '../../Components/Home/Shark/Shark';
import Wrapper from '../../Components/Home/Wrapper/Wrapper';
import Flower from '../../Components/Home/Flower/Flower';
import Bird from '../../Components/Home/Bird/Bird';
// import logo from './index-images/ResumeThumbnail.png';
// import photo from './index-images/PhotoThumbnail.png';
// import old from './index-images/OldThumbnail.png';
// import london from './index-images/LunchAndLearn_flyer2-Recovered.png'
// import london2 from './index-images/Londonflyerplustext.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
            showIPad: false
        }
        this.showResumes = this.showResumes.bind(this);
        this.showPortfolio = this.showPortfolio.bind(this);
        this.closePortfolio = this.closePortfolio.bind(this);

        this.showArt = this.showArt.bind(this);
        this.turnOffArt = this.turnOffArt.bind(this);

        this.showMocks = this.showMocks.bind(this);
        this.turnOffMocks = this.turnOffMocks.bind(this);

        this.turnOnPrototypes = this.turnOnPrototypes.bind(this);
        this.turnOffPrototypes = this.turnOffPrototypes.bind(this);
        this.turnOnPrototypeCategories = this.turnOnPrototypeCategories.bind(this);
        this.turnOnFeature = this.turnOnFeature.bind(this);
        this.turnOnResponsive = this.turnOnResponsive.bind(this);
        this.turnOnIPad = this.turnOnIPad.bind(this);

        this.turnOnGraphics = this.turnOnGraphics.bind(this);
        this.turnOffGraphics = this.turnOffGraphics.bind(this);
        this.turnOffGraphicsCategories = this.turnOffGraphicsCategories.bind(this);
        this.turnOnGraphicsCategories = this.turnOnGraphicsCategories.bind(this);

        this.turnOnLogos = this.turnOnLogos.bind(this);

        this.turnOffPages = this.turnOffPages.bind(this);
    }

    showPortfolio(){
        this.setState(prevState => ({ showPortfolio: !prevState.showPortfolio }))
    }

    showResumes(){
        this.setState(prevState => ({ showResumes: !prevState.showResumes }))
    }

    closePortfolio(){
        this.setState(prevState => (
            {
                showArt: false,
                showPortfolio: false,
                showGraphics: false,
                showMocks: false,
                showPrototypes: false,
                showGraphicCategories: false,
                showPrototypeCategories: false,
                showLogos: false,
                showResponsive: false,
                showFeature: false,
                showIPad: false,
                showResumes: false
            })
        )
    }

    showArt(){
        this.setState(prevState => ({ showArt: true }))
    }

    turnOffArt(){
        this.setState(prevState => ({showArt: false}))
    }

    showMocks(){
        this.setState(prevState => ({ showMocks: true }))
    }

    turnOffMocks(){
        this.setState(prevState => ({showMocks: false}))
    }


    turnOnPrototypes(){
        this.setState(prevState => ({ showPrototypes: true }))
    }

    turnOffPrototypes(){
        this.setState(prevState => ({showPrototypes: false}))
    }

    turnOnPrototypeCategories(){
        this.setState(prevState => ({ showPrototypeCategories: true }))
    }


    turnOnResponsive(){
        this.setState(prevState => ({
            showResponsive: true,
            showPrototypeCategories: false
        }))
    }

    turnOnFeature(){
        this.setState(prevState => ({
            showFeature: true,
            showPrototypeCategories: false
        }))
    }

    turnOnIPad(){
        this.setState(prevState => ({
            showIPad: true,
            showPrototypeCategories: false
        }))
    }


    turnOffGraphicsCategories(){
        this.setState(prevState => ({ showPrototypeCategories: false }))
    }

    turnOnGraphics(){
        this.setState(prevState => ({ 
            showGraphics: true,
            showGraphicCategories: false
        }))
    }

    turnOffGraphics(){
        this.setState(prevState => ({showGraphics: false}))
    }

    turnOnGraphicsCategories(){
        this.setState(prevState => (
            {
                showGraphicCategories: true,
                showGraphics: false
            }
        ))
    }

    turnOnLogos(){
        this.setState(prevState => ({
            showGraphicCategories: false,
            showLogos: true
        }))
    }


    turnOffPages(){
        if(this.state.showGraphics === true || this.state.showLogos === true){
            this.setState(prevState => ({
                showGraphics: false,
                showLogos: false,
                showGraphicCategories: true
            }))
        } else if (this.state.showPrototypes === true ){
            this.setState(prevState => ({
                showPrototypes: false,
                showPrototypeCategories: true
            }))
        } else {
        this.setState(prevState => (
            {
                showArt: false,
                showPortfolio: true,
                showGraphics: false,
                showMocks: false,
                showPrototypes: false, 
                showGraphicCategories: false,
                showPrototypeCategories: false,
                showLogos: false,
                showResponsive: false,
                showFeature: false,
                showIPad: false,
                showResumes: false
            }))
        }
        console.log(this.state);
    }

    render() {
        return (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=0.1" />
                
                <TheGround />
                <Tree />
                <Character />
                <Shark />
                <Wrapper />
                <Flower />
                <Bird />
                <div class = "leaf"></div>
                { 
                    this.state.showPortfolio &&
                        <div className='portfolioContainer'>
                            <div className='portfolioHeader'>
                                {/* <div className='back-box' onClick={ this.turnOffPages }></div> */}
                                <div className='back-box' onClick={this.turnOffPages}>
                                    <FontAwesomeIcon icon={faLeftLong} className='back-arrow' onClick={this.turnOffPages} />
                                </div>
                                <p className='portfolioTitle' >Portfolio</p>
                                <p className='portfolioClose' onClick={ this.closePortfolio }> <span className='xx'>X</span></p>
                            </div>
                            <div className='portfolioBody'>
                                {
                                    // Portfolio splash
                                    !this.state.showArt && 
                                    !this.state.showGraphics && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypes &&
                                    !this.state.showGraphics &&
                                    !this.state.showGraphicCategories &&
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    !this.state.showFeature &&
                                    !this.state.showIPad &&
                                        <>
                                            <div onClick={this.showArt} className='art-box portfolio-body-box'>
                                                <p className='art-box-title'> Art </p>
                                            </div>

                                            <div onClick={this.turnOnPrototypeCategories} className='prototype-box portfolio-body-box'>
                                                <p className='prototype-box-title'> Prototypes </p>
                                            </div>

                                            <div onClick={this.turnOnGraphicsCategories} className='graphic-box portfolio-body-box'>
                                                <p className='graphics-box-title'> Graphics </p>
                                            </div>

                                            <div onClick={this.showMocks} className='mock-box portfolio-body-box'>
                                                <p className='mock-box-title'> Mock Websites </p>
                                            </div>
                                        </>
                                }
                                {
                                    //Art Page
                                    !this.state.showGraphics && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypes &&
                                    !this.state.showGraphicCategories &&
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    !this.state.showIPad &&
                                    this.state.showArt && 
                                        <>
                                            {/* <div className='imageContainer'> */}
                                                <img className="portfolio-img" src="/ActualArt/IMG_0339.jpeg" onClick={() => window.open("/ActualArt/IMG_0339.jpeg")} />
                                                <img className="portfolio-img" src="/ActualArt/IMG_0346.jpeg" onClick={() => window.open("/ActualArt/IMG_0346.jpeg")}/>
                                                <img className="portfolio-img" src="/ActualArt/IMG_0347.jpeg" onClick={() => window.open("/ActualArt/IMG_0347.jpeg")}/>
                                            {/* </div> */}
                                        </>
                                }
                                {
                                    //Graphic design categories
                                    !this.state.showArt && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypes && 
                                    !this.state.showGraphics && 
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    !this.state.showIPad &&
                                    this.state.showGraphicCategories &&
                                        <>
                                            <div onClick={this.turnOnGraphics } className='art-box portfolio-body-box'>
                                                <p className='art-box-title'> Graphic Designs </p>
                                            </div>

                                            <div onClick={this.turnOnLogos} className='prototype-box portfolio-body-box'>
                                                <p className='prototype-box-title'> Logo Designs </p>
                                            </div>
                                        </>
                                }
                                {
                                    //Graphic Designs page
                                    !this.state.showArt && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypes && 
                                    !this.state.showGraphicCategories &&
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    !this.state.showIPad &&
                                    this.state.showGraphics && 
                                        //Graphic Designs 
                                        <>
                                            <p className='logo-subtitle'> Fayetteville State University Class & Event Infographics</p>
                                            <img className="portfolio-img" src="/ActualDesigns/IMG_0338_fixed.png" onClick={() => window.open("/ActualArt/IMG_0338_fixed.png")} />
                                            <img className="portfolio-img" src="/ActualDesigns/LunchAndLearn_flyer2-Recovered.png" onClick={() => window.open("/ActualArt/LunchAndLearn_flyer2-Recovered.png")} />
                                            <img className="portfolio-img" src="/ActualDesigns/Londonflyerplustext.png" onClick={() => window.open("/ActualDesigns/Londonflyerplustext.png")} />
                                        </>
                                }
                                {
                                    //Logo design page
                                    !this.state.showArt && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypes && 
                                    !this.state.showGraphicCategories &&
                                    !this.state.showPrototypeCategories &&
                                    this.state.showLogos &&
                                    !this.state.showIPad &&
                                    !this.state.showGraphics && 
                                    !this.state.showResponsive &&
                                    !this.state.showFeature &&
                                        //Logo Designs 
                                        <>
                                            <p className='logo-subtitle'>Logo Design for MAG Aerospace's Software Technology Operations Division</p>
                                            <div className='img-container'>
                                                <img src="/ActualDesigns/IMG_0348.jpeg" onClick={() => window.open("/ActualDesigns/IMG_0348.jpeg")} />
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualDesigns/IMG_0349.jpeg" onClick={() => window.open("/ActualDesigns/IMG_0349.jpeg")}/>   
                                            </div>             
                                            <div className='img-container'>                      
                                                <img src="/ActualDesigns/IMG_0350.jpeg" onClick={() => window.open("/ActualDesigns/IMG_0350.jpeg")}/>
                                            </div>
                                            <div className='img-container'>                      
                                                <img src="/ActualDesigns/STOPS logo Profile A.png" onClick={() => window.open("/ActualDesigns/STOPS logo Profile A.png")}/>
                                            </div>
                                            <div className='img-container'>                      
                                                <img src="/ActualDesigns/STOPS logo.png" onClick={() => window.open("/ActualDesigns/STOPS logo.png")}/>
                                            </div>
                                        </>
                                }
                                {
                                    //Mock websites page
                                    !this.state.showArt && 
                                    !this.state.showGraphics && 
                                    !this.state.showPrototypes &&
                                    !this.state.showGraphicCategories &&
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponse &&
                                    !this.state.showIPad &&
                                    !this.state.showResponsive &&
                                    this.state.showMocks && 
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
                                {
                                    //Prototype Categories
                                    !this.state.showArt && 
                                    !this.state.showGraphics && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypes && 
                                    !this.state.showGraphicCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    !this.state.showIPad &&
                                    !this.state.showGraphics && 
                                    this.state.showPrototypeCategories &&
                                        //Prototypes
                                        <>
                                            <div className='art-box portfolio-body-box' onClick={this.turnOnResponsive}>
                                                <p className='art-box-title'> Responsive Mobile Login </p>
                                            </div>

                                            {/* <div className='prototype-box portfolio-body-box' onClick={this.turnOnFeature}>
                                                <p className='prototype-box-title'> Feature Walkthrough </p>
                                            </div> */}

                                            <div className='graphic-box portfolio-body-box' onClick={this.turnOnIPad}>
                                                <p className='graphics-box-title'> iPad feature walkthrough </p>
                                            </div>
                                        </>
                                }
                                {
                                    //Responsive Mobile Design
                                    !this.state.showArt && 
                                    !this.state.showGraphics && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showGraphicCategories &&
                                    !this.state.showLogos &&
                                    this.state.showResponsive &&
                                    !this.state.showIPad &&
                                    !this.state.showGraphics && 
                                    !this.state.showPrototypes && 
                                        <>
                                            <div className="img-container">
                                                <img className="portfolio-img" src="/ActualPrototypes/call-1729 android pixel 4 XL fixed.png" onClick={() => window.open("/ActualPrototypes/android_pixel_4_XL fixed.png")} />
                                                <p className='picture-sub'>Google Pixel 4 XL</p>
                                            </div>

                                            <div className="img-container">
                                                <img className="portfolio-img" src="/ActualPrototypes/call-1729 android pixel 5 22.24 fixed.PNG" onClick={() => window.open("/ActualPrototypes/call-1729 android pixel 5 22.24 fixed.PNG")}/>
                                                <p className='picture-sub'>Google Pixel 5</p>
                                            </div>

                                            <div className='img-container'>
                                                <img className="portfolio-img" src="/ActualPrototypes/call-1729 iPhone 12 Pro 22.28 fixed.png" onClick={() => window.open("/ActualPrototypes/call-1729 iPhone 12 Pro 22.28 fixed.png")}/>
                                                <p className='picture-sub'>iPhone 12 Pro</p>
                                            </div>

                                            <div className='img-container'>
                                                <img className="portfolio-img" src="/ActualPrototypes/call-1792 Nexus 6 22.26 fixed.png" onClick={() => window.open("/ActualPrototypes/call-1792 Nexus 6 22.26 fixed.PNG")}/>
                                                <p className='picture-sub'>Nexus 6</p>
                                            </div>

                                            <div className='img-container'>
                                                <img className="portfolio-img" src="/ActualPrototypes/call-1792 Nexus 10 fixed.PNG" onClick={() => window.open("/ActualPrototypes/call-1792 Nexus 10 fixed.PNG")}/>
                                                <p className='picture-sub'>Nexus 10</p>
                                            </div>
                                            
                                        </>
                                }
                                {
                                    //feature walkthrough
                                    !this.state.showArt && 
                                    !this.state.showGraphics && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showGraphicCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    !this.state.showIPad &&
                                    !this.state.showGraphics && 
                                    this.state.showFeature && 

                                        //Responsive Mobile Login Prototypes
                                        <>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/iosDevice fixed.png"/>
                                            </div>
                                        </>
                                }
                                {
                                    //iPad feature walkthrough
                                    !this.state.showArt && 
                                    !this.state.showGraphics && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showGraphicCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    this.state.showIPad &&
                                    !this.state.showGraphics && 
                                    !this.state.showPrototypes && 

                                        //Responsive Mobile Login Prototypes
                                        <>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.17.54 PM.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.17.54 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.17.40 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.17.40 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.51 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.51 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.00 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.00 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.15 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.15 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.27 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.27 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.41 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.41 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.20.54 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.20.54 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.21.07 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.21.07 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.21.19 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.21.19 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.10 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.10 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.22.48 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.22.48 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.22 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.22 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.18.35 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.18.35 PM fixed.png")}/>
                                            </div>
                                            <div className='img-container'>
                                                <img src="/ActualPrototypes/Screenshot 2023-12-01 at 9.23.10 PM fixed.png" onClick={() => window.open("/ActualPrototypes/Screenshot 2023-12-01 at 9.23.10 PM fixed.png")}/>
                                            </div>
                                        </>
                                }
                            </div>
        
                        </div>
                }

                { 
                    this.state.showResumes &&
                        <div className='portfolioContainer'>
                            <div className='portfolioHeader'>
                                <p className='portfolioTitle resume-title' >Click to Download Resume</p>
                                <p className='portfolioClose' onClick={ this.closePortfolio }> <span className='xx'>X</span></p>
                            </div>
                            <div className='portfolioBody'>
                                {
                                    // Resumes splash
                                    !this.state.showArt && 
                                    !this.state.showGraphics && 
                                    !this.state.showMocks && 
                                    !this.state.showPrototypes &&
                                    !this.state.showGraphics &&
                                    !this.state.showGraphicCategories &&
                                    !this.state.showPrototypeCategories &&
                                    !this.state.showLogos &&
                                    !this.state.showResponsive &&
                                    !this.state.showFeature &&
                                    !this.state.showIPad &&
                                    !this.state.showPortfolio &&
                                        <>
                                            <div className='resumeContainer'>
                                                <div>
                                                    <a  href = '/FullCV.pdf' download='Syrus_Gaddy_Resume.pdf'>

                                                        <img className="resume-thumbnail" src='./FullCV_Thumbnail.png' />
                                                    </a>
                                                    <p className='resume-subtitle'>Full Resume</p>
                                                </div>
                                                <div>
                                                    <a  href = '/QACV.pdf' download='Syrus_Gaddy_QA_Resume.pdf'>
                                                        <img className="resume-thumbnail" src='./QACV.png' />
                                                    </a>
                                                        <p className='resume-subtitle'>QA Engineer</p>
                                                </div>
                                                <div>
                                                    <a  href = '/FrontendCV.pdf' download='Syrus_Gaddy_Frontend_Resume.pdf'>
                                                        <img className="resume-thumbnail" src='./FrontendCV_Thumbnail.png' />
                                                    </a>
                                                    <p className='resume-subtitle'>Frontend Engineer</p>
                                                </div>
                                                <div>
                                                    <a  href = '/UICV.pdf' download='Syrus_Gaddy_UI/UX_Resume.pdf'>
                                                        <img className="resume-thumbnail" download='./UICV.pdf' src='./UICV_Thumbnail.png' />
                                                    </a>
                                                    <p className='resume-subtitle'>UI/UX Engineer</p>
                                                </div>
                                            </div>
                                        </>
                                } 
                            </div>
                        </div>
                }
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
                    <div className= "puff2"></div>
                    <div className= "puff3"></div>
                    <div className= "puff4"></div>
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
                <div className= "ribbon">
                    <a href="https://www.linkedin.com/in/syrus-gaddy-815ab169">LinkedIn</a>
                </div>
                <div className= "ribbonfold"></div>

                <div className= "ribbon1">
                    <a href="https://www.github.com/gaddys10"> Github </a>        
                </div>
                <div className= "ribbonfold1"></div>

                <div className= "ribbon2" onClick={this.showPortfolio}>
                    <a href="#">Portfolio</a>
                </div>
                <div className= "ribbonfold2"></div>

                <div className= "ribbon3"
                    onClick={this.showResumes}
                >
                    <a href = "#">
                        Download <br /> Resume
                    </a>
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
}

export default Home;