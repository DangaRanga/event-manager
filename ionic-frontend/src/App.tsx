import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonToolbar,
  IonTitle
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, home, layersOutline, personCircleOutline, search, square, triangle, wine, wineOutline } from 'ionicons/icons';

// Component Imports
import NavBar from "components/NavBar/NavBar";
import { ToastContainer, Zoom } from "react-toastify";

// Page Imports
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/AddEvent";
import Tab3 from "./pages/Tab3";
import LoginPage from "./pages/Login/LoginPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "react-toastify/dist/ReactToastify.css";

import './App.css'
import UpdateEvent from "pages/UpdateEvent";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonHeader className='application-navigation'>
      <IonToolbar>
        <IonTitle>Navigation Bar</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/update">
            <UpdateEvent />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={search} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={wineOutline} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
        
      </IonTabs>
    </IonReactRouter>
    <ToastContainer
      transition={Zoom}
      position="top-right"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </IonApp>
);

export default App;
