import { IonContent, IonPage, useIonViewWillEnter } from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton } from "@ionic/react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Tab3.css";

import { Event } from "features/events";

const Tab3: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [events, setEvent] = useState<Event[]>([]);
  const token = localStorage.getItem("token");

  const Search = useCallback(async () => {
    const response = await fetch("http://localhost:8080/api/v1/search", {
      headers: {
        Authorization: `${token}`,
      },
      body: data,
    });
    const event_data = await response.json();
    console.log(event_data);
    setEvent(event_data);
  }, []);

  useEffect(() => {
    Search();
  }, [Search]);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText color="muted">
          <h2>Search Event</h2>
        </IonText>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <IonItem>
            <IonLabel>Title</IonLabel>
            <input {...register("title")} placeholder="Title" />
          </IonItem>
          <IonItem>
            <IonLabel>Start Date</IonLabel>
            <input {...register("startdate")} placeholder="YYYY-MM-DD" />
          </IonItem>
          <IonButton
            onClick={() => Search()}
            expand="block"
            type="submit"
            className="ion-margin-top"
          >
            Search
          </IonButton>
        </form>

        <IonText color="muted">
          <h2>Events Results</h2>
        </IonText>
        {events.map((event) => (
          <IonCard>
            <img src={event.photo} />
            <IonCardHeader>
              <IonCardSubtitle>{event.venue}</IonCardSubtitle>
              <IonCardTitle>{event.title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{event.start_date}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
