import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import { useHistory } from "react-router";
import {
  IonText,
  IonItem,
  IonLabel,
  IonButton,
  IonTextarea,
} from "@ionic/react";
import { createOutline } from "ionicons/icons";
import { title } from "process";

//import { EventCard } from "features/events";
import React, { useState } from "react";
import styles from "./MyEvents.module.css";

export const MyEvents: React.FC = () => {
  interface Event {
    created_at: string;
    description: string;
    end_date: string;
    end_time: string;
    eventid: number;
    photo: string;
    start_date: string;
    start_time: string;
    status: string;
    title: string;
    user_id: number;
    venue: string;
    website_url: String;
  }
  const [events, setEvents] = useState<Event[]>();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");
  let eventlegnth: number = 0;

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
          {events?.map((_event) => {
            return (
              <IonCard>
                <div className={styles.cardContainer}>
                  <div className={styles.icon_outline}>
                    <IonIcon size="large" icon={createOutline} />
                  </div>
                  <div
                    onClick={() => {
                      history.push(`/event-details/${_event.eventid}`);
                    }}
                    className={styles.cardContent}
                  >
                    <IonCardHeader>
                      <IonCardTitle>{_event.title}</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>{_event.start_date}</IonCardContent>
                  </div>
                </div>
              </IonCard>
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};
