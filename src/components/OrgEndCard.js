import React, { Component } from "react";
import "./OrgEndCard.css";
import OrgEnd from "../abis/OrganizationEndorser.json";
import { Card, Grid } from "semantic-ui-react";

export default class OrgEndCard extends Component {
  state = {
    orgEndInfo: {},
    allEmployeesInOrg: [],
  };

  componentDidMount = async () => {
    const web3 = window.web3;
    const OrgEndContract = await new web3.eth.Contract(
      OrgEnd.abi,
      this.props.OrgEndContractAddress
    );

    const orgEndData = await OrgEndContract.methods
      .getOrganizationInfo()
      .call();
    const orgEndInfo = {
      ethAddress: orgEndData[1],
      name: orgEndData[0],
      location: orgEndData[2],
      description: orgEndData[3],
    };

    const employeeCount = await OrgEndContract.methods.totalEmployees().call();

    const allEmployeesInOrg = await Promise.all(
      Array(parseInt(employeeCount))
        .fill()
        .map((ele, index) =>
          OrgEndContract.methods.getEmployeeByIndex(index).call()
        )
    );
    this.setState({ orgEndInfo, allEmployeesInOrg });
  };

  render() {
    return (
      <Grid columns={1} stackable>
        <Grid.Column>
      <Grid.Row>
        
          <Card className="organization-card">
        <Card.Content>
        <span style={{borderColor:"black"}}>{this.state.orgEndInfo?.name}</span>
          <Card.Header>
         
            
            <small>{this.state.orgEndInfo?.ethAddress}</small>
          </Card.Header>
          
          <br></br>
          <div>
            <p>
              <em>Location : </em>
              <span style={{ color: "black" }}>
                {this.state.orgEndInfo?.location}
              </span>
            </p>
          </div>
          <br />
          <div>
            <em>Description :</em>
            <p style={{ color: "black" }}>
              {this.state.orgEndInfo?.description}
            </p>
          </div>
          <br />
          <div>
            <p>
              <em>candidate Count: </em>
              <span style={{ color: "black" }}>
                {this.state.allEmployeesInOrg?.length}
              </span>
            </p>
          </div>
        </Card.Content>
      </Card>
      </Grid.Row>
        </Grid.Column>
        
     
    </Grid>
      
    );
  }
}
