import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import "./style.css";
import 'react-chat-elements/dist/main.css';
import Home from "./screens/Home";
import Sos from "./screens/Sos";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import SignUp from "./screens/SignUp";
import Timeline from "./screens/Timeline";
import Message from "./screens/Message";
import Chat from "./screens/Chat";
import Nav from "../src/components/Nav";
import Speeddial from "./components/utili/Speaddial";


function App() {
  return (
    <>
    <Nav/>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/mssg" exact component={Message} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/nav" exact component={Nav} />
      <Route path="/emergency/sos" exact component={Sos} />
      <Route path="/login/" exact component={Login} />
      <Route path="/settings/" exact component={Settings} />
      <Route path="/sign-up/" exact component={SignUp} />
      <Route path="/Timeline/" exact component={Timeline} />
    </Router>
    </>
  );
}

export default App;

