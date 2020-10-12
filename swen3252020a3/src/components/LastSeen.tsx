import { IonAlert, IonCard, IonCardContent, IonText } from "@ionic/react";
import React, { Component } from "react";
import "./LastSeen.css";
import DataStore from "../components/DataStore";
import { readString } from "react-papaparse";

interface State {
  location: string;
  time: string;
}

interface Props {

}

class LastSeen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      location: "Calculating",
      time: "Calculating"
    };
  }

  calculate = () => {
    var array = DataStore.getResponses();
    let livingTime = new Array(),
      kitchenTime = new Array(),
      diningTime = new Array(),
      toiletTime = new Array(),
      bedroomTime = new Array();
    let livingSensor = new Array(),
      kitchenSensor = new Array(),
      diningSensor = new Array(),
      toiletSensor = new Array(),
      bedroomSensor = new Array();

    array.forEach((element: any) => {
      const results = readString(element);
      let result: any = results.data[0];
      console.log(result);

      if (result[1] === "living") {
        livingTime[livingTime.length] = result[0];
        livingSensor[livingSensor.length] = result[2];
      } else if (result[1] === "kitchen") {
        kitchenTime[kitchenTime.length] = result[0];
        kitchenSensor[kitchenSensor.length] = result[2];
      } else if (result[1] === "dining") {
        diningTime[diningTime.length] = result[0];
        diningSensor[diningSensor.length] = result[2];
      } else if (result[1] === "toilet") {
        toiletTime[toiletTime.length] = result[0];
        toiletSensor[toiletSensor.length] = result[2];
      } else if (result[1] === "bedroom") {
        bedroomTime[bedroomTime.length] = result[0];
        bedroomSensor[bedroomSensor.length] = result[2];
      }
    });

    let lastLivingSensor: string = livingSensor[livingSensor.length - 1];
    let lastKitchenSensor: string = kitchenSensor[kitchenSensor.length - 1];
    let lastDiningSensor: string = diningSensor[diningSensor.length - 1];
    let lastToiletSensor: string = toiletSensor[toiletSensor.length - 1];
    let lastBedroomSensor: string = bedroomSensor[bedroomSensor.length - 1];
    let listOfFinalStatuses: string[] = [
      lastLivingSensor,
      lastKitchenSensor,
      lastDiningSensor,
      lastToiletSensor,
      lastBedroomSensor,
    ];

    var room: string = " ";
    for (let i = 0; i < 5; i++) {
      let status: string = listOfFinalStatuses[i];
      if (status === "1") {
        room = this.getRoomName(i);
        break;
      }
    }

    if (room !== " ") {
      let lastTimeStamp: string;
      if (room === "Living") {
        lastTimeStamp = livingTime[livingTime.length - 1];
      } else if (room === "Kitchen") {
        lastTimeStamp = kitchenTime[kitchenTime.length - 1];
      } else if (room === "Dining") {
        lastTimeStamp = diningTime[diningTime.length - 1];
      } else if (room === "Toilet") {
        lastTimeStamp = toiletTime[toiletTime.length - 1];
      } else {
        lastTimeStamp = bedroomTime[bedroomTime.length - 1];
      }

      let time: string[] = lastTimeStamp.split(" ");
      let format: string[] = time[1].split(":");
      let hour: number = parseInt(format[0], 10);
      let minute: number = parseInt(format[1], 10);
      let second: number = parseInt(format[2], 10);

      this.setState({
          location:room,
          time:hour+":"+minute+":"+second
      })
    }
    else{

    }

  };

  getRoomName(i: number): string {
    if (i === 0) {
      return "Living";
    } else if (i === 1) {
      return "Kitchen";
    } else if (i === 2) {
      return "Dining";
    } else if (i === 3) {
      return "Toilet";
    } else {
      return "Bedroom";
    }
  }

  render() {
    return (
      <IonCard onClick={() => this.calculate()}>
        <IonCardContent>
          Last seen in the
          <IonText className="location"> {this.state.location} </IonText>
          at :
          <IonText className="time"> {this.state.time}. </IonText>
        </IonCardContent>

        <IonCardContent>
          <a className="emergency" href="tel:111">
            Emergency? Get Help
          </a>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default LastSeen;
