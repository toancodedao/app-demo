import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {scale} from 'd4dpocket';

import {colors, fontSize} from '../../../theme';

const Term = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsCheck(!isCheck)}>
        <FontAwesome
          name={isCheck ? 'check-circle' : 'circle'}
          color={isCheck ? colors.green_004643 : colors.gray_F4F4F4}
          size={26}
        />
      </TouchableOpacity>
      <Text style={styles.txtTerm}>
        I’ve read and agreed to{' '}
        <Text style={styles.txtRules}>User Agreement </Text>
        and <Text style={styles.txtRules}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default Term;

const styles = StyleSheet.create({
  txtRules: {
    color: colors.green_004643,
    fontWeight: '500',
  },
  txtTerm: {
    marginLeft: scale(10),
    width: '90%',
    fontSize: fontSize.fontSize16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(25),
  },
});
