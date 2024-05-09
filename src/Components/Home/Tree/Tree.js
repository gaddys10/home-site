import React from "react";

class Tree extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            appVersion: ''
        }
    }
    
    render(){
        return(
            <div id = "tree">
                <div id = "stem"></div>
                <div id = "stemHole"></div>
                <div id = "treeTop1"></div>
                <div id = "treeTop2"></div>
                <div id = "treeTop3"></div>
                <div id = "treeTop4"></div>
                <div id = "treeTop5"></div>
                <div id = "treeTop6"></div>
                <div id = "stemBranch"></div>
                <div id = "apple1"></div>
                <div id = "apple2"></div>
                <div id = "apple3"></div>
                <div id = "apple4"></div>
                <div className= "shadow2"> </div>
            </div>
        )
    }
}

export default Tree;

