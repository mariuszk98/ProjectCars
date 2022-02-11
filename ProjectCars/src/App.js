import React, { Component } from "react";
import MainContainers from "./Containers/MainContainers/MainContainers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import CarInfo from "./Components/CarInfo/CarInfo";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/about" component={About} />
      <Route path="/car/:id" component={CarInfo} />
      <Route path="/" exact component={MainContainers} />
    </Router>
  );
}
