import React, { Component } from "react";
import TableRow from "./TableRow";
export class Table extends Component {
    constructor() {
      super();
      this.state = {
        rows: 0,
        cells: 1,
      };
    }
    render() {
      return (
        <>
          <div id="buttons">
            <button>Add a row</button>
            <button>Add cells</button>
            <button>Remove a row</button>
            <button >Remove a cell</button>
          </div>
        </>
      );
    }
  }
  
  export default Table;