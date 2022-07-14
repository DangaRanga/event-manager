import { IonContent, IonPage, useIonViewWillEnter } from "@ionic/react";
import {
  IonText,
  IonItem,
  IonLabel,
  IonButton,
  IonTextarea,
} from "@ionic/react";

import { EventCard } from "features/events";
import React, { useState } from "react";
import styles from "./MyEvents.module.css";

export const MyEvents: React.FC = () => {
  const [event, setEvent] = useState<Event>();
  //const token = localStorage.getItem("token");

  useIonViewWillEnter(() => {
    fetch("http://localhost:8080/api/v1/events" + "", {
      method: "GET",
      /*headers: {
          //'X-CSRFToken': token
          Authorization: localStorage.getItem("token"),
        },*/
      credentials: "same-origin",
    })
      .then(function (response) {
        if (!response.ok) {
          alert("HTTP status " + response.status);
          return;
        }
        return response.json();
      })
      .then(function (jsonResponse: Event) {
        setEvent(jsonResponse);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className={styles.content_wrapper}>
          <EventCard title={"test event"} startDate={"August 20th"} />
        </div>
      </IonContent>
    </IonPage>
  );
};
