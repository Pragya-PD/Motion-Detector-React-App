import React from "react";
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

const Tab1: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <Profile
          name="Richard Johsnon"
          address="23 Carluke Street, Paparangi"
        />
        <LastSeen location="Bedroom" time="14.25.21" />

        <IonReactRouter>
          <IonCard className="card">
            <IonCardContent>
              <IonButton fill="clear" expand="full" className="button" href="/managebatterylevels">
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
    </IonApp>
  );
};

export default Tab1;
