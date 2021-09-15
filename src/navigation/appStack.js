import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './tabNavigation';
import {Home, Profile} from '../screens';

const Stack = createStackNavigator();

const appStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Tabs} />
    </Stack.Navigator>
  );
};

export default appStack;
