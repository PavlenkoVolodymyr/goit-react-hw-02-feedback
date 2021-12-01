import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <div>
      <Container />
      <Feedback />
      <Statistics />
      <Notification />
    </div>
  );
}

export default App;
