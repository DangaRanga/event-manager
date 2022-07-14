// Ionic Base Imports
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// Layout imports
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import BackButton from "components/BackButton";

// Component Imports
import LoginForm from "../../features/auth/components/LoginForm/LoginForm";

import "./Login.css";

const LoginPage: React.FC = () => {
  return (
    <IonPage className="login-page">
      <div><BackButton></BackButton></div>
      <IonContent>
        <IonTitle></IonTitle>
        <IonGrid>
          <IonRow>
            <IonCol className="login-form-column">
              <LoginForm />
            </IonCol>
            <IonCol className="loginImage">
              
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;