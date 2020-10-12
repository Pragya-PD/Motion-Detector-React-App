import React, { Component } from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ConnectToIoT from './ConnectToIoT';
import DataStore from '../components/DataStore';
import { readString } from 'react-papaparse'
import "./CheckBatteryLevels.css"

interface Props {

}
interface State {
  living: string
  kitchen: string
  dining: string
  bathroom: string
  bedroom: string
}

class CheckBatteryLevels extends Component<Props, State>{
  private mqtt: ConnectToIoT;

  constructor(props: Props) {
    super(props);
    this.mqtt = new ConnectToIoT("");
    this.state = {
      living: "Calculating",
      kitchen: "Calculating",
      dining: "Calculating",
      bathroom: "Calculating",
      bedroom: "Calculating"
    }
  }

  componentDidMount() {
    this.mqtt.connect();
  }

  getBatteryLevels() {
    var array = DataStore.getResponses();
    let livingPerc = new Array(), kitchenPerc = new Array(), diningPerc = new Array(), toiletPerc = new Array(), bedroomPerc = new Array();
    array.forEach((element: any) => {
      const results = readString(element);
      let array: any = results.data[0];
      console.log(results.data[0])
      if (array[1] === 'living') {
        livingPerc[livingPerc.length] = array[3]
      } else if (array[1] === 'kitchen') {
        kitchenPerc[kitchenPerc.length] = array[3]
      } else if (array[1] === 'dining') {
        diningPerc[diningPerc.length] = array[3]
      } else if (array[1] === 'toilet') {
        toiletPerc[toiletPerc.length] = array[3]
      } else if (array[1] === 'bedroom') {
        bedroomPerc[bedroomPerc.length] = array[3]
      }
    });

    this.setState({
      living: livingPerc[livingPerc.length - 1],
      kitchen: kitchenPerc[kitchenPerc.length - 1],
      dining: diningPerc[diningPerc.length - 1],
      bathroom: toiletPerc[toiletPerc.length - 1],
      bedroom: bedroomPerc[bedroomPerc.length - 1]
    });
  }

  render() {
    return (
      <IonContent>
        <IonCard>
          <IonCardHeader class="ion-text-center" className="header">Battery Levels</IonCardHeader>
          {/* <IonButton onClick={()=>this.getBatteryLevels()}/> */}
        </IonCard>

        <IonCard>
          <IonCardHeader class="ion-text-center">Living</IonCardHeader>
          <IonCardContent class="ion-text-center" className="battery">{this.state.living}</IonCardContent>
          {/* <IonButton onClick={()=>this.getBatteryLevels()}/> */}
        </IonCard>

        <IonCard>
          <IonCardHeader class="ion-text-center">Kitchen</IonCardHeader>
          <IonCardContent class="ion-text-center" className="battery">{this.state.kitchen}</IonCardContent>
          {/* <IonButton onClick={()=>this.getBatteryLevels()}/> */}
        </IonCard>

        <IonCard>
          <IonCardHeader class="ion-text-center">Toilet</IonCardHeader>
          <IonCardContent class="ion-text-center" className="battery">{this.state.bathroom}</IonCardContent>
          {/* <IonButton onClick={()=>this.getBatteryLevels()}/> */}
        </IonCard>

        <IonCard>
          <IonCardHeader class="ion-text-center">Dining</IonCardHeader>
          <IonCardContent class="ion-text-center" className="battery">{this.state.dining}</IonCardContent>
          {/* <IonButton onClick={()=>this.getBatteryLevels()}/> */}
        </IonCard>

        <IonCard>
          <IonCardHeader class="ion-text-center">Bedroom</IonCardHeader>
          <IonCardContent class="ion-text-center" className="battery">{this.state.bedroom}</IonCardContent>
          {/* <IonButton onClick={()=>this.getBatteryLevels()}/> */}
        </IonCard>

        <IonContent class="ion-text-center">
          <IonButton
            className="calculate"
            onClick={() => this.getBatteryLevels()}>Calculate Battery{<br />}Percentages
         </IonButton>
        </IonContent>

      </IonContent>
    );
  }

};

export default CheckBatteryLevels;
