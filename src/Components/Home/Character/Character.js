import React from "react";
import "./Character.css";

class Character extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            appVersion: ''
        }
    }
    
    render(){
        return(
            <div id = "character">
                <div className="myhair1"></div>
                <div className="myhair2"></div>
                <div className="myhair3"></div>
                <div className="myhair4"></div>
                <div className="myhair5"></div>
                <div className="myhair6"></div>
                <div className="myhair7"></div>
                <div className="mylefteye"></div>
                <div className="myrighteye"></div>
                <div className="mynose"></div>
                <div className="mysmile"></div>
                <div className="myleftear"></div>
                <div className="myrightear"></div>
                <div className="myhead"></div>
                <div className="myhead_highlight"></div>
                <div className="neck"></div>
                <div className="neck_shadow"></div>
                <div className="mybody"></div>
                <div className="mybody_highlight"></div>
                <div className="legs"></div>
                <div className="leg_leftShadow"></div>
                <div className="leg_rightShadow"></div>
                <div className="left_sleeve"></div>
                <div className="left_arm"></div>
                <div className="left_arm_shadow"></div>
                <div className="right_arm"></div>
                <div className="right_arm_shadow"></div>
                <div className="right_forearm"></div>
                <div className="right_sleeve"></div>
                <div className="right_sleeve_shadow"></div>
                <div className="right_shoe"></div>
                <div className="left_cuff"></div>
                <div className="right_cuff"></div>
                <div className="left_shoe"></div> 
                <div className="shadow"></div>
            </div>
        )
    }
}

export default Character;