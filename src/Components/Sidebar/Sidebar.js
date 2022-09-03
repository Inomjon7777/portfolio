import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={`sidebar ${this.props.hide && "hide"}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>menu</h1>
          <button
            className="btn btn-danger"
            onClick={() => this.props.changeHide(true)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
