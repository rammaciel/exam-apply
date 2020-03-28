import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validationSchema from './schema';
import { Button, Input, FormContainer, FooterContainer, Link } from './styles';
import { gamePinRequest } from '~/modules/game/actions';

const initialValues = {
	pin: '',
};
function Form({ gamePinRequest, isLoading }) {
	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={initialValues}
			onSubmit={gamePinRequest}
		>
			{({ values, setFieldValue, errors, touched, handleSubmit }) => (
				<FormContainer>
					<img alt="Exam apply" src="images/logo.jpg" />
					<Input
						name="pin"
						placeholder="Game PIN"
						type="tel"
						value={values.pin}
						onChange={(e) => setFieldValue('pin', e.target.value)}
						error={errors.pin && touched.pin}
					/>
					<Button type="submit" onClick={handleSubmit} disabled={isLoading}>
						Enter
					</Button>
					<FooterContainer>
						<Link to="/">
							Create your own class exame for FREE at examApply.com
						</Link>
					</FooterContainer>
				</FormContainer>
			)}
		</Formik>
	);
}

Form.propTypes = {
	gamePinRequest: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ game: { isLoading } }) => ({ isLoading });

export default connect(mapStateToProps, { gamePinRequest })(Form);
