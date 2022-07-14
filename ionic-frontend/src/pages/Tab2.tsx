import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import './Tab2.css';
import EventForm from '../components/EventForm';
import axios from 'axios';

const Tab2: React.FC = () => {


	function getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

	const onSubmit= async(values:any, actions:any) => {
	try{
		const token = "token"
		const result = await axios.post('localhoat:8080/api/v1/events', getFormData(values), {headers: {    Authorization: 'Bearer ' + token}}).data;
	    console.log(values)
		}catch(error: any){
           console.log(error);
		}

	}
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add Event</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Add Event</IonTitle>
					</IonToolbar>
				</IonHeader>
				<EventForm onSubmit={onSubmit} />
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
