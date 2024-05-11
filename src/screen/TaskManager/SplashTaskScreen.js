import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from 'd4dpocket';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {LightIcon, Task} from '../../icons';
import {colors, fontSize} from '../../theme';
import routes from '../../routes/routes';

const SplashTaskScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewIcon}>
        <Task />
      </View>
      <View style={styles.body}>
        <Text style={styles.txtTitle}>
          <Text style={styles.boldText}>Manage</Text> your task and ideas
        </Text>
        <View style={styles.row}>
          <Text style={styles.txtTitle}>quickly</Text>
          <View style={styles.viewIconLight}>
            <LightIcon />
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnNext}
          onPress={() => navigation.navigate(routes.HOME_SCREEN)}>
          <AntDesign name={'arrowright'} size={40} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashTaskScreen;

const styles = StyleSheet.create({
  btnNext: {
    marginLeft: 'auto',
    backgroundColor: colors.black,
    width: scale(80),
    height: scale(76),
    borderRadius: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIconLight: {
    marginLeft: scale(15),
  },
  row: {
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: '800',
  },
  txtTitle: {
    fontSize: fontSize.biggest4,
    color: colors.black,
  },
  body: {
    paddingHorizontal: scale(25),
    marginTop: scale(10),
  },
  viewIcon: {
    alignItems: 'center',
  },
  container: {
    paddingTop: scale(20),
    backgroundColor: colors.white,
    flex: 1,
  },
});
