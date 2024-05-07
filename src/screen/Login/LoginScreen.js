import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {scale} from 'd4dpocket';

import {colors, fontSize} from '../../theme';
import {Header} from './componentLogin';
import InputLogin from '../../components/InputLogin';
import {observer} from 'mobx-react';

const LoginScreen = () => {
  const [secureText, setSecureText] = useState(true);

  const refPassword = useRef();

  const handleSecureText = () => {
    setSecureText(prev => !prev);
  };

  const focusPassword = () => {
    refPassword.current?.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.viewTitle}>
          <Text style={styles.txtLogin}>Đăng nhập</Text>
        </View>
        <InputLogin
          title={'Email'}
          placeholder={'Nhập địa chỉ email'}
          returnKeyType="next"
          onSubmitEditing={focusPassword}
          blurOnSubmit={false}
        />
        <InputLogin
          title={'Mật khẩu'}
          placeholder={'Nhập mật khẩu của bạn'}
          ref={refPassword}
          returnKeyType="done"
          icon={true}
          secureText={secureText}
          handleSecureText={handleSecureText}
        />
        <TouchableOpacity style={styles.viewForgotPass}>
          <Text style={styles.txtForgotPass}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
    paddingVertical: scale(14),
    paddingHorizontal: scale(25),
  },
});

export default observer(LoginScreen);
