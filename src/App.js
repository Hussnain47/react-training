import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import MainContent from "./components/MainContent.js";
import Incrementbutton from "./components/Incrementbutton.js";
import Footer from "./components/Footer.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return {
          isLoading: false,
        };
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <Navbar />
        <MainContent />
        <Incrementbutton isLoading={this.state.isLoading} />
        <Footer />
      </div>
    );
  }
}

export default App;
