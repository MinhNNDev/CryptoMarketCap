import React from 'react';
import {Register, Login} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const authStack = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default authStack;
