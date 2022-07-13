// Hook Imports
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Base components
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

// Layout Imports
import { IonGrid, IonRow, IonCol } from "@ionic/react";

// Form Components
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonAlert,
} from "@ionic/react";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Login </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
          </IonItem>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default LoginForm;
