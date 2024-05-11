import {scale} from 'd4dpocket';
import {observer} from 'mobx-react';
import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useStore} from '../../../context';
import {colors, fontSize} from '../../../theme';

const deviceWidth = Dimensions.get('window').width;

const threshold = -deviceWidth * 0.4;

const Task = () => {
  const {
    taskStore: {task, updateCheckTask, deleteTask, refreshTask},
  } = useStore();

  const FlatListItem = ({item, onPress, onDelete}) => {
    const dragX = useSharedValue(0);
    const height = useSharedValue(65);
    const opacity = useSharedValue(1);

    const gestureHander = useAnimatedGestureHandler({
      onActive: e => {
        dragX.value = e.translationX;
      },
      onEnd: e => {
        if (threshold < e.translationX) {
          dragX.value = withTiming(0);
        } else {
          dragX.value = withTiming(-deviceWidth);
          height.value = withTiming(0);
          opacity.value = withTiming(0);
        }
      },
    });

    const itemContainerStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: dragX.value,
          },
        ],
        height: height.value,
        opacity: opacity.value,
        marginTop: opacity.value === 1 ? 10 : 0,
      };
    });

    if (height?.value === 0) {
      onDelete(item?.id);
    }

    return (
      <PanGestureHandler onGestureEvent={gestureHander}>
        <Animated.View style={[styles.itemContainer, itemContainerStyle]}>
          <Text
            style={[
              styles.txtId,
              item?.isCheck && {color: colors.green_1AA150},
            ]}>
            Task {item?.id} -{' '}
          </Text>
          <Text
            style={[
              styles.txtTaskName,
              item?.isCheck && {
                textDecorationLine: 'line-through',
              },
            ]}>
            {item?.name}
          </Text>
          <TouchableOpacity onPress={() => onPress(item?.id)}>
            {item?.isCheck ? (
              <AntDesign name={'checkcircle'} color={colors.black} size={30} />
            ) : (
              <Feather name={'circle'} color={colors.black} size={30} />
            )}
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View />
        <Text style={styles.txtTitle}>Drag left to delete task</Text>
        <TouchableOpacity style={styles.btnReload} onPress={refreshTask}>
          <Ionicons name={'reload'} size={25} color={colors.black} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatlistStyle}
        data={task}
        renderItem={({item}) => (
          <FlatListItem
            item={item}
            onPress={updateCheckTask}
            onDelete={deleteTask}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnReload: {
    marginRight: scale(8),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtTitle: {
    fontSize: fontSize.fontSize20,
    color: colors.black,
    fontWeight: '700',
  },
  txtTaskName: {
    fontSize: fontSize.fontSize16,
    color: colors.black,
    width: '70%',
  },
  txtId: {
    fontWeight: '600',
    fontSize: fontSize.fontSize18,
    color: colors.black,
  },
  container: {
    flex: 1,
    marginTop: scale(15),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 16,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderBottomColor: colors.gray_CFCAE4,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
});

export default observer(Task);
