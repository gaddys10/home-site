import React from "react";
import "./Wrapper.css";

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
                        <li> Mobile: (910) 308-3896 </li>
                        <li> E-mail: gaddys10@gmail.com </li>
                        <li> Location: Fayetteville, North Carolina </li>
                    </ul>
                </div>
                <div className="cvBody">
                    <p className="summary-info">Summary</p>
                    <ul className="cv-highlights">
                        <li>7.5 years of professional software engineering & testing</li>
                        <li>Experience in finance, utilities, telecommunications, asset management, and government contracting </li>
                        <li>B.S. Computer Science & Mathematics minor </li>
                        <li>
                            <a href = "https://www.nasa.gov/feature/students-develop-robotic-code-in-first-swarmathon-challenge">
                                Winner of Inagural NASA Swarmathon Robotics Physical Competition
                            </a>  
                        </li>
                        <li>1 year Freelance Front-End Development</li>
                        <li>7 months of software leadership</li>
                        <li>2 years of professional technology sales</li>
                        <li>1.5 years of professional Apple hardware and software troubleshooting</li>
                        <li>4 years customer service</li>
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
                    
                    <br /> 
                    <hr/>
                    
                    <p className="experience-title">Experience</p>
                    
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">Software Engineer,<br/>Cisco Systems</h3>
                        <h3 className= "jobDate">1/2023 - Present</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc"> Designing, implementing, & supporting chatbots with python & JS to automate device management</li>
                        <li className= "jobDesc"> Automating device experiences w/ botkit, Swagger, Snowflake, & Nest.js to assist internal employees</li>
                        <li className= "jobDesc"> Rewriting OS-specific projects w/ python & Docker to create a OS-agnostic bot management solution </li>
                        <li className= "jobDesc"> Developing & testing RESTful APIs with python & MySQL to validate & manipulate device records </li>
                        <li className= "jobDesc"> Providing leadership via coaching & documentation to develop Agile team & establish best practices</li>
                    </ul>
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">Senior UI/UX Software Developer,<br/> O'Reilly Auto Parts</h3>
                        <h3 className= "jobDate">9/2022 - 6/2023</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc"> Developed user interfaces using Java, JFX, & CSS to improve & modernize Point of Sale systems</li>
                        <li className= "jobDesc"> Contributed to an agile team as sole UX engineer to launch development on vehicle diagnostic software</li>
                        <li className= "jobDesc"> Designed & shared software prototypes using Adobe XD & Confluence to support development </li>
                        <li className= "jobDesc"> Configured projects using Gradle to ensure proper dependency injection and application deployment </li>
                        <li className= "jobDesc">  Configured projects using Gradle & Spring to ensure proper dependency injection & app deployment</li>
                        <li className= "jobDesc"> Contributing to multiple projects using Mattermost, Outlook, & Atlassian tool suite to collaborate remotely </li>
                    </ul>
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">UX Software Developer,<br/>ARCOS</h3>
                        <h3 className= "jobDate">10/2021 - 7/2022</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc"> Developed iOS & Android mobile apps w/ React Native, JSX, Node.js, & Expo to modernize products</li>
                        <li className= "jobDesc"> Implementing web user interfaces using TypeScript, CSS, Angular, & XML to update legacy projects</li>
                        <li className= "jobDesc"> Created React.js project as sole developer to provide a single login portal for all consumer software </li>
                        <li className= "jobDesc"> Served as UX Designer using Adobe XD & Figma to create initial prototype for major software product </li>
                        <li className= "jobDesc"> Contributing to multiple projects using MS Teams, Slack, & Atlassian tool suite to collaborate remotely</li>
                        <li className= "jobDesc"> Contributing to multiple projects using Mattermost, Outlook, & Atlassian tool suite to collaborate remotely </li>
                    </ul>
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">Software Technical Lead,<br/>MAG Aerospace</h3>
                        <h3 className= "jobDate">3/2021 - 9/2021</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc"> Developed full-stack MeteorJS app as subject matter expert & point of contact on main client contract</li>
                        <li className= "jobDesc"> Made executive decisions on MongoDB database/collection creation, schema, & implementation</li>
                        <li className= "jobDesc"> Created prototypes using Figma, Browserstack, Adobe Photoshop, & GIMP to lead team’s UI design </li>
                        <li className= "jobDesc"> Lead transition in converting primary project, a MeteorJS app, into a ReactJS application  </li>
                        <li className= "jobDesc"> Manual and automated tested with BrowserStack, Cypress, & Python to validate Node.js web app</li>
                        <li className= "jobDesc"> Provided authentication with Keycloak & Active Directory (ADFS) to provide security layer to web app </li>
                        <li className= "jobDesc"> Used bash to manage RHEL & Ubuntu Linux Virtual Machines and development environments </li>
                        <li className= "jobDesc"> Built & configured pipelines with Bamboo to deploy Node.js app into an Azure cloud environment </li>
                        <li className= "jobDesc"> Used Python and PyQGIS to write specialized heat mapping software to aid efforts in putting out fires</li>
                        <li className= "jobDesc"> Gained requirements, demonstrated updates, & recommended solutions in meetings to assist clients</li>
                    </ul>
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">Software Engineer,<br/>MAG Aerospace</h3>
                        <h3 className= "jobDate">1/2020 - 3/2021</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc"> Developing full stack JS web app with MeteorJS in Red Hat Linux to support government clients</li>
                        <li className= "jobDesc"> Building UI components with BlazeJS templating to display, manipulate, & manage MongoDB data</li>
                        <li className= "jobDesc"> Standardizing style guides and using Bootstrap & pure CSS to style user interface components </li>
                        <li className= "jobDesc"> Managing MongoDB database using MeteorJS to store, manipulate, and implement application data</li>
                        <li className= "jobDesc"> Working remotely using MS Teams & Atlassian Tool Suite to coordinate in an Agile environment</li>
                        <li className= "jobDesc"> Wrote automated tests with Python and Cypress to test MeteorJS app UI and functionality</li>
                    </ul>
                    <span className="jobTitleContainer">
                        <h3 className="jobTitle">Automation Engineer,<br/>Verizon</h3>
                        <h3 className= "jobDate">10/2019 - 1/2020</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc"> Tested primary web application w/ Selenium, Java, JS, Node, & SQL to help resolve network issues</li>
                        <li className= "jobDesc"> Developed workflow automation to resolve network outages without human interaction</li>
                        <li className= "jobDesc"> Planned, developed, and executed automated tests to optimize enterprise application performance</li>
                        <li className= "jobDesc"> Identified & fixed bugs based on user feedback & assisted in rollout of software releases</li>
                        <li className= "jobDesc"> Researched new technologies & maintained active knowledge of industry development trends</li>
                    </ul>
                
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">Software Test Engineer,<br/>Xylem Inc.</h3>
                        <h3 className= "jobDate">8/2018 - 6/2019</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc">Assisted IT, HW, SW, & FW engineers with debugging, testing, & developinbg smart grid technologies</li>
                        <li className= "jobDesc">Providing validation support by performing manual & automated tests on hardware product line</li>
                        <li className= "jobDesc">Documenting detailed defect records, including fault recreation, for SW & FW engineering</li>
                        <li className= "jobDesc">Developing & committing automated tests with SVN to establish best testing practices & processes</li>
                        <li className= "jobDesc">Creating and executing comprehensive test plans for product and system verification</li>
                    </ul>
                    
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">Associate Software Engineer,<br/>Fidelity Investments</h3>
                        <h3 className= "jobDate">1/2017 - 5/2018</h3>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc">Developed/tested Node web apps w/ TS, Angular, Sass, Redux, & Robot to support financial products</li>
                        <li className= "jobDesc">Developed application health dashboard with D3.js, Angular, & Selenium to support bank call centers</li>
                        <li className= "jobDesc">Created JSON to CSV web app w/ Javascript to import & log REST API test results into spreadsheets</li>
                        <li className= "jobDesc">Took ownership of testing stages of Jenkins pipelines to ensure quality & continuous deployment</li>
                        <li className= "jobDesc">Logged software deployment results into Splunk to communicate application status across team</li>
                        <li className= "jobDesc">Tested w/ Mocha, Chai, Chakram, & Protractor to ensure functionality of company’s primary web app </li>
                    </ul>
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">Mac+ AppleCare Technical Advisor,<br/> Apple Inc.</h3>
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
                        <h3 className= "jobTitle">Freelance Web Developer,<br/> AKA Sorority Inc., Zeta Pi Omega Ch.</h3>
                        <h4 className= "jobDate">9/2014 - 4/2015</h4>
                    </span>
                    <ul className="jobBody">
                        <li className= "jobDesc">Collaborated with client using HTML5, CSS, JavaScript, & PHP to create website as sole developer</li>
                        <li className= "jobDesc">Discussed end-user requirements and implementations in client meetings </li>
                        <li className= "jobDesc">Included 12+ pages, log-in function, photo gallery, member directory, calendar, & custom graphics </li>
                    </ul>
                    <hr/>
                    <p className="experience-title"> Education </p>
                    <span className="jobTitleContainer">
                        <h3 className= "jobTitle">B.S. Computer Science, Math Minor <br/> Fayetteville State University</h3>
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
                </div>
            </div>
        )
    }
}

export default Wrapper;