import { IonContent, IonPage, useIonViewWillEnter } from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton } from "@ionic/react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import React, { SyntheticEvent, useCallback, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Tab3.css";

import { Event } from "features/events";
import { getFormData } from "util/formUtil";
import { searchEvent } from "features/events";

const Tab3: React.FC = () => {
  //const { register, handleSubmit } = useForm();
  const [data, setData] = useState<any>({});
  const [events, setEvent] = useState<Event[]>();
  const [title, setTitle] = useState<string>();
  const [date, setDate] = useState<string>();

  const token = localStorage.getItem("token");

  interface Event {
    photo: string;
    venue: string;
    title: string;
    start_date: string;
  }

  const search = (data: any) => {
    let params = {
      title: data.title,
      startdate: data.startdate,
    };

    searchEvent(params, token);
  };

  const onSubmit = (data: any) => {
    search(data);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText color="muted">
          <h2>Search Event</h2>
        </IonText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel>Title</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder="Title"
            />
          </IonItem>
          <IonItem>
            <IonLabel>Start Date</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setDate(event.target.value);
              }}
              placeholder="YYYY-MM-DD"
            />
          </IonItem>
          <IonButton expand="block" type="submit" className="ion-margin-top">
            Search
          </IonButton>
        </form>

        <IonText color="muted">
          <h2>Events Results</h2>
        </IonText>
        {events.map((event: Event) => (
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
