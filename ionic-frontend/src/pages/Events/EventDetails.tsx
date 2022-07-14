import { IonContent, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton, IonHeader } from "@ionic/react";
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



const EventDetails: React.FC = () => {

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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="details-container">
        <div>
          <IonImg 
          src={'https://total-event.com/wp-content/uploads/2018/01/event-planning-microsoft-ignite.jpg'}
          className="image-details-image" 
          >
          </IonImg>
        </div>

        <div className="ion-padding">
          


        </div>

      </IonContent>
    </IonPage>
  );
};

export default EventDetails;