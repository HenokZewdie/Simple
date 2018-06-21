//This component simply shows the link with the external sources
import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Search More</h2>
                <p>Take me  <a href="http://www.google.com">Google</a>.
                </p>
            </div>
        );
    }
}

export default Contact;