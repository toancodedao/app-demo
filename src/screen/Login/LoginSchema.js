import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect email format')
    .required('Required Information'),
  password: Yup.string()
    .min(6, 'Password is too short')
    .required('Required Information'),
});

export default LoginSchema;
