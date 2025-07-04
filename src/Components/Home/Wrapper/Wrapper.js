import React from "react";
import "./Wrapper.css";
import {html, css, LitElement} from 'lit';

export class CVHeadline extends LitElement {
    constructor() {
        super();
        this.text = 'Resume Headline';
    }
    
    static styles = css`
        p { 
            margin-left: 20px;
            font-family: 'dogica', sans-serif;
            font-size: 24px;
            font-weight: bold;
            margin-top: 5px;
            margin-bottom: 15px;

        }`;

    static properties = {
        text: {type: String},
    };

    render() {
        return html`<p>${this.text}</p>`;
    }
}

customElements.define('cv-headline', CVHeadline);

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
                        
                        <p className="name-position">Syrus Gaddy<br /><br /> <span className="my-title">UI-Focused Full Stack Software Engineer</span></p>
                        <br />
                        <ul className="contact-info">
                            <li> <b>Mobile:</b> (910) 308-3896 </li>
                            <li> <b>E-mail:</b> gaddys10@gmail.com </li>
                            <li> <b>Location:</b> Charlotte, North Carolina </li>
                        </ul>
                    </div>
                    {/* <img src={divida} alt="" className="divida" /> */}
                    <div className="section-divider">---</div>

                    
                    <div className="cvBody">
                        <cv-headline text= "Skills"></cv-headline>
                        <ul className="cv-highlights">
                            <li>8 years of professional software engineering & testing experience</li>
                            <li>1 year of software leadership</li>
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
                        <div className="section-divider">---</div>
                        <cv-headline text= "Education"></cv-headline>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">B.S. Computer Science, <span className="minor">Math Minor</span> <br/> Fayetteville State University</h3>
                            <h4 className= "jobDate"> May 2016</h4>
                        </span>   
                        <ul className="jobBody">
                            <li className= "jobDesc">Developed A.I. & computer vision to win inaugural NASA Swarmathon Robotics Challenge, 2016</li>
                            <li className= "jobDesc">Developed an web application (HTML5/CSS/Javascript/Query) for senior project, 2015</li>
                            <li className= "jobDesc">Honorable Mention in ACM ICPC Mid-Atlantic Regionals sponsored by IBM (Java), 2015</li>
                        </ul>
                    
                        {/* <p className="coursework">Relevant Coursework</p>
                        <p className="coursework-classes"> 
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
                        </p> */}

                        <div className="section-divider">---</div>

                        <cv-headline text="Experience"></cv-headline>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Senior Software Engineer,<br/>General Dynamics</h3>
                            <h3 className= "jobDate">October 2024 - Present</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> 
                                Developing a full stack React + Node web application with a Python-powered OpenAI Whisper backend to transcribe voice input into structured DoD field reports, streamlining manual reporting time and reducing errors
                            </li>
                            <li className= "jobDesc"> 
                                Leading 8-member team to develop a role-based entity management web application in Node and React, visualizing DoD objective assets from PostgreSQL for DoD operational planning
                            </li>
                            <li className= "jobDesc"> 
                                Containerized PostgreSQL, Kafka, Redis, and ElasticSearch environments using Docker Compose and automated pytest flows, enabling consistent local development and raising test coverage
                            </li>
                            <li className= "jobDesc"> 
                                Set up Agile ceremonies, Jira workflows, and Confluence project docs to launch a 4-person data science team
                            </li>
                            <li className= "jobDesc"> 
                                Configured GitLab pipelines to test and deploy containerized apps on Kubernetes to ensure operation on DoD devices
                            </li>
                            <li className= "jobDesc"> 
                                Using Figma to create initial and ongoing prototypes for NLP transcription and image-to-text translation software 
                            </li>
                        </ul>

                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Engineer,<br/>Cisco Systems</h3>
                            <h3 className= "jobDate">January 2023 - October 2023</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> 
                                Developed Webex chatbot UIs and conversational APIs using JavaScript, Python, botkit, and Nest.js to automate device IT support, onboarding, and returns; cutting employee laptop-related support tickets by 18%
                            </li>
                            <li className= "jobDesc"> 
                                Unified Mac and Windows chatbot management systems into a single, OS-independent, Dockerized codebase using Python, Swagger, Kubernetes, Flask, and MySQL, cutting code duplication by 45% and reducing deployment overhead
                            </li>
                            <li className= "jobDesc"> 
                                Created chatbot management REST APIs & their pytest automated API tests to display integrated device status reports
                            </li>
                            <li className= "jobDesc"> 
                                Documented 12 member team’s Agile processes and led sprint audits to improve increase velocity by 20% in 2 months
                            </li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Sr. UI/UX Developer,<br/> O'Reilly Auto Parts</h3>
                            <h3 className= "jobDate">September 2022 - June 2023</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> 
                                Modernized and simplified usability of 6,000+ retail back office desktop apps and keyboard-based Point of Sale systems by designing and developing front-end UIs with Adobe XD, CSS, Git, Gradle, Java, JavaFX, Spring Framework, & Tomcat

                            </li>
                            <li className= "jobDesc"> 
                                Created initial Adobe XD, CSS, Java, & JavaFX functional prototypes for employee UI/UX of “Check Engine Light” vehicle diagnostic application now used at 6,000+ retail locations
                            </li>   
                            <li className= "jobDesc"> 
                                Collaborated remotely with MS Teams, Slack, Git, & Atlassian tools to fix critical bugs and retail staff issues
                            </li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">UX Software Developer,<br/>ARCOS</h3>
                            <h3 className= "jobDate">October 2021 - July 2022</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc">Built Angular & React Native UIs for mobile/web apps managing utility crews for 141,000+ Connexus Energy clients</li>
                            <li className= "jobDesc"> Developed React-based single login solution to integrate newly acquired software authentication with current apps</li>
                            <li className= "jobDesc"> Centralized UI components in Storybook design system, removing duplicate styles & boosting velocity 20% in 3 sprints</li>
                            <li className= "jobDesc"> CLaunched custom form builder product development by creating initial Figma and Adobe XD product design prototypes</li>
                            <li className= "jobDesc"> Contributing to multiple projects using MS Teams, Slack, & Atlassian tool suite to collaborate remotely</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Technical Lead,<br/>MAG Aerospace</h3>
                            <h3 className= "jobDate">March 2021 - September 2021</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Led a 4-person team to upgrade Meteor.js crisis-management web app including new UIs + real-time messaging, event tracking, and notifications; reducing field communication latency by 35% and securing a 1-year DoD program extension</li>
                            <li className= "jobDesc"> Orchestrated integration of React architecture with Hooks into Meteor.js web app to streamline state management, component-based development, and reduce MongoDB query complexity, improving page rendering speed by 30%</li>
                            <li className= "jobDesc"> Developed a PyQGIS heat mapping tool from airborne infrared data to streamline firefighting coordination and reduce overall firefighting effort cost, enabling MAG to offer scalable mapping services to international government clients</li>
                            <li className= "jobDesc"> Established web app UI responsiveness with Browserstack manual testing and Cypress test automation to simulate and debug user interactions with MongoDB NoSQL database across browsers</li>
                            <li className= "jobDesc"> Directed MongoDB NoSQL database management and JSON data modeling to enable new data visualization features, improve scalability for concurrent users, and improve application integrity via replica sets in case of backend failure</li>
                            <li className= "jobDesc"> Diagnosed and fixed failover bug in MongoDB NoSQL database host logic, restoring 80% production performance loss by configuring Azure replica set fallback and host location auto-recovery</li>
                            <li className= "jobDesc"> Led team’s product design by creating weekly Figma, Adobe Photoshop, and BrowserStack prototypes to demonstrate product development, capture requirements, and strengthen project documentation</li>
                            <li className= "jobDesc"> Enabled role-based web app access by constructing IAM login system with Keycloak, Active Directory, and SAML tokens</li>
                            <li className= "jobDesc"> Secured app deployment by containerizing production & dev environments in Linux VMs with Docker, bash, & VMware</li>
                            <li className= "jobDesc"> Set up Bamboo pipelines to deploy containers to Citrix-enabled Azure environments for DoD infrastructure integration</li>
                            <li className= "jobDesc"> Facilitated product development by managing Agile ceremonies as Scrum Master using Confluence, Jira, and MS Teams</li>
                            <li className= "jobDesc"> Led interview process and hired junior engineer; mentored him through Keycloak role integration task within 2 months</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Engineer,<br/>MAG Aerospace</h3>
                            <h3 className= "jobDate">January 2020 - March 2021</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Developed collaborative information portal web application on an Agile team with CSS, JavaScript, and React UIs using a Node, MongoDB, and Meteor.js backend to assist DoD client with real-time crisis data collection solution</li>
                            <li className= "jobDesc"> Redesigned & upgraded Meteor.js information portal web application to add first-ever dashboard customization with responsive, resizable drag-and-drop CSS + Bootstrap widgets saved per user in MongoDB; cutting support tickets 25%</li>
                            <li className= "jobDesc"> Created a JavaScript archival & deletion workflow that flagged dashboard events (Bootstrap/CSS) for DoD-compliant deletion and generated zipped PDF event logs from MongoDB data upon deletion; cutting production overhead by 50%</li>
                            <li className= "jobDesc"> Administered MongoDB databases to provide custom functionality & UIs based on user role & event classification</li>
                            <li className= "jobDesc"> Implemented unit tests, automated end-to-end UI test suites, and manual A/B testing with Cypress + BrowserStack to validate app behavior and responsiveness, catching UI errors between Google Chrome, Firefox, & Internet Explorer</li>
                            <li className= "jobDesc">Ensured web app responsiveness on all desktops of minimum resolution 1024px x 768px with Bootstrap & pure CSS</li>
                            <li className= "jobDesc">Designed/demonstrated solutions for stakeholders with Figma and Photoshop to gain and share product requirements</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className="jobTitle">Automation Engineer,<br/>Verizon</h3>
                            <h3 className= "jobDate">October 2019 - January 2020</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc"> Automated Verizon apps and services with Selenium, Java, and Jenkins to fix all network outages without human intervention, reducing cellular network downtime and improving wireless hotspot performance </li>
                            <li className= "jobDesc"> Developed test automation for verizon.com UIs and APIs with Selenium, Java, JUnit, SQL, and Jenkins to optimize React enterprise app performance, find bugs based on user feedback, and aid software releases</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle">Software Test Engineer,<br/>Xylem Inc.</h3>
                            <h3 className= "jobDate">August 2018 - June 2019</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc">Saved Dallas, TX 12 million gallons of water after solution deployment from 2019 to 2020 by assuring ally® water meter product’s embedded firmware quality assurance using test cases and automation scripts with Perforce and Python</li>
                            <li className= "jobDesc">Ensured tandem functionality of SmartPoint® radio transceiver firmware & FlexNet® communication protocol with Python test automation scripts, now deployed in Columbus, OH to manage energy use for over 1.2 million residents</li>
                            <li className= "jobDesc">Collaborated with developers to debug firmware releases & guide future development by documenting test plans, defect records, and fault recreation for water meter and radio transceiver appliance firmware using Perforce and SVN</li>
                            <li className= "jobDesc">Simulated all expected digital smart grid devices conditions over proposed 20-year lifespan with power supplies, water pumps, and optical sensors to aid in manual testing of smart water meter and digital transceiver hardware & firmware</li>
                        </ul>
                        <span className="jobTitleContainer">
                            <h3 className= "jobTitle" id="fidelity-title">Associate Software Engineer,<br/>Fidelity Investments</h3>
                            <h3 className= "jobDate">January 2017 - May 2018</h3>
                        </span>
                        <ul className="jobBody">
                            <li className= "jobDesc">Contributed to TypeScript, Angular, Express, and Node UIs and APIs to enable external fund transfers to & from Fidelity ETF accounts for 20+ million Fidelity.com users and investors, with full SASS styling and Redux state management</li>
                            <li className= "jobDesc">Reduced call center downtime 15% by building Angular + D3 dashboard to visualize real-time app suite health metrics</li>
                            <li className= "jobDesc">Developed proof of concept product to manage and trade bonds online with JavaScript, Java, SQL, C#, .NET, CSS, JUnit, Oracle 11g relational databases, RESTful APIs, and Spring Framework</li>
                            <li className= "jobDesc">Built JavaScript web app to convert REST API test results from JSON to CSV, cutting manual QA reporting time by 90%</li>
                            <li className= "jobDesc">Created test plans + unit & integration automation suites for 5 fidelity.com engineering teams with Selenium, Mocha, Postman, & Chai; catching critical bank transfer bugs and API-based errors including navigation & custom widgets</li>
                            <li className= "jobDesc">Took ownership of Jenkins pipeline testing stages of QA, development, and release servers to provide smoke testing for new features and a consistent 80% minimum test code coverage for scheduled releases</li>
                            <li className= "jobDesc">Monitored 5 web apps with Splunk and Sonar to document deployment results and artifacts to support bug fixes</li>
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

                    </div>
                </div>
        )
    }
}

export default Wrapper;