import { Component } from "react";
import "./assets/styles/App.css";
import Header from "./Components/Header/Header";
import ProductCard from "./Components/ProductCard/ProductCard";
import Sidebar from "./Components/Sidebar/Sidebar";

const dataProducts = [
  {
    id: 1,
    productImg:
      "https://olcha.uz/image/200x200/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName: "Smartfoniy",
    price: "3 290 000",
    priceMonth: "322 000",
    title: "Xiaomi Redmi 11 4/128GB Sea Blue",
  },
  {
    id: 2,
    productImg:
      "https://olcha.uz/image/200x200/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName: "Smartfoniy",
    price: "5 290 000",
    priceMonth: "222 000",
    title: "Xiaomi Redmi 12 4/128GB Sea Blue",
  },
  {
    id: 3,
    productImg:
      "https://olcha.uz/image/200x200/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName: "Smartfoniy",
    price: "2 290 000",
    priceMonth: "222 000",
    title: "Xiaomi Redmi 10 4/128GB Sea Red",
  },
  {
    id: 4,
    productImg:
      "https://olcha.uz/image/200x200/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName: "Smartfoniy",
    price: "2 790 000",
    priceMonth: "222 000",
    title: "Xiaomi Redmi 10 8/128GB Sea Black",
  },
  {
    id: 5,
    productImg:
      "https://olcha.uz/image/200x200/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName: "Smartfoniy",
    price: "2 290 000",
    priceMonth: "222 000",
    title: "Xiaomi Redmi 10 8/128GB Sea White",
  },
  {
    id: 6,
    productImg:
      "https://olcha.uz/image/200x200/products/rEES4fDb0cYy8rm4TsLWVIoh1FQeCHDj7WIT4d977eQpHrVrxNQwJxKJVDzL.",
    groupName: "Smartfoniy",
    price: "2 290 000",
    priceMonth: "222 000",
    title: "Xiaomi Redmi 10 8/128GB Sea Green",
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      basket: [],
      hide: false,
    };
  }

  changeHide = (v) => this.setState({ hide: v });

  buy = (product) => {
    console.log("Sotib olishga tanlandi");
    console.log(product);

    this.setState((state) => {
      let arr = [...state.basket];
      arr.push(product);
      return { basket: arr };
    });
  };

  render() {
    console.log(this.state.basket);
    return (
      <div>
        {/* Bu joyda Sidebar bo'ladi */}
        <Sidebar changeHide={this.changeHide} hide={this.state.hide} />

        {/*Bu joyda sahifani header qismi qo'yilgan*/}
        <Header basket={this.state.basket} changeHide={this.changeHide} />

        {/*Bu joyda mahsulotlar ko'rsatilgan*/}
        <section id="products" className="py-3">
          <div className="container d-flex justify-content-between">
            <div className="row">
              {dataProducts.map((v, i) => (
                <div
                  key={v.id}
                  // col-sm-6 col-md-4 col-lg-6
                  className="col-2 productCard"
                >
                  <ProductCard data={v} buy={() => this.buy(v)} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
