import { IonApp, IonButton, IonContent } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Component } from "react";
import DataStore from "../components/DataStore";
import "./ConnectToIoT.css";
import HomePage from "./HomePage";
declare var Paho: any;

interface Props {}
interface State {
  mqttStatus: string;
}

class ConnectToIoT extends Component<Props, State> {
  mqttClient: any = null;
  message: any = "";
  messageToSend: string = "Type your message here.";
  topic: string = "swen325/a3";
  clientId: string = "8ee6a2e72e864ee5a8ddff2deaeda3dd"; // this string must be unique to every client

  constructor(props: any) {
    super(props);
    this.state = {
      mqttStatus: "Disconnected",
    };
  }

  connect() {
    this.setState({ mqttStatus: "Connecting..." });

    /**
     * This will generate an error because we have not imported Paho as name
     * using import but this is okay since we have included paho-mqtt.js
     * in the index.html.
     * The solution to this issue to write an Ionic/angular wrapper to Paho MQTT.
     * Note that current available wrappers have issues with Ionic.
     */
    this.mqttClient = new Paho.MQTT.Client(
      "test.mosquitto.org",
      8080,
      "/mqtt",
      this.clientId
    );
    // set callback handlers
    this.mqttClient.onConnectionLost = this.onConnectionLost;
    this.mqttClient.onMessageArrived = this.onMessageArrived;

    // connect the client
    console.log("Connecting to mqtt via websocket");
    this.mqttClient.connect({
      timeout: 10,
      useSSL: false,
      onSuccess: this.onConnect,
      onFailure: this.onFailure,
    });
  }

  disconnect() {
    if (this.state.mqttStatus == "Connected") {
      this.setState({ mqttStatus: "Disconnecting..." });
      this.mqttClient.disconnect();
      this.setState({ mqttStatus: "Disconnected" });
    }
  }

  sendMessage() {
    if (this.state.mqttStatus == "Connected") {
      this.mqttClient.publish(this.topic, this.messageToSend);
    }
  }

  onConnect = () => {
    console.log("Connected");
    this.setState({ mqttStatus: "Connected" });

    // subscribe
    this.mqttClient.subscribe(this.topic);
  };

  onFailure = (responseObject: any) => {
    console.log("Failed to connect");
    this.setState({ mqttStatus: "Failed to connect" });
  };

  onConnectionLost = (responseObject: any) => {
    if (responseObject.errorCode !== 0) {
      this.setState({ mqttStatus: "Disconnected" });
    }
  };

  onMessageArrived = (message: any) => {
    console.log("Received message");
    this.message = message.payloadString;
    DataStore.addResponse(this.message);
  };

  setMessage = (message: any) => {
    this.messageToSend = message;
  };

  componentDidMount(){
      this.connect();
  }

  render() {
    return (
      <IonApp>
        <IonContent>
          <IonReactRouter>
            <IonButton className="connect">
              {this.state.mqttStatus}
            </IonButton>
          </IonReactRouter>

          <IonButton href={this.state.mqttStatus==='Connected'?"/home":"/"}>
            {this.state.mqttStatus==='Connected'?"Lesgo":"Wait.."}
          </IonButton>

        </IonContent>
      </IonApp>
    );
  }
}

export default ConnectToIoT;
