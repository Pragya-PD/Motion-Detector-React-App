import React from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import MQTT from '../../src/MQTT'

const Tab1: React.FC = () => {
  return (
    <IonApp>
  <IonHeader>
    <IonToolbar>
      <IonTitle>MQTT Tutorial</IonTitle>
    </IonToolbar>
  </IonHeader>

<IonContent>
  <IonCard>
    <IonCardContent>Status: <b>{MQTT.mqttStatus}</b></IonCardContent>
  </IonCard>

  <IonButton onClick={MQTT.connect} expand="block">Connect</IonButton>
  <IonButton onClick={MQTT.disconnect} expand="block">Disconnect</IonButton>

  <IonCard>
    <IonCardHeader>Message Received:</IonCardHeader>
    <IonCardContent>{MQTT.message}</IonCardContent>
  </IonCard>

  <IonCard>
      <IonCardHeader>Message to Send:</IonCardHeader>
      <IonTextarea onIonChange={e=>MQTT.setMessage(e.detail.value!)}></IonTextarea>
  </IonCard>

  <IonButton onClick={MQTT.sendMessage} expand="block">Send Message</IonButton>
</IonContent>
</IonApp>
  );
};

export default Tab1;
