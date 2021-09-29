import React from "react";

class Product extends React.Component {
  line = "";
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p style={this.state}>{this.props.description}</p>
        <p>{this.line}</p>
        <button onClick={() => this.boxClick()}>increase size</button>
      </div>
    );
  }
  boxClick() {
    console.log("clicked");
  }
}

export default Product;
