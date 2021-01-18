import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { TextField } from '@material-ui/core';

interface FormikFieldProps {
	name: string;
	label: string;
	type?: string;
	required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({
	name,
	label,
	type = 'text',
	required = false,
}) => {
	return (
		<Field
			required={required}
			as={TextField}
			autoComplete="off"
			label={label}
			name={name}
			fullWidth
			type={type}
			helperText={<ErrorMessage name={name} />}
		/>
	);
};

export default FormikField;
