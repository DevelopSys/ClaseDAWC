import React, { Component } from "react";

export default class componenteComunicar extends Component {
  constructor() {
    super();
    console.log("Elemento insertado en el DOM");
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p>
          En esta parte se renderizará un elemento que ha sido pasado por prop{" "}
          {this.props.elemento}
        </p>
      </div>
    );
  }
}
