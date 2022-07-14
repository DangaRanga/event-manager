import { IonButton, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

import navStyles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <IonHeader className="ion-margin-bottom">
        <IonToolbar>
          <IonTitle>Logo</IonTitle>
          <div slot="end">
            <IonButton fill="clear" color="dark" routerLink="/home">
              Home{" "}
            </IonButton>
            <IonButton fill="clear" color="dark" routerLink="/programmes">
              Programmes{" "}
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>
    </nav>
  );
};

export default NavBar;
