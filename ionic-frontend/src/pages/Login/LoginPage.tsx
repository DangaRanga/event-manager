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

// Component Imports
import LoginForm from "../../features/auth/components/LoginForm/LoginForm";

import "./Login.css";

const LoginPage: React.FC = () => {
  return (
    <IonPage >
      <IonContent>
        <IonGrid className="login-grid loginImageMobile">
          <IonRow>
            <IonCol>
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