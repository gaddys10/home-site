import React, {useEffect, useState} from "react";
import "./Character.css";

function isSafari() {
    let chromeFlag = navigator.userAgent.indexOf('Chrome');
    let safariFlag = navigator.userAgent.indexOf('Safari');
    return (chromeFlag === -1 && safariFlag !== -1) ? "right_forearm_safari" : "right_forearm"
}

function Character() {

    const [waveClass, setWaveClass] = useState('')

    useEffect(() => {

        setWaveClass('speech-bubble-intro')

        const timer = setTimeout(() => {
            setWaveClass('');
        }, 6000)

        return () => clearTimeout(timer)
    }, []);
    
    return(
        <div id = "character">
            {/* Hair */}
            <div className="myhair1"></div>
            <div className="myhair2"></div>
            <div className="myhair3"></div>
            <div className="myhair5"></div>
            <div className="myhair6"></div>
            <div className="myhair7"></div>
            <div className="myhair4"></div>
            {/* Head  */}
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
            {/* Body  */}
            <div className="mybody"></div>
            <div className="mybody-pocket"></div>
            <div className="mybody_highlight"></div>
            {/* Legs  */}
            <div className="legs"></div>
            <div className="leg_leftShadow"></div>
            <div className="leg_rightShadow"></div>
            <div className="right_shoe"></div>
            <div className="left_cuff"></div>
            <div className="right_cuff"></div>
            <div className="left_shoe"></div> 
            {/* Arms  */}
            <div className="left_sleeve"></div>
            <div className="left_arm"></div>
            <div className="left_arm_shadow"></div>
            <div className="right_arm"></div>
            <div className="right_arm_shadow"></div>
            <div className={isSafari()}></div>
            <div className="right_sleeve"></div>
            <div className="right_sleeve_shadow"></div>
            {/* Shadow  */}
            <div className="shadow"></div>
            {/* Speech Bubble  */}
            <div className={`speech-bubble ${waveClass}`}>
                <div className="bubble-tail"></div>
                <p className="speech-text">Hello! <br /><br /> Welcome to my home page!</p>
            </div>
        </div>
    )
}

export default React.memo(Character);