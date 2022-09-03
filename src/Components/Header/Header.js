import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  showProducts = () => {
    const products = this.props.basket;
    let listProducts = "";
    let allPrices = 0;
    products.map((v) => {
      listProducts += v.title + "\n";
    });

    listProducts += "All: " + products.length + "\n";

    alert(listProducts);
  };

  changeSearch = (v) => this.setState({ search: v });

  render() {
    const n = this.props.basket.length;
    console.log(this.state);

    return (
      <header className="shadow">
        <div className="container-fluid py-4 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src="https://d316acfc88wber.cloudfront.net/global/Online_stores/Logos-Uz/olcha%20800x450.png"
              width="240"
              height="100"
              alt="logo-white"
              class="w-60 h-7 object-contain"
            />
            <button
              className="ms-4 katalog"
              onClick={() => this.props.changeHide(false)}
            >
              Katalog
            </button>
            <div className="d-flex align-items-center justify-content-center ms-4 searchbar">
              <input
                value={this.state.search}
                onChange={(e) => this.changeSearch(e.target.value)}
              />
              <button className="btn" onClick={() => this.changeSearch("")}>
                x
              </button>
            </div>
          </div>

          <button
            className="btn btn-danger korzina"
            onClick={this.showProducts}
          >
            Korzina
            {(n != 0 && <span className="badge badge-dark">{n}</span>) || ""}
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
