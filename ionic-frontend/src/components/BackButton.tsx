import { IonContent, IonIcon, IonPage} from "@ionic/react";
import { IonText, IonItem, IonLabel, IonButton } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

import React, { useCallback, useEffect } from "react";
import { useState } from "react";

import './BackButton.css'





const BackButton: React.FC = () => {

  return (
    <IonButton 
        className="app-back-button" 
        fill="outline" 
        color="primary"
        >
        <IonIcon src={chevronBackOutline}> </IonIcon>
    </IonButton>

  );
};

export default BackButton;
