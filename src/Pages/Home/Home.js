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
        this.state = {}
    }

    render(){
        return (
            <>
                {/* <head>
                    <meta name="viewport" content="width=device-width, initial-scale=0.1" />
                    <title>Syrus Gaddy's Home Site</title>
                </head> */}
                <meta name="viewport" content="width=device-width, initial-scale=0.1" />
                
                <div id = "sky"></div>
                <div id = "ground_container"></div>
                <div className= "shadow1"> </div>
                <div className= "shadow2"> </div>
                <div className= "shadow3"> </div>
                <div className= "shadow4"> </div>
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

                <div id = "shark_container"></div>
                {/* <div id = "wrapper_container"></div> */}

                <div className= "ribbon">
                    <a href="https://www.linkedin.com/in/syrus-gaddy-815ab169"> LinkedIn </a>
                </div>
                <div className= "ribbonfold"></div>
                        
                <div className= "ribbon1">
                    <a href="https://www.github.com/gaddys10"> Github </a>        
                </div>
                <div className= "ribbonfold1"></div>
                
                <div className= "ribbon2">
                    <a href="#portfolioBox">Portfolio</a>
                </div>
                <div className= "ribbonfold2"></div>
                    
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

                        <img id = "gt1" src={london} alt='Flyer for Lunch and Learn Event' />
                        <p id = 'gsub1'> University Event Flyer</p>

                        <img id = "gt2" 
                            src={ london2 }
                            alt='Icon for Mock Resume Site'
                            onClick={() => window.open('./index-images/Londonflyerplustext.png')}
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