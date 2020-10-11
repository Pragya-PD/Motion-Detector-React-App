import { IonAlert, IonCard, IonCardContent } from "@ionic/react";
import React, { Component } from "react";
import './Profile.css'

interface Props {
    name: string,
    address: string
}

const Profile: React.FC<Props> = (props) => {
    return (
        <IonCard>
            <IonCardContent className="name"><b>{props.name}</b></IonCardContent>
            <IonCardContent className="address"><b>{props.address}</b></IonCardContent>
        </IonCard>
    );
};

export default Profile