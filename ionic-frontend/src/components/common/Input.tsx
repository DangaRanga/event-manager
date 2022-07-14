import {
	IonItem,
	IonLabel,
	IonTextarea,
	IonInput,
	IonNote,
} from '@ionic/react';
import React from 'react';
import { useField } from 'formik';
import './Input.css';

type Props = {
	label: string;
	name: string;
	type: string;
	requiredError: string;
};

const Input: React.FC<Props> = ({ name, label, type, requiredError }) => {
	const [field, meta, helpers] = useField(name);
	return (
		<IonItem>
			<IonLabel position="stacked" >{label}</IonLabel>
			{type === 'textarea' ? (
				<IonTextarea
					{...field}
					onIonChange={(e) => helpers.setValue(e.target.value)}
				/>
			) : type=== 'file'? (
				<input type="file" name={name} onChange={(event)=> event?.target?.files?.[0] && helpers.setValue(event?.target?.files[0] )}/>
			): (
				<IonInput
					{...field}
					type={'text'}
					onIonChange={(e) => helpers.setValue(e.target.value)}
				></IonInput>
			)}
			{meta.error && meta.touched && (
				<IonNote color="danger">{meta.error}</IonNote>
			)}
		</IonItem>
	);
};

export default Input;
