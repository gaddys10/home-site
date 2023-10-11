import React from "react";
import './OldSiteResume.css';
import './resume.css';
import resumetitle from "../ResumeTitle.png";
// import './OldSite/blog2.png '
import home2 from '../home2.png';
import bio2 from '../bio2.png';
import blog2 from '../blog2.png';
import port2 from '../portfolio2.png';
import { Link } from "react-router-dom";

class OldSiteResume extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <>
                <body>
                    <img className = "cvTitle" src={ resumetitle } alt="resume title" />
                    <div className = "tbar2"></div>
                    <Link to="/Portfolio/OldHomeSite"> 
                        <a href = "index.html"><img className = "cv-icon home2" src = {home2} alt = "home button" /></a>
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
                    <div className = "cv-wrapper">
                        <div className = "wrappertext">
                            <p>EMAIL: gaddys10@gmail.com | PHONE: 910-308-3896</p>
                            <hr/>
                            <h2 className = "ed">Education</h2>
                            <p className = "fsu">
                                <i><u>Fayetteville State University</u></i>
                                <br/>
                                <span className = "degree"><strong>Bachelor of Science in Computer Science with a minor in Mathematics (May 2016)</strong></span>
                                <br/>
                                <span className = "degreetxt">
                                    - Dean's List, Spring 2014
                                    <br/>
                                    - Champion of the Inaugural NASA Swarmathon Physical Robotics Competition Using C++
                                    <br/>
                                    - Honorable Mention in the ACM ICPC Mid-Atlantic Regionals using Java, Fall 2015
                                    <br/>
                                    - Developed an eCard generator web application using HTML5, CSS, Javascript, and jQuery, 2015
                                    <br/>
                                    - Chief Web Consultant, Association of Information Technology Professionals: FSU Chapter, 2014
                                    <br/>
                                    - Member of the Association of Computing Machinery
                                </span>
                            </p>
                            <p>
                                <b><u>Technical Coursework</u></b><br/>
                                <b>Java Programming</b> | Operating Systems Principles in C | <b>Java Applications</b> | Programming and Logic in Python | <b>Software Engineering</b> | Data Structures & Algorithms in Python | <b>Artificial Intelligence</b> | Design & Analysis of Algorithms | 
                                <b>Computer Organization & Assembly Language</b> | Competitive Programming | <b>Scheme Programming</b> | Networking Basics | <b>Networking Basics</b> | Routing Protocols | <b>LAN Switching & Wireless Networks</b>
                            </p>
                            <br/>
                            <hr/>
                            <br/>
                            <p> 
                                <u><b>Programming, Scripting, & Frameworks</b></u>
                                <br/>
                                <b>Proficient:</b> Java, HTML, CSS <br/><b>Prior Experience:</b> SQL, C++, JavaScript, Python, ROS
                            </p>
                            <br/>
                            <hr/>
                            <br/>

                            <h2> Experience </h2>
                                <p>
                                    <b>Independent Projects</b>
                                    <br/>
                                    <br/>
                                    <u><i>Alpha Kappa Alpha Sororotiy Inc., Zeta Pi Omega Chapter</i> (Fall 2014 - Spring 2015)</u>
                                    <br/>
                                    - Used <b>HTML5, CSS, & JavaScript</b> to create a 12+ website with custom graphics and functions
                                    <br/>
                                    - Met with client for 6 months discussing requirements, implementing ideas, and making necessary edit
                                </p>
                            <p>
                                <u><i>Fayetteville Urban Ministries & Fayetteville State University</i></u>(Spring 2014)
                                <br/>
                                - Created 10 minute documentary of organization's Executive Director using Final Cut Pro X
                            </p>
                            
                            <p>
                                <b>MAC+ APPLECARE TECHNICAL ADVISOR, Apple Inc. (Aug. 2014 - Oct. 2015)</b>
                                <br/>
                                - Delivered professional troubleshooting support for all Apple OS X, iOS, and WatchOS devices
                                <br/>
                                - Performed IT duties; verified & managed client Apple ID and iCloud account information & storage
                                <br/>
                                - Isolated and resolved technical issues with Safari web and mobile browers; Fixed LAN/WAN issues
                                <br/>
                                - Specialized in troubleshooting and testing iOS mobile operating systems. applications, and devices
                                <br/>
                                - Communicated across departments and assisted coworkers to thoroughly solve a client's problem
                                <br/>
                                - Tested customer devices for hardware & software problems and documented solutions
                                <br/>
                                - Trained on Apple operating systems including OS X El Capitan, iOS 9, & watchOS 2
                                <br/>
                                - Graduated from AppleCare Academy Training & hardware trained on all contemporary Apple products
                            </p>
                            
                            <p>
                                <b>GRAPHIC DESIGN INTERN, Fayetteville State University </b>(Spring 2014)
                                <br/>
                                - Collaborated with Director of Continuing Educaiton to design posters for university courses and events
                                <br/>
                                - Created custom graphics with Adobe Photoshop to be delivered to the entire staff & student body
                            </p>
                            
                            <p>
                                <b>COMPUTER & TABLET CONSULTANT, Best Buy Co., Inc.</b>(June 2013 - August 2014)
                                <br/>
                                - Hardware trained on variety of computing brands including Asus, HP, Toshipa, & Samsung
                                <br/>
                                - Completed Windows 7 and 8 training modules; Specialized in routing & networking solutions
                            </p>
                            <br/>
                            <hr/>
                            <br/>
                            <p className="additional">
                                <b><u>ADDITIONAL SKILLS & EXPERIENCE</u></b>
                                <br/>
                                - Experienced in using Eclipse, Ubuntu Linux, Github, and Virtual Box
                                <br/>
                                - 90+ WPM typing ability
                                <br/>
                                - Teamwork and leadership experience from starting Point Guard role in the Amateur Athletic Union
                                <br/>
                                - Completed an 80+ hour internship in the Orthopedic Department of Womack Army Medical Center
                            </p>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}

export default OldSiteResume;