import React from "react";
import "./Ribbon.css";

function Ribbon({top, left, url}) {
    return (
        <>
            <div className= "ribbon" style={{top: `${top}px`}}>
                <a href="https://www.linkedin.com/in/syrus-gaddy-815ab169"> LinkedIn </a>
                <a href={url} style={{left: `${left}px`}}> LinkedIn </a>
            </div>
            <div className= "ribbonfold"></div>
        </>
    )
}

export default Ribbon;