import { IonContent, IonIcon, IonPage, useIonViewWillEnter } from "@ionic/react";
import { IonText } from "@ionic/react";
import { IonImg } from "@ionic/react";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import './Tab1.css';

import '../components/BackButton';
import BackButton from "../components/BackButton";
import { locate, location, locationOutline } from "ionicons/icons";


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
  //const token = localStorage.getItem("token");

  useIonViewWillEnter(()=>{

    fetch("http://localhost:8080/api/v1/events/5"+'', {
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

  },[])

  
  
  return (
    <IonPage>
      <IonContent className="details-container">
        <BackButton></BackButton>
        <div  className="event-details-top">
          <div className="event-details-mobile event-details-title">
            <IonText color="muted">
              <h1>{event?.title} </h1>
            </IonText>
          </div>

          
          <IonImg 
            src={event?.photo}
            className="image-details-image" 
          ></IonImg>
          
        </div>

        <div className="event-details-bottom">
          <div  className="event-details-content">
            <div className="event-details-desktop event-details-title">
              <IonText color="muted">
                <h1>{event?.title} </h1>
              </IonText>
            </div>
            <div>
              <h5>EVENT DESCRIPTION</h5>
              <IonText className= "ion-padding" color="primary">
                {event?.description}
              </IonText>
            </div>

            <div className="event-details-location">
              <h5>EVENT LOCATION</h5>
              <div>
                <IonIcon src={location}  color="medium"> </IonIcon>

                <IonText  color="medium">
                  {event?.venue}
                </IonText>

              </div>
              
            </div>

            <div className="event-date-time-container">
              <div className="event-details-dates">
                <div>
                  <h5>START DATE</h5>
                  <IonText color="primary">
                    { event?.start_date}
                  </IonText>
                </div>

                <div>
                  <h5>START TIME</h5>
                  <IonText color="primary">
                    {event?.start_time}
                  </IonText>
                </div>

              </div>

              <div className="event-details-times">
                <div >
                  <h5>END DATE</h5>
                  <IonText  color="primary">
                    { event?.end_date}
                  </IonText>
                </div>
                
                <div>
                  <h5>END TIME</h5>
                  <IonText color="primary">
                    {event?.end_time}
                  </IonText>
                </div>

              </div>
            </div>
      
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
