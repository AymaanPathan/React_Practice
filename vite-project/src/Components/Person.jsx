/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable react/prop-types */
import { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      name: "bob",
    };
  }
  render() {
    return (
      <>
        <h1>hello from {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Aymaan" })}>
          Update Name
        </button>
        {this.props.children}
      </>
    );
  }
}
export default Person;
