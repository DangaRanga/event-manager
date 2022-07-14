/* import * as yup from 'yup';
import * as React from 'react';
import { Formik, Form } from 'formik';
import Input from './common/Input';
import {
	IonGrid,
	IonRow,
	IonCol,
	IonCardTitle,
	IonCardSubtitle,
	IonButton
} from '@ionic/react'

import axios from 'axios';

const initialValues = {
	title: '',
	description: '',
	startdate: '',
	starttime: '',
	enddate: '',
	endtime: '',
	venue: '',
	website_url: '',
	photo: '',
};

const model = {
	title: {
		name: 'title',
		label: 'Event Title',
		type: 'text',
		requiredError: 'Please enter a title',
	},
	description: {
		name: 'description',
		label: 'Event Description',
		type: 'textarea',
		requiredError: 'Please enter a description',
	},
	startdate: {
		name: 'startdate',
		label: 'Start Date',
		type: 'date',
		requiredError: 'Please enter a start date',
	},
	starttime: {
		name: 'starttime',
		label: 'Start Time',
		type: 'time',
		requiredError: 'Please enter a start time',
	},
	enddate: {
		name: 'enddate',
		label: 'End Date',
		type: 'date',
		requiredError: 'Please enter a end date',
	},
	endtime: {
		name: 'endtime',
		label: 'End Time',
		type: 'time',
		requiredError: 'Please enter a end time',
	},
	venue: {
		name: 'venue',
		label: 'Venue',
		type: 'textarea',
		requiredError: 'Please enter a venue',
	},
	website_url: {
		name: 'website_url',
		label: 'Website URL',
		type: 'text',
		requiredError: 'Please enter a website url',
	},
	photo: {
		name: 'photo',
		label: 'Photo',
		type: 'file',
		requiredError: 'Please add a photo',
	},
};

const validationSchema = yup.object().shape({
	title: yup.string().required(model.title.requiredError),
	description: yup.string().required(model.description.requiredError),
	startdate: yup.date().required(model.startdate.requiredError),
	starttime: yup.string().required(model.starttime.requiredError),
	enddate: yup.date().required(model.enddate.requiredError),
	endtime: yup.string().required(model.endtime.requiredError),
	venue: yup.string().required(model.venue.requiredError),
	website_url: yup.string().required(model.website_url.requiredError),
	// photo: yup.file().required(model.photo.requiredError),
});

type Props = {
	onSubmit: (values:any, actions:any) => void;
	event?: any;
};
const EventForm: React.FC<Props> = ({onSubmit, event}) => {

	const sections = [
		{title: 'Basic Details', instructions: 'Name your event and tell event-goers why they should come.', fields: [model.title, model.description] },
		{title: 'Date and Time', instructions: 'Tell event-goers when your event starts and ends.', fields: [model.startdate, model.starttime, model.enddate,model.endtime] },
		{title: 'Location Details', instructions: 'Let attendees know where to show up.', fields: [model.venue, model.website_url, model.photo] },

	]

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{  function event({ values, setFieldValue, errors }) {
				// console.log(values, errors);

      React.useEffect(()=> {
					if (event){
					const keys = Object.keys(values);
                    Object.entries(event)?.forEach(([key,value])=> (
                         keys.includes(key) && setFieldValue(key, value)))

					}
				}, [event])

				return (
					<Form id={'event-form'}>
						<IonGrid>
							{sections.map(({title, instructions, fields}, index)=> (
							  <IonRow key={index}>
                   <IonCol size="12">
									   <IonCardTitle>{title}</IonCardTitle>

									 </IonCol>
									 <IonCol size="12">
									  <IonCardSubtitle>{instructions}</IonCardSubtitle>
									 </IonCol>
									  <IonCol size="12">
											<IonGrid>
												<IonRow>
													{Object.entries(fields).map(
														([key, value], i) => (
															<IonCol key={i} size={title === 'Date and Time' ? '6' : '12'}>
																<Input {...value} />
															</IonCol>
														)
													)}
												</IonRow>
											</IonGrid>
									 </IonCol>
									
								</IonRow>
							))}
							<IonRow>
								<IonCol size="12">
    							<IonButton color="primary" type="submit">Submit</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</Form>
				);
			}}
		</Formik>
	);
};

export default EventForm; */
export{}