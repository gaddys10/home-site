import React from "react";
import "./TheGround.css";

class TheGround extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div id="ground">
                <div className= "horizonBush0"></div>
                <div className= "horizonBush1"></div>
                <div className= "horizonBush2"></div>
                <div className= "horizonBush3"></div>
                <div className= "horizonBush4"></div>
                <div className= "horizonBush5"></div>
                <div className= "horizonBush6"></div>
                <div className= "horizonBush7"></div>
                <div className= "horizonBush8"></div>
                <div className= "horizonBush9"></div>
                <div className= "horizonBush10"></div>
                <div id = "grass"></div>
            </div>
        )
    }
}

export default TheGround;