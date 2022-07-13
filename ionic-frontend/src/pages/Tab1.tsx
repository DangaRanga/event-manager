import { IonContent, IonPage, useIonViewWillEnter } from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton } from "@ionic/react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg
} from "@ionic/react";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import './Tab1.css';



const Tab1: React.FC = () => {
  interface Event{
    created_at: string,
    description: string,
    end_date: string,
    end_time: string,
    eventid: number,
    photo: string,
    start_date: string,
    start_time: string,
    status: string,
    title: string,
    user_id: number,
    venue: string,
    website_url: String
  }

  const [event, setEvent] = useState<Event>();
  const token = localStorage.getItem("token");

  
  
  return (
    <IonPage>
      <IonContent className="ion-padding details-container">
        <div >
          <IonImg src={'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg'}>
          </IonImg>
        </div>
        <div>
          


        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
