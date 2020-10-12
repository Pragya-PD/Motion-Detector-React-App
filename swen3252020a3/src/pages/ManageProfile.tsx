import React, { Component } from "react";
import {
  IonApp,
  IonCard,
  IonCardContent,
  IonContent,
  IonInput,
  IonTextarea,
} from "@ionic/react";
import Profile from "../components/Profile";

interface Props {}
interface State {}

class ManageProfile extends Component<Props, State> {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonInput
              placeholder="Update Name"
              onIonInput={(e)=>{Profile.n=(e.target as HTMLInputElement).value}}>
            </IonInput>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>
              <IonInput
              placeholder="Update Address"
              onIonInput={(e)=>{Profile.addr=(e.target as HTMLInputElement).value}}> 
            </IonInput>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default ManageProfile;
