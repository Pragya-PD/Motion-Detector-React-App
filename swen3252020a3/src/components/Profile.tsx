import { IonAlert, IonCard, IonCardContent } from "@ionic/react";
import React, { Component } from "react";
import "./Profile.css";

interface Props {
    name: string;
    address: string;
}
interface State{

}

class Profile extends Component<Props,State>{
    static n:string;
    static addr:string;

    constructor(props:Props){
        super(props);
        Profile.n = this.props.name;
        Profile.addr = this.props.address;
    }
    render() {
        return (
            <IonCard>
                <IonCardContent className="name">
                    <b>{Profile.n}</b>
                </IonCardContent>
                <IonCardContent className="address">
                    <b>{Profile.addr}</b>
                </IonCardContent>
            </IonCard>
        );
    }
}

export default Profile;
