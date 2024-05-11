import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from 'd4dpocket';

import {LogoFacebook, LogoGoogle} from '../../../icons';
import {colors} from '../../../theme';

const LoginThirdParty = () => {
  return (
    <View style={styles.container}>
      <Text>other way to sign in</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.viewLogo}>
          <LogoGoogle />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewLogo}>
          <LogoFacebook />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginThirdParty;

const styles = StyleSheet.create({
  viewLogo: {
    borderRadius: scale(50),
    borderWidth: 1,
    borderColor: colors.gray_C4C4C4,
    marginLeft: scale(8),
    width: scale(48),
    height: scale(48),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(15),
  },
  row: {
    marginTop: scale(10),
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
    marginTop: scale(16),
  },
});
