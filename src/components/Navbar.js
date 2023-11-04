  import React, { Component } from "react";
  import { withRouter } from "react-router-dom";
  import { toast } from "react-toastify";
  import { Menu, Segment, Image, Label, Icon,Sidebar } from "semantic-ui-react";
  import Admin from "../abis/Admin.json";
  import { Link } from "react-router-dom";
  import SearchBar from "./SearchBar";
  import {Item } from "semantic-ui-react";
  import "./navbar.css";
  class Navbar extends Component {
    state = { activeItem: "home", role: -1, account: "", showQr: false};

    componentDidMount = async () => {
      const web3 = await window.web3;
      console.log(web3);
      const accounts = await web3.eth.getAccounts();
      if (accounts) {
        this.setState({ account: accounts[0] });
      }
      const networkId = await web3.eth.net.getId();
      const AdminData = await Admin.networks[networkId];
      if (AdminData) {
        const admin = await new web3.eth.Contract(Admin.abi, AdminData.address);
        const isEmployee = await admin?.methods?.isEmployee(accounts[0]).call();
        const isOrganizationEndorser = await admin?.methods
          ?.isOrganizationEndorser(accounts[0])
          .call();
        const owner = await admin?.methods?.owner().call();
        var role = -1;
        if (accounts[0] === owner) {
          role = 0;
        } else if (isEmployee) {
          role = 1;
        } else if (isOrganizationEndorser) {
          role = 2;
        }
        this.setState({ role });
      } else {
        toast.error("The Admin Contract does not exist on this network!");
      }
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    closeQRModal = () => {
      this.setState({ showQr: false });
    };


    render() {
      const { activeItem } = this.state;
      const roles = ["Admin", "Candidate", "Organization"];
      return (
        <>
          <Segment
            inverted
            style={{
              borderRadius: "0",
              boxShadow: "0 0 5px 0px black",
              background: "#F5F7FF",
            }}
          >
            <Menu
              style={{ marginLeft: "80px", border: "none" }}
              pointing
              inverted
              secondary
            >
              <Menu.Item
                as={Link}
                to="/"
                style={{ marginRight: "25px", padding: "0px" }}
              >
              
              </Menu.Item>
              <Menu.Item
                style={{ marginRight: "25px", padding: "0px", position: "absolute", left: 175, }}

                position="left"
              >
              <SearchBar />
              </Menu.Item>

              {this.state.role === 0 && (
             <Sidebar
                as={Menu}
                animation="overlay"
                width="thin"
                visible
                icon="labeled"
                vertical
                inverted
                style={{
                  background:"#111643",
                }}
              >
             <div
             as={Link} to="/" animation="overlay"
                  style={{
                    
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                    width: "150px",
                    borderRadius: "90%",
                    padding: "25px",
                    marginBottom: "-5px",
                    marginTop: "12px  ",
                  }}
                >
                  <Image src="https://companieslogo.com/img/orig/VRTU_BIG-6de44a1b.png?t=1603138555" />
                </div>
                
                <div  style={{marginTop:"20px",}}>
                <Item as={Link} to="/" name="Candidates" className="sidebar-item">
                  <i className="user circle icon"></i>
                  Candidates
                </Item>
                
                <Item as={Link} to="/all-organization-endorser" name="Organisation">
                  <i className="id card outline icon"></i>
                  Organisation
                </Item>
                <Item as={Link} to="/create-user" name="Create User">
                  <i className="user plus icon"></i>
                  Create User
                </Item>
                <Item as={Link} to="/notifications" name="Ping">
                  <i className="envelope outline icon"></i>
                  Ping
                </Item>
                </div>
              </Sidebar>
             )}

             {this.state.role === 1 && (
                <Sidebar
                as={Menu}
                animation="overlay"
                width="thin"
                visible
                icon="labeled"
                vertical
                inverted
              >
               <div
                  style={{ 
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                    width: "150px",
                    borderRadius: "100%",
                    padding: "25px",
                    marginBottom: "-5px",
                    marginTop: "12px  "
                  }}
                >
                  <Image src="https://companieslogo.com/img/orig/VRTU_BIG-6de44a1b.png?t=1603138555" />
                </div>
                <div style={{marginTop:"30px"}}>
                <Item as={Link} to="/" name="Profile">
                  <i className="user circle icon"></i>
                  Profile
                </Item>
                
                <Item as={Link} to="/update-profile" name="update-profile">
                  <i className="edit outline icon"></i>
                  update-profile
                </Item>
                <Item as={Link} to="/notifications" name="Ping">
                  <i className="envelope outline icon"></i>
                  Ping
                </Item>
                </div>
              </Sidebar>
              )}

              {this.state.role === 2 && (
                <Sidebar
                as={Menu}
                animation="overlay"
                width="thin"
                visible
                icon="labeled"
                vertical
                inverted
              >
             <div
                  style={{
                    
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                    width: "150px",
                    borderRadius: "100%",
                    padding: "25px",
                    marginBottom: "-5px",
                    marginTop: "12px  "
                    
                  }}
                >
                  <Image src="https://companieslogo.com/img/orig/VRTU_BIG-6de44a1b.png?t=1603138555" />
                </div>
                <div style={{marginTop:"30px"}}>
                <Item as={Link} to="/" name="Info Page">
                  <i className="address book icon"></i>
                  Info Page
                </Item>
                
                <Item as={Link} to="/endorse-skill" name="endorseskill">
                  <i className="building icon"></i>
                  endorse-skill
                </Item>

                <Item as={Link} to="/endorse-section" name="endorse-section">
                  <i className="user plus icon"></i>
                 endorse-section
                </Item>
                <Item as={Link} to="/notifications" name="Ping">
                  <i className="envelope outline icon"></i>
                  Ping
                </Item>
                </div>
               </Sidebar>
              )}

              {this.state.role === -1 && (
                
                <Sidebar
                as={Menu}
                animation="overlay"
                width="thin"
                visible
                icon="labeled"
                vertical
                inverted
              >
             <div
                  style={{
                    
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50px",
                    width: "150px",
                    borderRadius: "100%",
                    padding: "25px",
                    marginBottom: "-5px",
                    marginTop: "12px  "
                    
                  }}
                >
                  <Image src="https://companieslogo.com/img/orig/VRTU_BIG-6de44a1b.png?t=1603138555" />
                </div>
                <div style={{marginTop:"30px"}}>
               
                
                <Item as={Link} to="/" name="Request">
                  <i className="add user icon"></i>
                  Request
                </Item>

                <Item as={Link} to="/notifications" name="Ping">
                  <i className="envelope outline icon"></i>
                 Ping
                </Item>
                
                </div>
               </Sidebar>
              )} 

              <Menu.Item position="right">
                <Label style={{ color: "black", background: "white" }}>
                  <a
                  style={{ cursor: "pointer"}}
                  onClick={() => {if (this.state.showAccount) {
                    this.setState({ showAccount: false });
                  } else {
                    this.setState({ showAccount: true });
                  } }}
                  >
                    {this.state.role === -1 ? "No Role" : roles[this.state.role]}
                  </a>
                </Label>
                &nbsp;&nbsp;&nbsp;
                <div style={{ color: "lightblue" }} hidden={!this.state.showAccount}>
                  <em>
                    <small>{this.state.account}</small>
                  </em>
                </div>
              </Menu.Item>
            </Menu>
          </Segment>
        </>
      );
    }
  }
  
 
  export default withRouter(Navbar);