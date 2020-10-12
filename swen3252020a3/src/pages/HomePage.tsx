import React, { Component } from "react";
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
} from "@ionic/react";
import "./HomePage.css";
import Profile from "../components/Profile";
import LastSeen from "../components/LastSeen";
import { IonReactRouter } from "@ionic/react-router";
import ConnectToIoT from "./ConnectToIoT";

interface Props{

}
interface State{
  
}

class Tab1 extends Component <Props,State>{

  componentDidMount(){
    var mqtt = new ConnectToIoT("").connect();
  }

  render(){
    return (
      <IonContent>
        <Profile
          name="Richard Johsnon"
          address="23 Carluke Street, Paparangi"
        />
        <LastSeen location="Bedroom" time="14.25.21" />

        <IonReactRouter>
          <IonCard className="card">
            <IonCardContent>
              <IonButton fill="clear" expand="full" className="button" href="/checkbatterylevels">
                Check Battery Levels
              </IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="card">
            <IonCardContent>
            <IonButton fill="clear" expand="full" className="button" href="/trackmovements">
            Track Richard's Movements
              </IonButton>
            </IonCardContent>
          </IonCard>

          <IonCard className="card">
            <IonCardContent>
            <IonButton fill="clear" expand="full" className="button" href="/managerooms">
            Manage Rooms
              </IonButton>
            </IonCardContent>
          </IonCard>

        </IonReactRouter>
      </IonContent>
  );
  }
  
};

export default Tab1;
