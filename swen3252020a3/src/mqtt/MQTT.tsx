import { Component } from "react";
declare var Paho:any

interface Props{

}
interface State{

}

class MQTT extends Component<Props,State>{
    static mqttStatus: string = 'Disconnected';
    static mqttClient: any = null;
    static message: any = '';
    static messageToSend: string = 'Type your message here.';
    static topic: string = 'swen325/a3';
    static clientId: string = '8ee6a2e72e864ee5a8ddff2deaeda3dd'; // this string must be unique to every client
  
    constructor(props:any) {
        super(props);
    }
  
    static connect() {
        MQTT.mqttStatus = 'Connecting...';
  
      /**
       * This will generate an error because we have not imported Paho as name
       * using import but this is okay since we have included paho-mqtt.js
       * in the index.html. 
       * The solution to this issue to write an Ionic/angular wrapper to Paho MQTT.
       * Note that current available wrappers have issues with Ionic.
       */ 
      MQTT.mqttClient = new Paho.MQTT.Client('test.mosquitto.org', 8080, '/mqtt', MQTT.clientId);
        // set callback handlers
        MQTT.mqttClient.onConnectionLost = MQTT.onConnectionLost;
        MQTT.mqttClient.onMessageArrived = MQTT.onMessageArrived;
  
        // connect the client
        console.log('Connecting to mqtt via websocket');
        MQTT.mqttClient.connect({timeout:10, useSSL:false, onSuccess:MQTT.onConnect, onFailure:MQTT.onFailure});
    }
  
    static disconnect() {
        if(MQTT.mqttStatus == 'Connected') {
            MQTT.mqttStatus = 'Disconnecting...';
            MQTT.mqttClient.disconnect();
            MQTT.mqttStatus = 'Disconnected';
        }
    }
  
    static sendMessage() {
        if(MQTT.mqttStatus == 'Connected') {
            MQTT.mqttClient.publish(MQTT.topic, MQTT.messageToSend);
        }
    }
  
    static onConnect = () => {
        console.log('Connected');
        MQTT.mqttStatus = 'Connected';
  
        // subscribe
        MQTT.mqttClient.subscribe(MQTT.topic);
    }
  
    static onFailure = (responseObject:any) => {
        console.log('Failed to connect');
        MQTT.mqttStatus = 'Failed to connect';
    }
  
  
    static onConnectionLost = (responseObject:any) => {
      if (responseObject.errorCode !== 0) {
        MQTT.mqttStatus = 'Disconnected';
      } 	
    }
  
    static onMessageArrived = (message:any) => {
     console.log('Received message');
     MQTT.message = message.payloadString;
    }

    static setMessage = (message:any) =>{
        MQTT.messageToSend = message;
    }
}

export default MQTT