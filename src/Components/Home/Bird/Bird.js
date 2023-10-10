import React from "react";

class Bird extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            appVersion: ''
        }
    }
    
    render(){
        return(
            <div className= "birdStyle bird">
                <div className= "birdStyle birdpart1"></div>
                <div className= "birdStyle birdpart2"></div>
                <div className= "birdStyle birdpart3"></div>
                <div className= "birdStyle birdpart4"></div>
                <div className= "birdStyle birdpart5"></div>
                <div className= "birdStyle birdpart6"></div>
                <div className= "birdStyle birdpart7"></div>
                <div className= "birdStyle birdpart8"></div>
                <div className= "birdStyle birdpart9"></div>
                <div className= "birdStyle birdpart10"></div>
                <div className= "birdStyle birdpart11"></div>
                <div className= "birdStyle birdpart12"></div>
                <div className= "birdStyle birdpart13"></div>
                <div className= "birdStyle birdpart14"></div>
                <div className= "birdStyle birdpart15"></div>
                <div className= "birdStyle birdpart16"></div>
            </div>
        )
    }
}

export default Bird;