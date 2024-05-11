import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'd4dpocket';

import {colors, fontSize} from '../../../theme';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>My task</Text>
      <Image
        source={require('./../../../assets/user.png')}
        resizeMode={'cover'}
        style={styles.img}
      />
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  img: {
    width: scale(48),
    height: scale(48),
  },
  txtTitle: {
    fontSize: fontSize.biggest3,
    color: colors.black,
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
