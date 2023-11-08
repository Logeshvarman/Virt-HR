import React, { Component } from "react";
import { toast } from "react-toastify";
import EmployeeCard from "../../components/EmployeeCard";
import "./Admin.css";
import Admin from "../../abis/Admin.json";
import LoadComp from "../../components/LoadComp";
// import { Card } from 'semantic-ui-react';


export default class AllEmployees extends Component {
  state = {
    employees: [],
    loadcomp: false,
  };

  componentDidMount = async () => {
    this.setState({ loadcomp: true });
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const AdminData = await Admin.networks[networkId];
    if (AdminData) {
      const admin = await new web3.eth.Contract(Admin.abi, AdminData.address);
      const employeeCount = await admin?.methods.employeeCount().call();

      const employees = await Promise.all(
        Array(parseInt(employeeCount))
          .fill()
          .map((ele, index) =>
            admin.methods.getEmployeeContractByIndex(index).call()
          )
      );
      this.setState({ employees });
    } else {
      toast.error("The Admin Contract does not exist on this network!");
    }
    this.setState({ loadcomp: false });
  };

  render() {
    return this.state.loadcomp ? (
      <LoadComp />
    ) : (
      <div className="admin">
       
        <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <h1>All Registered Candidates </h1>
    </div>
    <div class="flip-box-back">
      <h2>Back Side</h2>
    </div>
  </div>
  
</div>
        
        <br/>
        <br/>
        <div className="card-grid">
             {this.state.employees?.map((employee, index) => (
          
            <EmployeeCard key={index} employeeContractAddress={employee} />
          
          
          ))}
        
           <br />
        </div>
      </div>
    );
  }
}
