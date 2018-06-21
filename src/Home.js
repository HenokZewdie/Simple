import React, { Component } from "react";
import Hello from './Hello'
import Hello2 from "./Hello2";

class Home extends Component {

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Hello message = "Sears PartsDirect can help with your dishwasher troubleshooting,
                whether your dishwasher won't start, doesn't drain or leaks on the floor.
                If your dishwasher is flashing an error code, our error code charts can help you diagnose the problem."/>
                <Hello2 behavior = "Submit">Submit_Child</Hello2><br />
                <Hello2 behavior = "Submit">Insert_Child</Hello2><br />
                <Hello2 behavior = "Submit">Grand_Child</Hello2><br />

                </div>
        );
    }
}

export default Home;