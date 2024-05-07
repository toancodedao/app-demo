import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Logo} from '../../../icons';
import {colors, fontSize} from '../../../theme';

const Header = () => {
  return (
    <View style={styles.viewLogo}>
      <Logo />
      <Text style={styles.txtTitle}>APP DEMO</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: fontSize.fontSize20,
    fontWeight: '800',
    color: colors.green_004643,
  },
});
