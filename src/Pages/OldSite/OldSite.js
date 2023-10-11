import React from "react";
import './OldSite.css';
import './Module1.css';
import it from './intro.png';
import rb from './resumeButton.png';
import bb from './bioButton.png';
import pb from './PortfolioButton.png';
import name from './NAME.png';
import lib from './LIbutton.png';
import ghb from './GHbutton.png';
import { Link } from "react-router-dom";

class OldSite extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
                <body>
                    <img className = "intro" alt="Intro text" src={ it } />
                    <Link to="/Portfolio/OldHomeSite/Resume">
                        <a className = "cvLink" href = "../src/Pages/OldSite/resume.html">
                            <img className = "cv" id = "butt" alt="resume button" src = { rb } />
                        </a>
                    </Link>
                    <Link to="/Portfolio/OldHomeSite/Bio">
                        <a className = "bioLink" href = "bio.html"><img id = "butt" className = "bio" alt="biography button" src = { bb } /></a>
                    </Link>

                    <a className = "folioLink" href = "imsorry.html"><img className = "folio" id = "butt" alt="Portfolio button" src = { pb } /></a>
                    <img className = "name" alt="My name, 'Syrus Gaddy'" src={ name }/>
                    <div className = "tbar"></div>
                    <div className = "nav1">
                        <a href = "https://www.linkedin.com/in/syrus-gaddy-815ab169"><img className = "template2" alt="Linkedin button" src = {lib}/></a>
                        <a href = "https://github.com/gaddys10/Home"><img className = "template3" alt="Github button" src = { ghb } /></a>
                    </div>
                </body>
            </>
        )
    }
}

export default OldSite;