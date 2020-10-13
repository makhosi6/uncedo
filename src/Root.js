import React from "react";
import App from "./App.js";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Router>
        <Route path="/app" strict component={App} />
        <Route path="/login/" exact component={Login} />
        <Route path="/sign-up/" exact component={SignUp} />
      </Router>
    </div>
  );
}
