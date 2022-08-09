import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL = "http://192.168.18.12:9000/api";
// axios.defaults.baseURL = "https://api.storak.qa/api";
ReactDOM.render(<App />, document.getElementById("root"));
