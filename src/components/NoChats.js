import React, { Component } from "react";

export default class Nochats extends Component {
  render() {
    return (
      <div
        style={{
          display: "grid",
          textAlign: "center",
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"295px",
          color:"white",
        }}
      >
        <h1>No Chats</h1>
        <p>
          Feel free to discuss any matters the chats are end to end encrypted.
        </p>
      </div>
    );
  }
}
