import React from "react";
import './PhotoSite1.css';

class PhotoSite extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <>
                <body>
                    <div className="photo-body">
                        <div id = 'page1'>
                            <h1 id = "title">PHOTOGRAPHY <br/>BY SYRUS GADDY</h1>
                            <h1 id = "photo-subtitle">FAYETTEVILLE, NC</h1>
                        </div>
                        <div id = 'page2'>
                            <div id = "leftBox"></div>
                            <div id = "rightBox">
                                <h1 id = "RBHeader">
                                    Weddings <br />&<br /> Engagements
                                </h1>
                            </div>
                        </div>
                        <div id = 'page4'>
                            <div id = "leftBox3">
                                <p> Modeling <br /> & <br /> Touch Ups</p>
                            </div>
                            <div id = "rightBox3">
                                <h1 id = "RB3Header"></h1>
                            </div>
                        </div>
                        <div id = 'page3'>
                            <div id = "leftBox2"></div>
                            <div id = "rightBox2">
                                <p> Concerts <br /> & <br /> Live Events </p>
                            </div>
                        </div>
                        <div id = 'page5'>
                            <div id = 'centerBox'>
                                <div id = 'infoBox'>
                                    <br/>
                                    <p>Request Session Information</p>
                                    <hr />
                                    <form method="post" name="myemailform" action="form-to-email.php">
                                        <p>
                                            <label>Name:</label> 
                                            <input type="text" name="name" />
                                            <br />
                                        </p>
                                        <br />
                                        <p>
                                            <label>Email </label>    
                                            <input type="text" name="email" />
                                            <br />
                                        </p>
                                        <br/>
                                        <p>
                                            <label>Message:</label>
                                            <br/>
                                            <textarea id = "message" name="message" placeholder="I'd like to request more information on wedding photography, modeling photography, or.."></textarea>
                                            <br/>
                                        </p>
                                        <br/>
                                    </form>
                                    <button id = "requestButton" type="button" >Send Request</button>
                                    <br/>
                                    <p id = "success"s>Your request has been submitted successfully</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script
                        src="https://code.jquery.com/jquery-3.3.1.min.js"
                        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                        crossorigin="anonymous">
                    </script>
                    <script src = "PhotoSite.js"></script>
                </body>
            </>
        )
    }
}

export default PhotoSite;