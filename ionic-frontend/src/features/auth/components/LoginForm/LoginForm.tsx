// Hook Imports
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Base components
import { IonContent } from "@ionic/react";

// Layout Imports
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import style from "./LoginForm.module.css";

// Form Components
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
} from "@ionic/react";

// Function imports
import { login } from "../../api/login";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = (data: any) => {
    let params = {
      email: data.email,
      password: data.password,
    };

    login(params, history);
  };

  const onSubmit = (data: any) => {
    userLogin(data);
  };

  const showError = (_fieldName: string) => {
    {
      return (
        (errors as any)[_fieldName] && (
          <div
            style={{
              color: "red",
              padding: 5,
              paddingLeft: 12,
              fontSize: "smaller",
            }}
          >
            {_fieldName.charAt(0).toUpperCase() + _fieldName.slice(1)} is
            required
          </div>
        )
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput
          className="login-mobile-input"
          {...register("email", { required: "Email is required!" })}
        />
      </IonItem>
      {showError("email")}
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          className="login-mobile-input"
          {...register("password", { required: "Password is required!" })}
          type="password"
        />
      </IonItem>
      {errors.password && (
        <p className="text-danger" style={{ fontSize: 14 }}>
          {showError("password")}
        </p>
      )}
      <IonItem lines="none">
        <IonLabel>Remember me</IonLabel>
        <IonCheckbox defaultChecked={true} slot="start" />
      </IonItem>
      <IonButton
        className="ion-margin-top login-mobile-button"
        type="submit"
        expand="block"
      >
        Login
      </IonButton>
    </form>
  );
};

export default LoginForm;
