import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'd4dpocket';
import Feather from 'react-native-vector-icons/Feather';

import {colors, fontSize} from '../theme';

const InputLogin = (
  {
    name,
    title,
    placeholder,
    icon,
    handleSecureText,
    secureText,
    handleChange,
    handleBlur,
    touched,
    setFieldValue,
    errors,
    ...rest
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
      <View
        style={[
          styles.viewInput,
          isFocused && {borderColor: colors.green_004643},
        ]}>
        <TextInput
          autoCapitalize="none"
          placeholder={placeholder}
          style={styles.txtInput}
          ref={ref}
          placeholderTextColor={colors.gray_C4C4C4}
          onBlur={(handleBlur(name), onBlur)}
          onFocus={handleFocus}
          secureTextEntry={secureText}
          onChangeText={text => setFieldValue(name, text.toString())}
          {...rest}
        />
        {icon ? (
          <TouchableOpacity onPress={handleSecureText} style={styles.viewIcon}>
            <Feather
              name={secureText ? 'eye-off' : 'eye'}
              color={colors.gray_757575}
              size={25}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {touched && errors && touched[name] && errors[name] ? (
        <Text style={styles.error}>{errors[name]}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: colors.red,
    fontSize: fontSize.fontSize12,
    marginTop: scale(5),
  },
  viewInput: {
    borderWidth: 1,
    borderColor: colors.gray_C4C4C4,
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
  },
  txtInput: {
    fontSize: fontSize.fontSize16,
    paddingVertical: scale(15),
    fontWeight: '600',
    width: '90%',
  },
  txtTitle: {
    fontSize: fontSize.fontSize18,
    color: colors.black,
    fontWeight: '600',
    marginBottom: scale(8),
  },
  container: {
    marginTop: scale(18),
  },
});

export default React.forwardRef(InputLogin);
