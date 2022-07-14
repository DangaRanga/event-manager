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

const Tab3: React.FC = () => {

  //const { register, handleSubmit } = useForm();
  const [data, setData] = useState<any>({});
  const [events, setEvent] = useState<Event[]>();
  const [title, setTitle] = useState<string>();
  const [date, setDate] = useState<string>();
  
  const token = localStorage.getItem("token");

  interface Event{
    photo: string;
    venue: string;
    title: string;
    start_date: string;
  }
  
  function Search (event:SyntheticEvent){
    event.preventDefault()
    alert("event")
      
    let form_data = new FormData() 
    form_data.append('title', title as string);
    form_data.append('startdate', date as string);

    console.log(title)
    console.log(date)
 
    fetch("http://localhost:8080/api/v1/search", {
      method: "POST",
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
      .then(function (jsonResponse) {
        setEvent(jsonResponse);
        console.log(jsonResponse)
      })
      .catch(function (error) {
        console.log(error);
    });
    
  }


  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText color="muted">
          <h2>Search Event</h2>
        </IonText>
        <form >
          <IonItem>
            <IonLabel>Title</IonLabel>
            <input type={'text'} onChange={(event)=>{setTitle(event.target.value)}} placeholder="Title" />
          </IonItem>
          <IonItem>
            <IonLabel>Start Date</IonLabel>
            <input type={'text'} onChange={(event)=>{setDate(event.target.value)}} placeholder="YYYY-MM-DD" />
          </IonItem>
          <IonButton
            onSubmit={ Search}
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
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
