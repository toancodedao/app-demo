import {
  ActivityIndicator,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {scale} from 'd4dpocket';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';

import {colors, fontSize} from '../../theme';
import {Header, LoginThirdParty, Term} from './componentLogin';
import InputLogin from '../../components/InputLogin';
import LoginSchema from './LoginSchema';
import routes from '../../routes/routes';

const initialValues = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureText, setSecureText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const refPassword = useRef();

  const handleSecureText = () => {
    setSecureText(prev => !prev);
  };

  const focusPassword = () => {
    refPassword.current?.focus();
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    enableReinitialize: true,
    onSubmit: () => _onSubmit(),
  });

  const _onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate(routes.SPLASH_TASK_SCREEN);
    }, 1300);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={styles.flex1}>
        <View style={styles.container}>
          <Header />
          <View style={styles.viewTitle}>
            <Text style={styles.txtLogin}>Sign to your account</Text>
          </View>
          <InputLogin
            name={'email'}
            title={'Email Address'}
            placeholder={'Enter your email address'}
            returnKeyType="next"
            onSubmitEditing={focusPassword}
            blurOnSubmit={false}
            value={values.email}
            {...{handleChange, handleBlur, touched, setFieldValue, errors}}
          />
          <InputLogin
            name={'password'}
            title={'Password'}
            placeholder={'Enter your password'}
            ref={refPassword}
            returnKeyType="done"
            icon={true}
            secureText={secureText}
            handleSecureText={handleSecureText}
            value={values.password}
            {...{handleChange, handleBlur, touched, setFieldValue, errors}}
          />
          <TouchableOpacity style={styles.viewForgotPass}>
            <Text style={styles.txtForgotPass}>Forgot password?</Text>
          </TouchableOpacity>
          <Term />
          <TouchableOpacity
            disabled={isLoading}
            style={[
              styles.btnSubmit,
              isLoading && {backgroundColor: colors.gray_C4C4C4},
            ]}
            onPress={handleSubmit}>
            {isLoading ? (
              <ActivityIndicator color={colors.green_004643} size={'small'} />
            ) : (
              <Text style={styles.txtBtnSubmit}>Sign in</Text>
            )}
          </TouchableOpacity>
          <LoginThirdParty />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  txtBtnSubmit: {
    fontSize: fontSize.fontSize16,
    color: colors.white,
    fontWeight: '600',
  },
  btnSubmit: {
    marginTop: scale(30),
    alignItems: 'center',
    backgroundColor: colors.green_004643,
    borderRadius: scale(100),
    paddingVertical: scale(15),
  },
  txtForgotPass: {
    fontSize: fontSize.fontSize16,
    fontWeight: '600',
    color: colors.gray_757575,
  },
  viewForgotPass: {
    marginTop: scale(16),
    alignItems: 'flex-end',
  },
  txtLogin: {
    fontSize: fontSize.fontSize24,
    fontWeight: '600',
    color: colors.green_004643,
    marginTop: scale(28),
  },
  viewTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: scale(20),
    paddingHorizontal: scale(25),
    backgroundColor: colors.white,
  },
  flex1: {flex: 1},
});

export default observer(LoginScreen);
