import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from './src/screen/Login';
import routes from './src/routes/routes';
import {SplashTaskScreen} from './src/screen/TaskManager';
import {HomeScreen} from './src/screen/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          swipeEnabled: false,
        }}>
        <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={routes.SPLASH_TASK_SCREEN}
          component={SplashTaskScreen}
        />
        <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
