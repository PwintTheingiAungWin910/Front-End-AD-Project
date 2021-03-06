import React, { Component } from "react";
import "./InventoryTable.css";

class DepartmentHeadEmployee extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <table className="componentTable">
          <tr className="tableHeader">
            <th> Employees under your care</th>
          </tr>
          <div style={{ overflowY: "scroll", height: "100px" }}>
            {this.props.employee.map((x) => {
              if (x.role != "HEAD") {
                return (
                  <tr className="tableRow">
                    <td> {x.name}</td>
                  </tr>
                );
              }
            })}
          </div>
        </table>
      </div>
    );
  }
}

export default DepartmentHeadEmployee;
