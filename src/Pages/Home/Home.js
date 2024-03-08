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
import logo from './index-images/ResumeThumbnail.png';
import photo from './index-images/PhotoThumbnail.png';
import old from './index-images/OldThumbnail.png';
import london from './index-images/LunchAndLearn_flyer2-Recovered.png'
import london2 from './index-images/Londonflyerplustext.png';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPortfolio: false,
            showArt: false,
            showMocks: false,
            showPrototypes: false,
            showGraphics: false
        }
        this.togglePortfolio = this.togglePortfolio.bind(this);
        this.closePortfolio = this.closePortfolio.bind(this);
        this.toggleArt = this.toggleArt.bind(this);
        this.turnOffArt = this.turnOffArt.bind(this);
        this.toggleMocks = this.toggleMocks.bind(this);
        this.turnOffMocks = this.turnOffMocks.bind(this);
        this.togglePrototypes = this.togglePrototypes.bind(this);
        this.turnOffPrototypes = this.turnOffPrototypes.bind(this);
        this.toggleGraphics = this.toggleGraphics.bind(this);
        this.turnOffGraphics = this.turnOffGraphics.bind(this);
    }

    togglePortfolio(){
        this.setState(prevState => ({ showPortfolio: !prevState.showPortfolio }))
        console.log(this.state.showPortfolio);
    }

    closePortfolio(){
        this.setState(prevState => (
            {
                showArt: false,
                showPortfolio: false,
                showGraphics: false,
                showMocks: false,
                showPrototypes: false
            })
        )
    }

    toggleArt(){
        this.setState(prevState => ({ showArt: !prevState.showArt }))
        console.log(this.state.showArt);
    }

    turnOffArt(){
        this.setState(prevState => ({showArt: false}))
    }

    toggleMocks(){
        this.setState(prevState => ({ showMocks: !prevState.showMocks }))
        console.log(this.state.showMocks);
    }

    turnOffMocks(){
        this.setState(prevState => ({showMocks: false}))
    }

    togglePrototypes(){
        this.setState(prevState => ({ showPrototypes: !prevState.showPrototypes }))
        console.log(this.state.showPrototypes);
    }

    turnOffPrototypes(){
        this.setState(prevState => ({showPrototypes: false}))
    }

    toggleGraphics(){
        this.setState(prevState => ({ showGraphics: !prevState.showGraphics }))
        console.log(this.state.showGraphics);
    }

    turnOffGraphics(){
        this.setState(prevState => ({showGraphics: false}))
    }

    turnOffPages(){
        this.turnOffArt();
        this.turnOffGraphics();
        this.turnOffMocks();
        this.turnOffPrototypes();
    }

    render() {
        return (
            <>

                <meta name="viewport" content="width=device-width, initial-scale=0.1" />
                <div id = "sky"></div>
                <div id = "ground_container"></div>
                <div className= "shadow1"> </div>
                <div className= "shadow2"> </div>
                <div className= "shadow3"> </div>
                <div className= "shadow4"> </div>
                <div className='shadow5'></div>
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
                <div className='shadow17'></div>
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

                <div className= "ribbon2" onClick={this.togglePortfolio}>
                    <a href="#">Portfolio</a>
                    {/* <a href="#portfolioBox">Portfolio</a> */}

                </div>
                <div className= "ribbonfold2"></div>

                <div className= "ribbon3">
                    <a href="/FullCV.pdf" download="SyrusGaddy_FullResume.pdf">
                        Download <br /> Resume
                    </a>
                </div>
                <div className= "ribbonfold3"></div>
                    
                {/* <!-- lightbox container hidden with CSS --> */}
                <a href="#_" className="lightbox" id="portfolioBox">
                    <div id="folio">
                        
                        <h1 id = "pweb"> Web Development</h1>

                        <Link to="/Portfolio/MockResumeWriting" >
                            <img id = "rt" alt='Mock Resume Site Thumbnail' src={logo} />
                            <p id = 'psub1'> Mock <br /> Resume Writing Business </p>
                        </Link>
                        <Link to="/Portfolio/MockPhotography" >
                            <img id = "pt" src={ photo } alt='Icon for Mock Photography Site' />
                            <p id = 'psub2'> Mock <br /> Photography Portfolio </p>
                        </Link>
                        <Link to="/Portfolio/OldHomeSite">
                            <img id = "ot" src={ old } alt='Icon for Old Home Site' />
                            <p id = 'psub3'> Old Home Site </p>
                        </Link>
                        <hr />
                        <h1 id = "pgraph">Graphic Design</h1>
                        <img id = "gt1" src={london} alt='Flyer for Lunch and Learn Event' onClick={() => window.open(london)} />
                        <p id = 'gsub1'> University Event Flyer</p>
                        <img id = "gt2" 
                            src={ london2 }
                            alt='Icon for Mock Resume Site'
                            onClick={() => window.open(london2)}
                        />
                        <p id = 'gsub2'
                            // onClick = "window.open('http://www.syrusgaddy.com/Photography/PhotoSite.html', '_self')"
                        >
                            University Course Flyer
                        </p>
                    </div>
                </a>
                <TheGround />
                <Tree />
                <Character />
                <Shark />
                <Wrapper />
                <Flower />
                <Bird />
            { 
            this.state.showPortfolio &&
                    <div className='portfolioContainer'>
                        <div className='portfolioHeader'>
                            <p className='portfolioTitle'>Portfolio</p>
                            <p className='portfolioClose' onClick={this.closePortfolio }>X</p>
                        </div>
                        <div className='portfolioBody'>
                            {
                                !this.state.showArt && !this.state.showGraphics && !this.state.showMocks && !this.state.showPrototypes &&
                                    <>
                                        <div onClick={this.toggleArt} className='art-box portfolio-body-box'>
                                            <p className='art-box-title'> Art </p>
                                        </div>

                                        <div onClick={this.togglePrototypes} className='prototype-box portfolio-body-box'>
                                            <p className='prototype-box-title'> Prototypes </p>
                                        </div>

                                        <div onClick={this.toggleGraphics} className='graphic-box portfolio-body-box'>
                                            <p className='graphics-box-title'> Graphics </p>
                                        </div>

                                        <div onClick={this.toggleMocks} className='mock-box portfolio-body-box'>
                                            <p className='mock-box-title'> Mock Websites </p>
                                        </div>
                                    </>
                            }
                            {
                                this.state.showArt && !this.state.showGraphics && !this.state.showMocks && !this.state.showPrototypes &&
                                    <>
                                        
                                    </>
                            }
                            {
                                !this.state.showArt && this.state.showGraphics && !this.state.showMocks && !this.state.showPrototypes &&
                                    <>
                                        
                                    </>
                            }
                            {
                                !this.state.showArt && !this.state.showGraphics && this.state.showMocks && !this.state.showPrototypes &&
                                    <>
                                        
                                    </>
                            }
                            {
                                !this.state.showArt && !this.state.showGraphics && !this.state.showMocks && this.state.showPrototypes &&
                                    <>
                                        
                                    </>
                            }
                        </div>
    
                    </div>
            }
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