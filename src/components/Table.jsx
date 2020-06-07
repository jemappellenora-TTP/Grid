import React, { Component } from "react";
import TableRow from "./TableRow";

export class Table extends Component {
  constructor() {
    super();
    this.state = {
      rows: 0,
      cells: 1,
      defaultColor: "blue",
      selectedColor: null,
    };
  }

  addRows = () => {
    this.setState({ rows: this.state.rows + 1 });
  };
  addCollumns = () => {
    this.setState({ cells: this.state.cells + 1 });
  };
  removeRows = () => {
    if (this.state.rows > 0) {
      this.setState({ rows: this.state.rows - 1 });
    } else {
    // if it is zero
      this.setState({ rows: 0, cells: 1 });
    }
  };
  removeCollumns = () => {
    if (this.state.cells > 0) {
      this.setState({ cells: this.state.cells - 1 });
    } else {
    // if it is zero
      this.setState({ cells: 1, rows: 0 });
    }
  };

  selectacolor = (e) => {
    this.setState({ selectedColor: e.target.value });
  };
  onClickChange = (e) => {
    e.target.style.backgroundColor = this.state.selectedColor;
  };
  createRows = () => {
    let rows = [];
    for (let i = 0; i < this.state.rows; i++) {
      rows.push(
        <TableRow cells={this.state.cells} onClickChange={this.onClickChange} />
      );
    }
    return rows;
  };
  render() {
    return (
      <>
        <div id="buttons">
          <button onClick={this.addRows}>Add a row</button>
          <button onClick={this.addCollumns}>Add a cells</button>
          <button onClick={this.removeRows}>Remove a row</button>
          <button onClick={this.removeCollumns}>Remove a cells</button>
        </div>
        <span>Select A color:</span>
        <select onChange={this.selectacolor}>
          <option value={this.state.defaultColor}>Please select a Color</option>
          <option value="red">Blue</option>          
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <table>{this.createRows()}</table>
      </>
    );
  }
}

export default Table;
