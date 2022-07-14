import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import './AddEvent.css';
import EventForm from '../components/EventForm';
import axios from 'axios';
import FormData from 'form-data';

const AddEvent: React.FC = () => {


	function getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

	const onSubmit= async(values:any, actions:any) => {
	try{
		const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjksIm5hbWUiOiJEYXZpZCBHcmlmZml0aHMiLCJyb2xlIjoicmVndWxhciJ9.ELAWNllPYWCd5chFcguRBhS3gjJ35Yz2lTU8E36lWKI"
		const data = new FormData();
		Object.entries(values).forEach(([key, value])=> {
		
				data.append(key, (value as string | Blob))

			// console.log(typeof value)

	    });
		// console.log(values);
		// 		console.log(data);

		const result = await axios.post('http://localhost:8080/api/v1/events', data, {headers: {    Authorization: 'Bearer ' + token}});
		console.log(result)
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

export default AddEvent;
