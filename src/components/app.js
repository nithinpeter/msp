import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import "./app.styl";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content/>
        <Footer />
      </div>
    );
  }
}

export default App;
