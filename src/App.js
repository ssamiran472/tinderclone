import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      {/* <h1> TINDER clone app </h1> */}
      <Router>
        {/* Header  */}
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* Tinder cards */}

        {/* Buttons below tinder cards */}
        {/* Chats screen */}
        {/* individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
