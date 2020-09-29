import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="text-center">
        <h1> {this.props.titulo}</h1>
      </header>
    );
  }
}
