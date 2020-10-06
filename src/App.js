import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Channels from "./screens/Channels";
import Feedback from "./screens/Feedback";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import SignUp from "./screens/SignUp";
import Timeline from "./screens/Timeline";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Channels} />
      <Route path="/Channels/" exact component={Channels} />
      <Route path="/Feedback/" exact component={Feedback} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/Settings/" exact component={Settings} />
      <Route path="/SignUp/" exact component={SignUp} />
      <Route path="/Timeline/" exact component={Timeline} />
    </Router>
  );
}

export default App;

