import React, { Component } from "react";
import TableCol from "./TableCol";

export class TableRow extends Component {
  createCells = () => {
    let cols = [];
    for (let i = 0; i < this.props.cells; i++) {
      cols.push(<TableCol onClickChange={this.props.onClickChange} />);
    }
    return cols;
  };
  render() {
    return <tr>{this.createCells()}</tr>;
  }
}

export default TableRow;
