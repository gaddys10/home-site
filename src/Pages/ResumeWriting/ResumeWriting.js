import React from "react";
import './ResumeWriting.css';
import './MarketingSite.css';
import './Resumepage1.css';
import './Resumepage2.css';
import './Resumepage3.css';
import mycv from "./SyrusCVImage.png";
import mdavid from "./mdavid.png";
import enorman from "./emilynorman.png";

class ResumeWriting extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }

    render(){
        return(
            <>
                <meta name="viewport" content="width=device-width, initial-scale=0.1" />
                <body>
                    <div className="photo-body">
                        <div id = "cv-page1">
                            <h1 id = "syrus" >SYRUS</h1>
                            <h1 id = "subtitle">R E S U M E &nbsp;S E R V I C E S</h1>
                            <h1 id = "location">F A Y E T T E V I L L E, N C</h1>
                            <div id = "services"> 
                                <div id = "icon1">
                                    <div id = "head1"></div>
                                    <div id = "head2"></div>
                                    <div id = "body1"></div>
                                    <div id = "body2"></div>
                                    <div id = "table"></div>
                                </div>
                                <p id = "sessionsText">PRIVATE SESSIONS</p>
                                <div id ="icon2">
                                    <div id="paper">
                                        <div id = "line1"></div>
                                        {/* <div id = "line2"></div> */}
                                        <div id = "line3"></div>
                                    </div>
                                </div>
                                <p id = "customText"> CUSTOM DESIGNS</p>
                                <div id ="icon3">
                                    <div id = "tieLine1"></div>
                                    <div id = "tieLine2"></div>
                                    <div id = "tieLine3"></div>
                                    <div id = "tieLine4"></div>
                                    <div id = "tieLine5"></div>
                                </div>
                                <p id = "interviewText"> INTERVIEW COACHING</p>
                                <p id ="icon4">
                                    C O V E R<br/><br/>L E T T E R S
                                </p>
                            </div>
                        </div>
                        <div id = "cv-page2">
                            <span id = "bio" >                
                                <p id = "brands" className= "pageTwoText" >
                                    Apple. <br/> Verizon. <br/> Cisco.
                                </p>
                                <p id = "hook" className= "pageTwoText">
                                    A few of the companies where I have interviewed and recieved offers.
                                </p>
                                <br/> 
                                <p id = "brands2" className= "pageTwoText" >
                                    Software Engineer. <br/> Automation Engineer. <br/> Sr. UI/UX Software Developer.
                                </p>
                                <span id = "anchor" className= "pageTwoText">
                                    <p id="position-talk">Some positions I have successfully interviewed and recieved offers for.</p>
                                    {/* <!-- <p> I offer resume, cover letter, & job interview services.</p> */}
                                    {/* <br/>
                                    <br/>
                                    I can show you how I made $65k+ yearly in my first job after graduation from a small state school. --> */}
                                </span>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                </span>
                            {/* <!-- <p id = "desc" className= "pageTwoText">
                                I offer 1 on 1 sessions and group reservations face to face or via video chat
                            </p> --> */}
                        </div>
                        <div id = "pageThree">
                            <h1 id = "sampleTitle"> S A M P L E S </h1>
                            <br/><br/>
                            {/* <!-- Lightbox usage markup --> */}
                            <div id = "sampleBox">
                                {/* <!-- thumbnail image wrapped in a link --> */}
                                <a href="#img1">
                                    <img src={mycv} alt='Resume Example' className="thumbnail1" />
                                </a>

                                {/* <!-- lightbox container hidden with CSS --> */}
                                <a href="#_" className="cv-lightbox" id="img1">
                                    <img src={mycv} alt='Resume Example' />
                                </a>

                                <p className="sub1">Software Engineer</p>

                                <a href="#img2">
                                    <img src={mdavid} alt='Resume Example 2' className="thumbnail2" />
                                </a>

                                {/* <!-- lightbox container hidden with CSS --> */}
                                <a href="#_" className="cv-lightbox2" id="img2">
                                    <img src={ mdavid } alt='Resume Example 2' />
                                </a>
                                <p className="sub2">College Faculty</p>
                                
                                
                                <a href="#img3">
                                    <img src={enorman} alt='Resume Example 3' className="thumbnail3" />
                                </a>

                                {/* <!-- lightbox container hidden with CSS --> */}
                                <a href="#_" className="cv-lightbox3" id="img3">
                                    <img src={enorman} alt='Resume Example 3' />
                                </a>
                                <p className="sub3">Legal</p>
                            </div>
                            <br/><br/>
                            <div className="sample-subtext">
                                <p>Resume samples shown are base copies for efficient submission,</p>
                                <p>I also offer personalized styles for on-site interviews.</p>
                            </div>
                        </div>
                        <div id = "page4">
                            <br/><br/><br/><br/><br/><br/>
                            <div id = 'cv-formContainer'>
                                <h3 id = "requestTitle"> Request Information </h3>
                                <form method="post" name="myemailform" action="form-to-email.php">
                                    <p>
                                        <label>Name:</label> 
                                        <input type="text" name="name"/><br/>
                                    </p>
                                    <br/>
                                    <p>
                                        <label>Email: </label>    
                                        <input type="text" name="email"/><br/>
                                    </p>
                                    <br/>
                                    <p>
                                        <label>Message:</label>
                                        <br/>
                                        <textarea id = "message" name="message" placeholder="I'd like to request more information on session scheduling, personalized resumes, and interview coaching.."></textarea>
                                        <br/>
                                    </p>
                                    <br/>
                                </form>
                                <button id = "requestButton" type="button" >Send Request</button>
                                
                                <p id = "success"s>Your request has been submitted successfully</p>
                            </div>
                            
                            {/* <!-- <a><img id = "twitter" src="iconfinder_Twitter_3380455.png"/></a>
                            
                            <img href="twitter.com" id = "fb" src="iconfinder_Facebook_3380457.png"/>
                            
                            <img id = "ig" src="iconfinder_Instagram_3380456.png"/>
                            
                            <img id = "linkedIn" src="iconfinder_LinkedIn_3380448.png"/> --> */}
                            
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                    </div>

                    <script
                        src="https://code.jquery.com/jquery-3.3.1.min.js"
                        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                        crossOrigin="anonymous">
                    </script>
                    <script src = "ResumeSite.js"></script>

                </body>
            </>
        )
    }
}

export default ResumeWriting;