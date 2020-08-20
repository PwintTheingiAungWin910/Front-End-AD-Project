import React, { Component } from "react";
import Header from "../Components/Headers/Header";
import DepartmentHeadDelegate from "../Components/DepartmentHeadDelegate";
import DepartmentHeadCollection from "../Components/DepartmentHeadCollection";
import DepartmentHeadEmployee from "../Components/DepartmentHeadEmployee";
import DepartmentHeadRep from "../Components/DepartmentHeadRep";
import DepartmentHeadApproval from "../Components/DepartmentHeadApproval";
import "../Components/ManagerPartition.css";

class ManageDepartment extends Component {
  constructor() {
    super();
    this.state = {
      staff: [
        { name: "Bianca Cao " },
        { name: "Daryl Kouk" },
        { name: "Jane Lee" },
        { name: "Martin Ng" },
        { name: "Theingi Aung Win" },
        { name: "Wayne Khine Myo" },
      ],
      requisition: [
        {
          Id: 1,
          dateOfRequest: "08 / 08 / 2020",
          dateOfAuthorizing: "08 / 08 / 2020",
          status: "pending",
          comment: "",
          EmployeeId: "Bianca Cao",
          AuthorizerId: "",
        },
        {
          Id: 2,
          dateOfRequest: "08 / 08 / 2020",
          dateOfAuthorizing: "08 / 08 / 2020",
          status: "pending",
          comment: "",
          EmployeeId: "Daryl Kouk",
          AuthorizerId: "",
        },
        {
          Id: 3,
          dateOfRequest: "08 / 08 / 2020",
          dateOfAuthorizing: "08 / 08 / 2020",
          status: "pending",
          comment: "",
          EmployeeId: "Jane Lee",
          AuthorizerId: "",
        },
        {
          Id: 4,
          dateOfRequest: "08 / 08 / 2020",
          dateOfAuthorizing: "08 / 08 / 2020",
          status: "pending",
          comment: "",
          EmployeeId: "Jane Lee",
          AuthorizerId: "",
        },
        {
          Id: 5,
          dateOfRequest: "08 / 08 / 2020",
          dateOfAuthorizing: "08 / 08 / 2020",
          status: "pending",
          comment: "",
          EmployeeId: "Jane Lee",
          AuthorizerId: "",
        },
      ],
      department: {
        name: "hello",
        rep: "Martin",
        delegate: "Bianca",
        nextCollection: "08/08/2020",
        collectionPt: "University Hospital",
      },
    };
  }

  render() {
    return (
      <div>
        <div className="toppane">
          <Header />
          <h1>LOGIC UNIVERSITY</h1>
          <h1>DEPARTMENT INFORMATION</h1>
        </div>
        <div className="leftpane">
          <h4>Your People</h4>
          <div>
            <DepartmentHeadDelegate delegate={this.state.department.delegate} />
          </div>
          <div>
            <DepartmentHeadEmployee staff={this.state.staff} />
          </div>
          <div>
            <DepartmentHeadRep rep={this.state.department.rep} />
          </div>
        </div>
        <div className="middlepane">
          <h4>Your Tasks</h4>
          <DepartmentHeadApproval requisition={this.state.requisition} />
        </div>
        <div className="rightpane">
          <h4>Your Logistics</h4>
          <DepartmentHeadCollection department={this.state.department} />
        </div>
      </div>
    );
  }
}

export default ManageDepartment;