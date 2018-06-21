
import React, { Component } from "react";

//This is a child props, you can find at Home.js line 14-16
class Hello2 extends Component {
    render(){
        return (
            <div>
                <button type={this.props.behavior}>{this.props.children}</button>
            </div>
        );
    }
}
export default Hello2






