import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import HomePage from "./pages/HomePage";
import CheckBatteryLevels from "./pages/CheckBatteryLevels";
import TrackMovements from "./pages/TrackMovements";
import ManageRooms from "./pages/ManageRooms";
import ConnectToIot from "./pages/ConnectToIoT";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonContent>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/connectToIoT" component={ConnectToIot} exact={true} />
          <Route path="/home" component={HomePage} exact={true} />
          <Route
            path="/checkbatterylevels"
            component={CheckBatteryLevels}
            exact={true}
          />
          <Route
            path="/trackmovements"
            component={TrackMovements}
            exact={true}
          />
          <Route path="/managerooms" component={ManageRooms} exact={true} />
          <Route
            path="/"
            render={() => <Redirect to="/connectToIoT" />}
            exact={true}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonContent>
  </IonApp>
);

export default App;
