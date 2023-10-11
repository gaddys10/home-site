import "./imsorry.css";
import React from "react";
import { Link } from "react-router-dom";
import home2 from '../home2.png';
import bio2 from '../bio2.png';
import blog2 from '../blog2.png';
import port2 from '../portfolio2.png';
import sorry from '../apologies.png';
import r2 from '../Resume2.png';

class OldSiteSorry extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <>
                <body>
                    <img className = "cvTitle" src={sorry} alt="apology" />
                    <div className = "sorry-tbar"></div>
                    <Link to="/Portfolio/OldHomeSite"> 
                        <a href = "index.html"><img className = "cv-icon home2" src = {home2} alt = "home button" /></a>
                    </Link>
                    <Link to="/Portfolio/OldHomeSite/Resume">
                        <a href = "resume.html"><img className = "resume2" src = {r2} alt="resume button"/></a>
                    </Link>
                    <Link to="/Portfolio/OldHomeSite/Bio">
                        <a href = "bio.html"><img className = "cv-icon bio2" src = {bio2} href = "bio.html" alt="bio button" /></a>
                    </Link>
                    <Link to="/Portfolio/OldHomeSite/Sorry">
                        <a href = "imsorry.html"><img className = "cv-icon blog2" src = {blog2} alt="blog button"/></a>
                    </Link>
                    <Link to="/Portfolio/OldHomeSite/Sorry">
                        <a href = "imsorry.html"><img className = "cv-icon portfolio2" src = {port2} alt="portfolio button"/></a>
                    </Link>
                    <div className = "sorry-wrapper">
                        <div className = "sorry-wrappertext">
                            <h1> I currently don't have anything posted here</h1>
                            <h2> Check back later for updates. There is still so much to come.</h2>
                            <h3> In the meantime, check out the other parts of the site.</h3>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}

export default OldSiteSorry;