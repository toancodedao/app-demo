import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'd4dpocket';
import {observer} from 'mobx-react';

import {colors} from '../../theme';
import {CardTopic, HeaderHome, Task} from './componentHome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <CardTopic />
      <Task />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: scale(25),
    paddingTop: scale(50),
  },
});

export default observer(HomeScreen);
