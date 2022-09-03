import { Component } from "react";
import Table from "./table";

class Tables extends Component {
  // th larni soni uchun funksiya yozildi
  lengthOfTh = (number) => {
    let thead = [];
    for (let j = 1; j < number; j++) {
      thead.push(<th>Column {j}</th>);
    }
    return thead;
  };

  // td lar soni uchun funksiya yozildi
  lengthOfTd = (number) => {
    let table = [];
    for (let j = 1; j < number; j++) {
      table.push(
        <tr>
          <td>Edrward {j}</td>
          <td>32</td>
          <td>London Park no. {j}</td>
          <td>London Park no. {j}</td>
          <td>London Park no. {j}</td>
          <td>London Park no. {j}</td>
          <td>London Park no. {j}</td>
          <td>London Park no. {j}</td>
          <td>London Park no. {j}</td>
        </tr>
      );
    }
    return table;
  };

  render() {
    return (
      <div className="table-box">
        <Table th={this.lengthOfTh} td={this.lengthOfTd} />
      </div>
    );
  }
}

export default Tables;
