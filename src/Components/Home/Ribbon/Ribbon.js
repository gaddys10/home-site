import React from "react";
import "./Ribbon.css";

class Ribbon extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className= "ribbon" style={{top: this.props.top + 'px'}}>
                    <a href="https://www.linkedin.com/in/syrus-gaddy-815ab169"> LinkedIn </a>
                    <a href={this.props.url} style={{left: this.props.left + 'px'}}> LinkedIn </a>
                </div>
                <div className= "ribbonfold"></div>
            </>
        )
    }
}

export default Ribbon;