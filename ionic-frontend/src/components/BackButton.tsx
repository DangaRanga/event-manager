import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton } from "@ionic/react";
import { useHistory } from "react-router";
import { chevronBackOutline } from "ionicons/icons";

import React, { useCallback, useEffect } from "react";
import { useState } from "react";

import "./BackButton.css";

const BackButton: React.FC = () => {
  const history = useHistory();
  return (
    <IonButton className="app-back-button" fill="outline" color="primary">
      <IonIcon src={chevronBackOutline}> </IonIcon>
    </IonButton>
  );
};

export default BackButton;
