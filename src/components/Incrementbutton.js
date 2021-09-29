import React from "react";

class Incrementbutton extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  logInorOut() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let buttontext = this.state.isLoggedIn ? "Log Out" : "Log In";
    return (
      <div>
        <button onClick={() => this.logInorOut()}>{buttontext}</button>
      </div>
    );
  }
}

export default Incrementbutton;
