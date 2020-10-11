import { IonApp, IonButton, IonCard, IonContent } from "@ionic/react";
import React, { Component } from "react";
import "./ConnectToIoT.css"

interface Props{

}
interface State{

}
class ConnectToIot extends Component<Props, State>{
   render(){
       return(
        <IonApp>
            <IonContent>
                <IonButton className="connect">Connect to the App</IonButton>
            </IonContent>
        </IonApp>
       )
   }
}

export default ConnectToIot
