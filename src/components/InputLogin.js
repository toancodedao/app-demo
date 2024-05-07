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
  {title, placeholder, icon, handleSecureText, secureText, ...rest},
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
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
          onBlur={handleBlur}
          onFocus={handleFocus}
          secureTextEntry={secureText}
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
    </View>
  );
};

const styles = StyleSheet.create({
  viewIcon: {},
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
