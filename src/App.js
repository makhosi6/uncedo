import React from "react";
import "./App.css";
import "./style.css";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import Settings  from "./pages/Settings";
import Home from "./pages/Home";
import Topic from "./pages/Topic";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/topic" component={Topic} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </>
  );
}

export default App;

