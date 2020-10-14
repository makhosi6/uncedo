import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import "./style.css";
import 'react-chat-elements/dist/main.css';
import Home from "./screens/Home";
import Sos from "./screens/Sos";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Timeline from "./screens/Timeline";
import Chat from "./screens/Chat";
import Nav from "../src/components/Nav";
import Last from "../src/screens/Last";
import CookiesBar from "./components/utili/CookiesBar";
// import Message from "./screens/Message";
// import Settings from "./screens/Settings";


export default function App() {
  return (
    <>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/help" exact component={Last} />
      <Route path="/chat/contacts" exact component={Chat} />
      <Route path="/chat/notifications" exact component={Chat} />
      <Route path="/chat/messages" exact component={Chat} />
      <Route path="/article/title-here-636348" exact component={Nav} />
      <Route path="/emergency/sos" exact component={Sos} />
      <Route path="/login/" exact component={Login} />
      <Route path="/sign-up/" exact component={SignUp} />
      <Route path="/topic" exact component={Timeline} />
      {/* <Route path="/settings/" exact component={Settings} /> */}
      {/* <Route path="/mssg" exact component={Message} /> */}
    </Router>
    <CookiesBar/>
    </>
    )};