import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'd4dpocket';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, fontSize} from '../../../theme';

const data = [
  {
    id: 1,
    name: 'Art and Illustration',
    color: colors.pink_F476A3,
  },
  {
    id: 2,
    name: 'UI/UX',
    color: colors.yellow_FDC56D,
  },
  {
    id: 3,
    name: 'Screen Activity',
    color: colors.green_004643,
  },
];

const width = Dimensions.get('window').width;

const CardTopic = () => {
  const [scrollPosition, setScrollPosition] = useState(1);

  const handleScroll = event => {
    const position = event.nativeEvent.contentOffset.x;
    if (position >= -10 && position < 184) {
      setScrollPosition(1);
    } else if (position >= 184 && position < 300) {
      setScrollPosition(2);
    } else {
      setScrollPosition(3);
    }
  };

  const renderCard = ({item}) => {
    return (
      <View
        key={item?.id}
        style={[styles.viewItem, {backgroundColor: item?.color}]}>
        <View style={styles.viewTxtItem}>
          <Text style={styles.txtNameItem}>{item?.name}</Text>
        </View>
        <View style={styles.rowIcon}>
          <TouchableOpacity style={styles.btnItem}>
            <Entypo name={'calendar'} size={20} color={colors.blue_29284F} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnItem}>
            <Ionicons
              name={'share-social'}
              size={20}
              color={colors.blue_29284F}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderDots = ({item}) => {
    const check = scrollPosition === item?.id;
    return (
      <View
        key={item?.id}
        style={[styles.viewDot, check && styles.viewDotChoose]}
      />
    );
  };
  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}>
        {data?.map(item => renderCard({item}))}
      </ScrollView>
      <View style={styles.viewDataDot}>
        {data?.map(item => renderDots({item}))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewDotChoose: {
    backgroundColor: colors.black,
    width: scale(12),
    height: scale(12),
  },
  viewDataDot: {
    flexDirection: 'row',
    marginTop: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewDot: {
    width: scale(7),
    height: scale(7),
    borderRadius: 10,
    marginRight: scale(5),
    backgroundColor: colors.pink_DFE1F3,
  },
  btnItem: {
    backgroundColor: colors.pink_FFA8C7,
    marginRight: scale(10),
    padding: scale(10),
    borderRadius: scale(16),
  },
  rowIcon: {
    flexDirection: 'row',
    paddingHorizontal: scale(25),
  },
  txtNameItem: {
    fontSize: fontSize.fontSize24,
    color: colors.white,
    width: '70%',
    fontWeight: '500',
  },
  viewTxtItem: {
    paddingHorizontal: scale(30),
  },
  viewItem: {
    width: scale(200),
    height: scale(200),
    borderRadius: 21,
    marginRight: scale(36),
    paddingVertical: scale(15),
    justifyContent: 'space-between',
  },
  container: {
    marginTop: scale(30),
    width: width,
  },
});

export default CardTopic;
