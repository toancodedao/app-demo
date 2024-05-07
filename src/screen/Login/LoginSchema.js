import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Không đúng định dạng email')
    .required('Thông tin bắt buộc'),
  password: Yup.string()
    .trim()
    .min(6, 'Mật khẩu quá ngắn')
    .required('Thông tin bắt buộc'),
});

export default LoginSchema;
