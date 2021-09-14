/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigation/tabNavigation';
// import store from './src/redux/store/store';

const App = () => {
  return (
    // <StoreProvider store={store}>
    <NavigationContainer>
      <SafeAreaView>
        <Tabs />
      </SafeAreaView>
    </NavigationContainer>
    // </StoreProvider>
  );
};

export default App;
