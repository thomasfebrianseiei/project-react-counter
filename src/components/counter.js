import React from "react";

// component counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    if (this.state.count <= 0) {
      alert("Oh tidak bisa");
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  
  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={this.incrementCount}>
          +
        </button>
        <button className="btn" onClick={this.decrementCount}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
