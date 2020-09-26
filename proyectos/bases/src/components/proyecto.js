import React, { Component, Fragment } from "react";

export default class proyecto extends Component {
  constructor(props) {
    super();
    this.state = { estado1: "valor", estado2: 3, estado3: false };
    //console.log("Ejecuntado constructor de proyecto");
  }

  render() {
    return (
      <div>
        <br />
        {this.props.nombre} con un presupuesto de {this.props.presupuesto}
      </div>
    );
  }
}
