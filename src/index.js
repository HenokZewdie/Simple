import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
//import TodoList from "./TodoList";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

ReactDOM.render(<Main/>, document.getElementById("root"));
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
