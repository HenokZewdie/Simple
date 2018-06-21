import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Register from "./Register"
import Product from "./Product"

//This is the Navigation for our links with the corresponding Route
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>ReactJS using JSX</h1>
                    <ul className="header">
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/product">Product</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route  exact path="/home" component={Home}/>
                        <Route  path="/stuff" component={Stuff}/>
                        <Route  path="/contact" component={Contact}/>
                        <Route  path="/register" component={Register}/>
                        <Route exact path='/' component={Home}/>
                        <Route path='/product' component={Product}/>

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;