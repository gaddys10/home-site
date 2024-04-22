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
                        <p className="name-position">Syrus Gaddy, Software Engineer</p>
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
                            HTML/CSS/Javascript, Jquery, TypeScript, ReactJS, JSX 
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
                            <li className= "jobDesc"> Developed internal Webex chatbots w/ python, botkit, Snowflake, Flask, JavaScript, Docker, and YAML to automate employee device management including onboarding, device refresh, and reporting device health</li>
                            <li className= "jobDesc"> Rewrote OS-specific projects w/ python and Docker to create a OS-independent bot management solution, reducing code, improving overall ease of debugging, and standardizing deployment for any user desktop OS</li>
                            <li className= "jobDesc"> Developed & tested RESTful APIs w/ python, pytest, & MySQL to manage & validate user device records, providing an accurate status report of all devices assigned to internal employees </li>
                            <li className= "jobDesc"> Coached & mentored team on Agile process, including an hour-long video recorded audit of current Agile processes, leading to a 25% increase in overall velocity and delivery speed </li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Sr. UI/UX Developer,<br/> O'Reilly Auto Parts</h3>
                            <h3 className= "jobDate">9/2022 - 6/2023</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Developed user interfaces with Java, JavaFX, CSS, Tomcat, Gradle, and Spring to improve back office and POS (Point of Sale) systems for all physical locations</li>
                            <li className= "jobDesc"> Created initial prototypes with Adobe XD, JavaFX, & CSS to kickstart development on Check Engine Light diagnostic app, now used at all stores to diagnose & offer repair options for customer car issues</li>
                            <li className= "jobDesc"> Collaborated remotely with MS Teams, Slack, Git, & Atlassian tools to fix critical bugs and retail staff issues</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">UX Software Developer,<br/>ARCOS</h3>
                            <h3 className= "jobDate">10/2021 - 7/2022</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Developed UIs w/ React Native to modernize “Mobile Workbench” workforce management iOS & Android apps, delivering users a seamless experience on all mobile devices operating on said operating systems</li>
                            <li className= "jobDesc"> Improved user interfaces with TypeScript, CSS, Angular, & XML on an Agile team to update crew management web applications, ensuring consistent & responsive styling across browsers</li>
                            <li className= "jobDesc"> Integrated login capabilities of newly purchased workforce management software with current applications by building a React-based single login solution from the ground up </li>
                            <li className= "jobDesc"> Served as UX Designer using Adobe XD and Figma to create initial prototypes for form building software, enabling all customers to create their own custom solutions and lower administrative costs </li>
                            <li className= "jobDesc"> Contributing to multiple projects using MS Teams, Slack, & Atlassian tool suite to collaborate remotely</li>
                            <li className= "jobDesc"> Expanded internal Storybook design system to standardize styling across mobile and web apps, reducing amount of CSS needed to create components and improving development speed by 35%</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Technical Lead,<br/>MAG Aerospace</h3>
                            <h3 className= "jobDate">3/2021 - 9/2021</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Overhauled full-stack Node.js information & communication portal with MeteorJS by updating UIs, adding messaging, notification, & real-time data featuresÍ, earning organization 1 year extension on client contract</li>
                            <li className= "jobDesc"> Programmed heat mapping software w/ Python & PyQGIS to aid large-scale efforts in putting out forest fires, allowing organization to offer services to the Canadian government</li>
                            <li className= "jobDesc"> Made executive decisions on MongoDB database/collection creation, schema, & implementation, leading to a consistent web application speed even as new features introduced required more database queries</li>
                            <li className= "jobDesc"> Created weekly prototypes using Figma, BrowserStack, Adobe Photoshop, and GIMP to lead team’s user interface design, enhance project documentation, & add additional clarity to tasks ahead of development </li>
                            <li className= "jobDesc"> Used bash and VirtualBox to manage and configure Red Hat Enterprise and Ubuntu Linux virtual machines, including containerized web applications and development environments</li>
                            <li className= "jobDesc"> Led transition in converting code in primary project, a Meteor app, into reusable ReactJS components </li>
                            <li className= "jobDesc"> Deployed automated and A/B tests w/ BrowserStack and Cypress to validate web application user interfaces and responsiveness across different browsers and devices </li>
                            <li className= "jobDesc"> Built login authentication w/ Keycloak & Active Directory (ADFS) to provide security layer to web application </li>
                            <li className= "jobDesc"> Built & configured pipelines with Bamboo & Git to deploy Node.js app into an Azure cloud environment</li>
                            <li className= "jobDesc"> Gained requirements, demonstrated updates, & recommended solutions in meetings to assist clients</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Engineer,<br/>MAG Aerospace</h3>
                            <h3 className= "jobDate">1/2020 - 3/2021</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Developed full stack NodeJS information & communication portal web app with MeteorJS on an Agile team to support federal clients, delivering on requirements through red tape and limited, classified information</li>
                            <li className= "jobDesc"> Built user interface components with BlazeJS templating to display, manipulate, and manage live MongoDB data to provide custom dashboards based on user roles and classification levels of notable events</li>
                            <li className= "jobDesc"> Containerized application and development environment with Docker to ensure functionality and operational standards to users working on various classified systems and desktop devices </li>
                            <li className= "jobDesc"> Standardized style guides and used Bootstrap & pure CSS to style user interface components</li>
                            <li className= "jobDesc"> Managed MongoDB database using MeteorJS to store, manipulate, and implement application data</li>
                            <li className= "jobDesc"> Wrote unit tests and test automation with Python and Cypress to test MeteorJS application user interface and functionality across different browsers and desktop devices.</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className="jobTitle">Automation Engineer,<br/>Verizon</h3>
                            <h3 className= "jobDate">10/2019 - 1/2020</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Automated Verizon apps and services with Selenium, Java, and Jenkins to fix all network outages without human intervention, reducing cellular network downtime and improving wireless hotspot performance</li>
                            <li className= "jobDesc"> Tested and automated Verizon.com UIs and APIs with Selenium, Java, JUnit, SQL, and Jenkins to optimize React enterprise app performance, find bugs based on user input, and aid with software releases</li>
                        </ul>
                    
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Test Engineer,<br/>Xylem Inc.</h3>
                            <h3 className= "jobDate">8/2018 - 6/2019</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc">Wrote test automation scripts with Python to ensure quality of ally® water meter firmware, saving the city of Dallas, TX 12 million gallons of water after deployment from 2019 to 2020</li>
                            <li className= "jobDesc">Ensured tandem functionality of SmartPoint® radio transceiver firmware & FlexNet® communication protocol w/ test automation, now deployed in Columbus, OH to manage utility consumption for 1.2 million residents</li>
                            <li className= "jobDesc">Documented test plans, defect records, & fault recreation for appliance firmware w/ Perforce & SVN to assist developers with firmware releases and to guide future development</li>
                            <li className= "jobDesc">Used power supplies, water pumps, and optical sensors to aid in manual testing digital smart grid devices, exposing equipment to all expected conditions over proposed 20 year life span</li>
                        </ul>
                        
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Associate Software Engineer,<br/>Fidelity Investments</h3>
                            <h3 className= "jobDate">1/2017 - 5/2018</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc">Wrote bank transfer software with TypeScript, Angular, Sass, Redux, & Git to expand fidelity.com web app, enabling 50 million users to transfer funds between external checking and ETF accounts</li>
                            <li className= "jobDesc">Automated testing on UIs & APIs w/ Mocha, Chai, Selenium, Robot, & Protractor to validate the functionality of fidelity.com, ensuring the successful transfer of funds between all eligible accounts</li>
                            <li className= "jobDesc">Developed “Canary Service” application health dashboard with D3.js, Angular, and Selenium to assist call center advisors, decreasing overall downtime of affected applications when issues arise</li>
                            <li className= "jobDesc">Created JSON to CSV web app w/ Javascript to import & log REST API test results into spreadsheets, shared among at least 30 developers involved in using APIs to develop bank transfer software</li>
                            <li className= "jobDesc">Took ownership of testing stages of Jenkins pipelines to ensure quality & continuous deployment, verifying functionality of new features & checking that new features did not introduce new bugs through smoke testing</li>
                            <li className= "jobDesc">Logged and documented software deployment results and artifacts with Splunk to communicate Angular web application status across 6 Agile teams concurrently </li>
                        </ul>
                        {/* <span className="jobTitleContainer">
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
                        </ul> */}
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