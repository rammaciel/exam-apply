import * as Yup from 'yup';

export default Yup.object().shape({
	pin: Yup.number('O pin deve ser um número')
		.test(
			'len',
			'O pin deve ter 6 digitos',
			(val) => val.toString().length === 6
		)
		.required('É obrigatório o preenchimento do campo'),
});
