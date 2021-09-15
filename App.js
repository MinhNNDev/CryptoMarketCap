/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/appStack';
import store from './src/redux/store/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
