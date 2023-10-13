import React from "react";
import "./HomeLightbox.css";
import { Link } from "react-router-dom";
import photo from './index-images/PhotoThumbnail.png';
import logo from './index-images/ResumeThumbnail.png';
import old from './index-images/OldThumbnail.png';
import london from '../../Pages/Home/index-images/LunchAndLearn_flyer2-Recovered.png';
import london2 from './index-images/Londonflyerplustext.png';

class HomeLightbox extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <>
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
            </>
        )
    }
}

export default HomeLightbox;

