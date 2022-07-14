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
  IonTitle,
  IonButton,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  ellipse,
  home,
  layersOutline,
  personCircleOutline,
  search,
  square,
  triangle,
  wine,
  wineOutline,
} from "ionicons/icons";

// Component Imports
import NavBar from "components/NavBar/NavBar";
import { ToastContainer, Zoom } from "react-toastify";

// Page Imports
import Tab1 from "./pages/Tab1";
import AddEvent from "./pages/AddEvents";
import { MyEvents } from "pages/Events/MyEvents";
//import UpdateEvent from "./pages/UpdateEvent";
import Tab3 from "./pages/Tab3";
import Register from "./pages/Register";
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

import "./App.css";
import EventDetails from "pages/Events/EventDetails";
//import UpdateEvent from "pages/UpdateEvent";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <div className="application-nav">
        <div>
          <IonTitle color="primary">Eventus</IonTitle>
        </div>
        <div className="nav-link-buttons">
          <IonButton routerLink="/eventdetails" fill="clear">
            Home
          </IonButton>
          <IonButton routerLink="/register" fill="clear">
            Register
          </IonButton>
          <IonButton routerLink="/login" fill="clear">
            Login
          </IonButton>
        </div>
      </div>
    </IonHeader>

    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/eventdetails">
          <EventDetails></EventDetails>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2"></Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/addEvents">
            <AddEvent />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/my-events">
            <MyEvents />
            {/* <UpdateEvent/> */}
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/my-events">
            <IonIcon icon={wineOutline} />
            <IonLabel>My Events</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={search} />
            <IonLabel>Search Events</IonLabel>
          </IonTabButton>

          <IonTabButton tab="register" href="/register">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Register</IonLabel>
          </IonTabButton>

          <IonTabButton tab="AddEvent" href="/addEvents">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Add Event</IonLabel>
          </IonTabButton>

          <IonTabButton tab="UpdateEvent" href="/update">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Update Event</IonLabel>
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
