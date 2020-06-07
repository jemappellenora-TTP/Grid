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

  render() {
    return (
      <>
        <div id="buttons">
          <button onClick={this.addNewRow}>Add a row</button>
          <button onClick={this.addNewCol}>Add a Column</button>
          <button onClick={this.removeRow}>Remove a row</button>
          <button onClick={this.removeCol}>Remove a Column</button>
        </div>
        <span>Select a color:</span>
        <select onChange={this.changeColor}>
          <option value={this.state.defaultColor}>Please select a Color</option>
          <option value="red">Blue</option>          
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
      </>
    );
  }
}

export default Table;