import { IonContent, IonPage } from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton } from "@ionic/react";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

import { getFormData } from "../util/formUtil";

const Register: React.FC = () => {
  const { handleSubmit } = useForm();
  const history = useHistory();
  const [fullname, setName] = useState<string>();

  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [photo, setPhoto] = useState<string>();

  const token = localStorage.getItem("token");

  async function register_user() {
    let params = {
      email: email,
      password: password,
      photo: photo,
      fullname: fullname,
    };

    let form_data = getFormData(params);

    registerUser();

    async function registerUser() {
      const response = await fetch("http://localhost:8080/api/v1/register", {
        headers: {
          //Authorization: `${token}`,
        },
        body: form_data,
        method: "POST",
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("One or more required fields are empty");
          } else {
            toast.success("Registration Successful");
            return response.json();
          }
        })
        .catch((error) => {
          console.log(error);
          return error;
        });

      const event_data = await response;
      if (event_data) {
        history.push("/login");
      }
    }
  }

  const onSubmit = (data: any) => {
    register_user();
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
          <h2>Register</h2>
        </IonText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel>Full Name</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setName(event.target.value);
              }}
              placeholder="Paul Adams"
            />
          </IonItem>
          <IonItem>
            <IonLabel>Email</IonLabel>
            <input
              type={"email"}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="email@gmai.com"
            />
          </IonItem>

          <IonItem>
            <IonLabel>Password</IonLabel>
            <input
              type={"text"}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              placeholder="xxxxx"
            />
          </IonItem>

          <IonItem>
            <IonLabel>Profile Photo</IonLabel>
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

export default Register;
