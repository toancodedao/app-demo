import React from 'react';
import {NotifierWrapper} from 'react-native-notifier';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NotifierWrapper>
        <AppNavigator />
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
};

export default App;
