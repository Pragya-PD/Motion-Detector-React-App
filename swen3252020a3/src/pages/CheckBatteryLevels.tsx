import React, { Component } from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ConnectToIoT from './ConnectToIoT';
import DataStore from '../components/DataStore';

interface Props{

}
interface State{

}

class CheckBatteryLevels extends Component<Props,State>{
  private mqtt:ConnectToIoT;

  constructor(props:Props){
    super(props);
    this.mqtt = new ConnectToIoT("");
  }

  componentDidMount(){
    this.mqtt.connect();
  }

  print(){
      var array = DataStore.getResponses();
      array.forEach((element: any) => {
        console.log(element);
      });
  }

  render(){
    return (
        <IonContent>
          <IonButton onClick={()=>this.print()}>
            Press ME
          </IonButton>
        </IonContent>
    );
  }
  
};

export default CheckBatteryLevels;
