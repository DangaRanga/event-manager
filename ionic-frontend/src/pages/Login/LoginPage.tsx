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

const LoginPage: React.FC = () => {
  return (
    <IonPage className="ion-margin">
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <LoginForm />
            </IonCol>
            <IonCol>Content</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;