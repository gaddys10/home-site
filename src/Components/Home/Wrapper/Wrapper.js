import React from "react";
import "./Wrapper.css";
import divida from './homedivider.png';

class Wrapper extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            appVersion: ''
        }
    }
    
    render(){
        return(
                <div className= "home-wrapper">
                    <div className="cvHeader">
                        <p className="name-position">Syrus Gaddy, <br /><br /> Software Engineer</p>
                        <br />
                        <ul className="contact-info">
                            <li> <b>Mobile:</b> (910) 308-3896 </li>
                            <li> <b>E-mail:</b> gaddys10@gmail.com </li>
                            <li> <b>Location:</b> Fayetteville, North Carolina </li>
                        </ul>
                    </div>
                    <br/>
                    <img src={divida} alt="" className="divida" />

                    <div className="cvBody">
                        <p className="summary-info">Skills</p>
                        <ul className="cv-highlights">
                            <li>7.5 years of professional software engineering & testing experience</li>
                            <li>7 months of software leadership</li>
                            <li>Background in finance, utilities, telecommunications, asset management, & government contracting </li>       
                            {/* <li>1.5 years of professional Apple hardware and software troubleshooting</li> */}
                            <li>B.S. Computer Science Mathematics minor </li>
                            <li>
                                <a href = "https://www.nasa.gov/feature/students-develop-robotic-code-in-first-swarmathon-challenge">
                                    Winner of Inagural NASA Swarmathon Robotics Physical Competition
                                </a>  
                            </li>
                            {/* <li>2 years of professional technology sales</li> */}
                            {/* <li>4 years of professional customer service</li> */}
                        </ul>
                        <p className="skill-cat">
                            <b className="bold-text">Front End:</b>
                            <br/> 
                            HTML, CSS, SASS, Javascript, Jquery, TypeScript, React.js, Angular.js, Meteor.js, JSX, JavaFX, React Native
                        </p>
                        <p className="skill-cat">
                            <b className="bold-text">Back End:</b>
                            <br/> 
                            Java, Python, C++, NodeJS, npm, MongoDB, mySQL, Oracle, PostgreSQL 
                        </p>
                        <p className="skill-cat">
                            <b className="bold-text">Testing:</b>
                            <br/> 
                            Selenium, Robot Framework, JUnit, Protractor, Jasmine, Mocha, Chai, Cucumber 
                        </p>
                        <p className="skill-cat">
                            <b className="bold-text">CICD:</b>
                            <br/> 
                            Git, Docker, SVN, Splunk, Atlassian Tool Suite (Jira, Confluence, Bamboo, Bitbucket) 
                        </p>
                        <p className="skill-cat">
                            <b className="bold-text">UI/UX Design:</b>
                            <br/> 
                            Figma, Adobe Photoshop, Adobe XD, Browserstack, GIMP, UML 
                        </p>
                        <br/> 
                        <br/>
                        <img src={divida} alt="" className="divida" />
                        
                        <p className="experience-title">Experience</p>
                        
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Engineer,<br/>Cisco Systems</h3>
                            <h3 className= "jobDate">1/2023 - Present</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> 
                                Developed internal Webex chatbots using NLP, Python, botkit, Snowflake, Flask, JavaScript, Nest.js, Docker, MySQL, JSON, and YAML to automate employee desktop device onboarding, refresh, and health reporting
                            </li>
                            <li className= "jobDesc"> 
                                Created Python RESTful API suite reading from a MySQL backend & their Pytest test automation to maintain and validate user device data alongside displaying an accurate status report of all internal staff devices
                            </li>
                            <li className= "jobDesc"> 
                                Rewrote OS-specific projects in Python and Docker to construct an OS-independent chatbot management system to simplify code, improve ease of debugging, and standardize deployment for all desktop OS
                            </li>
                            <li className= "jobDesc"> 
                                Guided team through Agile process and Jira board implementation, including an 1 hour long recorded audit, resulting in 30% velocity boost over 4 sprints
                            </li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Sr. UI/UX Developer,<br/> O'Reilly Auto Parts</h3>
                            <h3 className= "jobDate">9/2022 - 6/2023</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> 
                                Designed and developed UIs with Adobe XD, Java, JavaFX, CSS, Tomcat, Gradle, Spring Framework, and Git to modernize and simplify back office and Point of Sale (POS) systems for all 6,000+ retail locations

                            </li>
                            <li className= "jobDesc"> 
                                Built early functional prototypes with Adobe XD, Java, JavaFX, and CSS to begin development on Check Engine Light diagnostic app, now utilized at 6,000+ retail stores to diagnose and repair customer car issues
                            </li>   
                            <li className= "jobDesc"> 
                                Collaborated remotely with MS Teams, Slack, Git, & Atlassian tools to fix critical bugs and retail staff issues
                            </li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">UX Software Developer,<br/>ARCOS</h3>
                            <h3 className= "jobDate">10/2021 - 7/2022</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Built TypeScript-based React Native and Angular UIs for "Mobile Workbench" mobile apps and "Callout" & "Crew Manager" web apps to manage utilities for 141,000+ Connexus Energy clients starting May 2022</li>
                            <li className= "jobDesc"> Created a React-based single login solution from scratch with TypeScript, JSX, and CSS as sole developer to integrate newly purchased workforce management software authentication with current applications </li>
                            <li className= "jobDesc"> Expanded internal Storybook design system to standardize mobile and web application styling, eliminating CSS and improving team development speed by 20% over 5 sprints</li>
                            <li className= "jobDesc"> Created Adobe XD and Figma early prototypes for form building software to kickstart product development and allow clients to generate custom solutions while reducing overall administrative costs</li>
                            <li className= "jobDesc"> Contributing to multiple projects using MS Teams, Slack, & Atlassian tool suite to collaborate remotely</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Technical Lead,<br/>MAG Aerospace</h3>
                            <h3 className= "jobDate">3/2021 - 9/2021</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Redesigned Node information portal web app UIs and functionality while leading 4-person team with CSS, JavaScript, and Meteor.js including messaging, alerting, and real-time data to earn client contract extension</li>
                            <li className= "jobDesc"> Developed heat mapping tools with Python and PyQGIS to facilitate large-scale firefighting, allowing the company to negotiate software services to the Canadian and Australian governments</li>
                            <li className= "jobDesc"> Directed MongoDB database/collection creation, schema, and implementation to maintain web application speed as additional features required more frequent and more complex queries</li>
                            <li className= "jobDesc"> Created weekly prototypes using Figma, BrowserStack, Adobe Photoshop, and GNU Image Manipulation Program to lead team’s UI design, improve project documentation, and clarify tasks before development </li>
                            <li className= "jobDesc"> Configured Red Hat Enterprise and Ubuntu Linux virtual machines with Docker, shell/bash, and VirtualBox, including containerized web applications and development environments</li>
                            <li className= "jobDesc"> Led Integration of React component-based architecture into Meteor.js information portal web app to boost rendering speed by 40% and React Hooks to simplify state management & fetching data from database</li>
                            <li className= "jobDesc"> Deployed automated and A/B tests with BrowserStack and Cypress to validate web application UIs and their responsiveness across different browsers and devices</li>
                            <li className= "jobDesc"> Constructed login authentication system with Keycloak, Active Directory (ADFS), and SAML to improve web app security by enabling role-based access & seamless Citrix integration for client's user management needs </li>
                            <li className= "jobDesc"> Set up Bamboo pipelines to incorporate Cypress UI test automation stages and generate .iso files for secure deployment into Citrix-enabled Azure environments, allowing for seamless interface with client infrastructure</li>
                            <li className= "jobDesc"> Met with stakeholders to gather requirements, present updates, and propose solutions virtually and on-site</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Engineer,<br/>MAG Aerospace</h3>
                            <h3 className= "jobDate">1/2020 - 3/2021</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Developed full stack Node information & communication portal web app dashboards using JavaScript and Meteor.js on an Agile team to assist federal clients, meeting SDLC criteria with limited information</li>
                            <li className= "jobDesc"> Administered MongoDB databases with Meteor.js & mongo shell while building custom UI components with MongoDB data & BlazeJS templating to create dashboards based on user roles & event classification</li>
                            <li className= "jobDesc"> Obtained consensus on direction and explained potential solutions to clients and team by using Photoshop, Figma, BrowserStack, and GNU Image Manipulation Program prototypes to represent customer needs </li>
                            <li className= "jobDesc"> Standardized styling and aided rapid prototyping using Bootstrap while leveraging pure CSS for pixel-perfect design and browser responsiveness to make web app accessible for all user levels of technical experience</li>
                            <li className= "jobDesc"> Wrote unit tests and test automation with Python and Cypress to test MeteorJS web app UIs and functionality across different browsers and desktop devices along with BrowserStack A/B testing </li>
                            <li className= "jobDesc">Containerized application and development environment with Docker to ensure proper software functionality and operation on classified systems and desktops</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className="jobTitle">Automation Engineer,<br/>Verizon</h3>
                            <h3 className= "jobDate">10/2019 - 1/2020</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Automated Verizon apps and services with Selenium, Java, and Jenkins to fix all network outages without human intervention, reducing cellular network downtime and improving wireless hotspot performance </li>
                            <li className= "jobDesc"> Developed test automation for verizon.com UIs and APIs with Selenium, Java, JUnit, SQL, and Jenkins to optimize React enterprise app performance, find bugs based on user feedback, and aid software releases</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Test Engineer,<br/>Xylem Inc.</h3>
                            <h3 className= "jobDate">8/2018 - 6/2019</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc">Developed test automation scripts with Python to ensure quality of ally® water meter firmware, saving the city of Dallas, TX 12 million gallons of water after deployment from 2019 to 2020 </li>
                            <li className= "jobDesc">Ensured tandem functionality of SmartPoint® radio transceiver firmware & FlexNet® communication protocol with Python test scripts, now deployed in Columbus, OH to manage energy use for 1.2 million residents</li>
                            <li className= "jobDesc">Documented test plans, defect records, & fault recreation for appliance firmware w/ Perforce & SVN to assist developers with debugging firmware releases and to guide future development</li>
                            <li className= "jobDesc">Used power supplies, water pumps, and optical sensors to aid in manual testing digital smart grid devices, exposing equipment to all expected conditions over proposed 20 year life span</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Associate Software Engineer,<br/>Fidelity Investments</h3>
                            <h3 className= "jobDate">1/2017 - 5/2018</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc">Built bank transfer UIs and APIs using Node, TypeScript, Angular 2 & 4, SASS, Redux, and Git to enhance fidelity.com, allowing 50 million customers to transfer funds across external checking and ETF accounts</li>
                            <li className= "jobDesc">Developed a Javascript-powered JSON to CSV web application to import and log REST API test results into spreadsheets for at least 20 bank transfer software developers</li>
                            <li className= "jobDesc">Created “Canary Service” app health dashboard with Node, JavaScript, TypeScript, D3.js, Angular, SVG, and Selenium to let call center advisors visualize app suite performance and reduce app issue downtime</li>
                            <li className= "jobDesc">Owned Jenkins pipeline testing stages of QA, development, and release servers for 3 teams by orchestrating API/UI test automation and implementing smoke tests to ensure code integrity and adherence to standards</li>
                            <li className= "jobDesc">Monitored 5 Agile teams' Angular web applications concurrently by using Splunk and Sonar to observe and document software deployment results and artifacts for fault recreation and debugging support</li>
                            <li className= "jobDesc">Constructed full stack “Buy Local Bonds” proof of concept project with C#, CSS, JavaScript, SQL, Oracle 11g, Java, Spring, & REST APIs to let users buy and sell government bonds online & manage their holdings </li>
                            <li className= "jobDesc">Established Mocha, Chai, Selenium, Robot Framework, and Protractor UI and API test automation suites for 5 bank transfer products and teams to ensure money transfers across all qualified fidelity.com accounts </li>
                        </ul>
                        {
                            /* <span className="jobTitleContainer">
                                <h3 className= "jobTitle">Mac+ AppleCare Advisor,<br/> Apple Inc.</h3>
                                <h4 className= "jobDate">8/2014 - 10/2015</h4>
                            </span>
                            <ul className="jobBody">
                                <li className= "jobDesc">Multitasked across systems & applications to analyze, isolate & resolve a variety of technical issues</li>
                                <li className= "jobDesc">Delivered troubleshooting for Apple OS X, iOS, & watchOS HW & SW to remotely assist customers</li>
                                <li className= "jobDesc">Isolated and resolved technical issues with Safari web and mobile browsers; Fixed LAN/WAN issues</li>
                                <li className= "jobDesc">Completed AppleCare Academy training to professionally troubleshoot Apple hardware & software</li>
                            </ul>
                            <span className="jobTitleContainer">
                                <h3 className= "jobTitle">Graphic Design Intern,<br/> UNCFSU</h3>
                                <h4 className= "jobDate">1/2015 - 5/2015</h4>
                            </span>
                            <ul className="jobBody">
                                <li className= "jobDesc">Worked with Director of Continuing Education using Adobe CC to promote college courses & events</li>
                                <li className= "jobDesc">Created informational graphics to be distributed to entire student body and staff to promote events</li>
                            </ul>
                            
                            <span className="jobTitleContainer">
                                <h3 className= "jobTitle">Freelance Web Developer,<br/> AKA Sorority Inc.</h3>
                                <h4 className= "jobDate">9/2014 - 4/2015</h4>
                            </span>
                            <ul className="jobBody">
                                <li className= "jobDesc">Collaborated with client using HTML5, CSS, JavaScript, & PHP to create website as sole developer</li>
                                <li className= "jobDesc">Discussed end-user requirements and implementations in client meetings </li>
                                <li className= "jobDesc">Included 12+ pages, log-in function, photo gallery, member directory, calendar, & custom graphics </li>
                            </ul> */
                        }
                        <br/>
                        <br/>

                        <img src={divida} alt="" className="divida" />
                        <p className="experience-title"> Education </p>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">B.S. Computer Science, <span className="minor">Math Minor</span> <br/> Fayetteville State University</h3>
                            <h4 className= "jobDate"> May 2016</h4>
                        </span>   
                        <ul className="jobBody">
                            <li className= "jobDesc">Developed A.I. & computer vision to win inaugural NASA Swarmathon Robotics Challenge, 2016</li>
                            <li className= "jobDesc">Developed an web application (HTML5/CSS/Javascript/Query) for senior project, 2015</li>
                            <li className= "jobDesc">Honorable Mention in ACM ICPC Mid-Atlantic Regionals sponsored by IBM (Java), 2015</li>
                        </ul>
                    
                        <p className="coursework">Relevant Coursework</p>
                        <p className="coursework-classes"> <br/>
                            A.I. &bull; 
                            Software Engineering &bull; 
                            Algorithm Design & Analysis 
                            Discrete Mathematics &bull;
                            Data Structures & Algorithms 
                            OOP Design &bull; 
                            Competive Programming &bull; 
                            Linear Algebra 
                            Program Design & Implementation &bull; 
                            Programming Languages &bull; 
                            Java Applications
                        </p>
                        <div className="scroll-relief"></div>
                    </div>
                </div>
        )
    }
}

export default Wrapper;