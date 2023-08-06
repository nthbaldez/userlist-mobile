import React from 'react';

import {StatusBar} from 'react-native';
import {AppRoutes} from './app.routes';
import {NavigationContainer} from '@react-navigation/native';

export function Routes() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
}
