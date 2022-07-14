import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import './Tab2.css';
import EventForm from '../components/EventForm';

const Tab2: React.FC = () => {

	const onSubmit= async(values:any, actions:any) => {
		try{
		
			const config = {
        'Authorization': ''
			}
    //  const result = await axios.post('localhoat:8080/api/v1/events', values, config);

	    console.log(values)
		}catch(error: any){

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
