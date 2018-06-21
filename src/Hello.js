
import React, { Component } from "react";
//This is a sample on how to use the property (aka props), You can find the message def at Home.js line 11
class Hello extends Component {
    render(){
        return (
            <div>
            <p>Hello, {this.props.message}!</p>
            </div>
        );
    }
}
export default Hello