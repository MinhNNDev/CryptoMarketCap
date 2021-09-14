import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Profile} from '../screens';

const Stack = createStackNavigator();

const appStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default appStack;
