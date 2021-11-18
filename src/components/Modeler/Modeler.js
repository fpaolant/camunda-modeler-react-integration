import React, { Component } from "react";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import { emptyBpmn } from "./bpmns/empty.bpmns";
import styles from "./Modeler.module.css";

export default class Modeler extends Component {
  modelerContainerRef;
  modeler = null;

  constructor(props) {
    super(props);
    this.modelerContainerRef = React.createRef();
  }

  componentDidMount() {
    const container = this.modelerContainerRef.current;
    this.modeler = new BpmnJS({ container });
    this.newBpmnDiagram();
  }

  newBpmnDiagram() {
    this.openBpmnDiagram(emptyBpmn);
  }

  openBpmnDiagram = (xml) => {
    this.modeler.importXML(xml, (error) => {
      if (error) {
        return console.log("fail import xml");
      }
      var canvas = this.modeler.get("canvas");
      canvas.zoom("fit-viewport");
    });
  };

  componentWillUnmount() {
    this.modeler.destroy();
  }

  render() {
    return (
      <div className={styles.container} ref={this.modelerContainerRef}></div>
    );
  }
}
