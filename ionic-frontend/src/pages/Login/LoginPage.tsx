import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import LoginForm from "../../features/auth/components/LoginForm/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <LoginForm />
    </IonPage>
  );
};

export default LoginPage;
