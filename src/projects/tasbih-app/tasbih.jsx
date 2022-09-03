import { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
class Tasbih extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    if (this.state.count === 99) {
      this.setState({ count: (this.state.count = 0) });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleReset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  handleBack = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
      this.prevCount = this.state.count - 1;
    } else if (this.state.count === 0) {
      this.setState({ count: this.prevCount });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="counter_border">
          <div className="counter" onClick={this.handleClick}>
            <div className="counter_border1"></div>
            {this.state.count}

            <span>Counter</span>
          </div>
        </div>

        <div className="btns">
          <button className="btn reset" onClick={this.handleReset}>
            <i class="fa-solid fa-arrow-rotate-left"></i>
            <span>Reset</span>
          </button>
          <button className="btn count" onClick={this.handleClick}>
            <i class="fa-solid fa-sliders"></i>
            <span>Count</span>
          </button>
          <button className="btn back" onClick={this.handleBack}>
            <i class="fa-solid fa-arrow-left-long"></i>
            <span>Back</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Tasbih;
