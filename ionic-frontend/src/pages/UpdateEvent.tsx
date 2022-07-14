/* import { IonContent, IonPage } from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton ,IonTextarea} from "@ionic/react";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddEvents.css";

import { getFormData } from "../util/formUtil";

const UpdateEvent: React.FC = () => {
  const { handleSubmit } = useForm();

  const [title, setTitle] = useState<string>();
  const [description, setDesc] = useState<string>();
  const [startdate, setStartDate] = useState<string>();
  const [starttime, setStartTime] = useState<string>();
  const [enddate, setEndDate] = useState<string>();
  const [endtime, setEndTime] = useState<string>();
  const [venue, setVenue] = useState<string>();
  const [website_url, setWebsite] = useState<string>();
  const [photo, setPhoto] = useState<string>();

  const token = localStorage.getItem("token");

  const event_id: number = 0;

  async function update_event() {
    let params = {
      title: title,
      description: description,
      startdate: startdate,
      photo: photo,
      starttime: starttime,
      website_url: website_url,
      enddate: enddate,
      endtime: endtime,
      venue: venue,
    };

    console.log(params);
    let form_data = getFormData(params);

    updateEvent();

    async function updateEvent() {
      const response = await fetch(
        "http://localhost:8080/api/v1/events/" + `${event_id}`,
        {
          headers: {
            //Authorization: `${token}`,
          },
          body: form_data,
          method: "POST",
        }
      );
      const event_data = await response.json();
    }
  }

  const onSubmit = (data: any) => {
    update_event();
  };

  const setImage = (_event: any) => {
    let f = _event.target.files[0];
    console.log(f);
    setPhoto(f);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText color="muted">
          <h2>Update Event</h2>
        </IonText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel>Event Title</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              placeholder=""
            />
          </IonItem>
          <IonItem>
            <IonLabel>Event Description</IonLabel>
            <IonTextarea
              placeholder="Your description"
              onIonChange={(event) => {
                setDesc(event.target.value!);
              }}
            ></IonTextarea>
          </IonItem>

          <IonItem>
            <IonLabel>Start Date</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setStartDate(event.target.value);
              }}
              placeholder="YYYY-MM-DD"
            />
          </IonItem>

          <IonItem>
            <IonLabel>Start Time</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setStartTime(event.target.value);
              }}
              placeholder="xx:xx"
            />
          </IonItem>

          <IonItem>
            <IonLabel>End Date</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setEndDate(event.target.value);
              }}
              placeholder="YYYY-MM-DD"
            />
          </IonItem>

          <IonItem>
            <IonLabel>End Time</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setEndTime(event.target.value);
              }}
              placeholder="xx:xx"
            />
          </IonItem>

          <IonItem>
            <IonLabel>Venue</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setVenue(event.target.value);
              }}
              placeholder=""
            />
          </IonItem>

          <IonItem>
            <IonLabel>Website Url</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setWebsite(event.target.value);
              }}
              placeholder=""
            />
          </IonItem>

          <IonItem>
            <IonLabel>Flyer Photo</IonLabel>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={setImage}
            />
          </IonItem>
          <IonButton expand="block" type="submit" className="ion-margin-top">
            Submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default UpdateEvent;
 */
export {};
