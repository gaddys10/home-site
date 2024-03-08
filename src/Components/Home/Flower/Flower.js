import React from "react"
import "./Flower.css";
import "../TheGround/TheGround.css";

class Flower extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            appVersion: ''
        }
    }
    
    render(){
        return(
            <div className= "flower">
                <div className= "fstem"></div>
                <div className= "fbulb">
                    <div className= "fcenter"></div>
                    <div className= "fpetal1"></div>
                    <div className= "fpetal2"></div>
                    <div className= "fpetal3"></div>
                    <div className= "fpetal4"></div>
                    <div className= "fpetal5"></div>
                    <div className= "fpetal6"></div>
                    <div className= "fpetal7"></div>
                    <div className= "fpetal8"></div>
                    <div className= "fpetal9"></div>
                    <div className= "fpetal10"></div>
                    <div className= "fpetal11"></div>
                    <div className= "fpetal12"></div>
                    <div className= "fpetal13"></div>
                    <div className= "fpetal14"></div>
                </div>
            </div>
        )
    }
}

export default Flower;