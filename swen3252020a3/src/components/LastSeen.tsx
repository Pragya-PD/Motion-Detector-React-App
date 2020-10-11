import { IonAlert, IonCard, IonCardContent, IonText } from "@ionic/react";
import React, { Component } from "react";
import './LastSeen.css'

interface State { 

}

interface Props {
    location: string,
    time: string
}

class LastSeen extends Component<Props,State>{

    calculateTimeElaspsed = ()=>{
        return new Date().getMinutes()
    }

    render(){
        return(
            <IonCard>
                <IonCardContent>
                Last seen in the 
                <IonText className="location"> {this.props.location} </IonText> 
                at 
                <IonText className="time"> {this.props.time}. </IonText>
                <br/>
                ({this.calculateTimeElaspsed()} minute(s) ago)
                </IonCardContent>

                <IonCardContent>
                <a className="emergency" href="tel:111">Emergency? Get Help</a>
                </IonCardContent>

            </IonCard>
        )
    }
};

export default LastSeen