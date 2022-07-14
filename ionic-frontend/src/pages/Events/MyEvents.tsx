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
  const [events, setEvents] = useState<any[]>();
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");

  useIonViewWillEnter(() => {
    const userID = JSON.parse(`${userData}`).id;
    fetch(`http://localhost:8080/api/v1/user/${userID}/events` + "", {
      method: "GET",
      headers: {
        //'X-CSRFToken': token
        Authorization: `${token}`,
      },
      credentials: "same-origin",
    })
      .then(function (response) {
        if (!response.ok) {
          alert("HTTP status " + response.status);
          return;
        }
        return response.json();
      })
      .then(function (jsonResponse) {
        setEvents(jsonResponse);
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
          {console.log(events?.length)}
          {events?.map((event) => {
            <div>
              <EventCard title={event.title} startDate={event.start_date} />
            </div>;
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};
