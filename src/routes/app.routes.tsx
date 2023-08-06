import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserList} from '../screens/UserLIst';
import {UserSettings} from '../screens/UserSettings';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="NewUser" component={UserSettings} />
    </Stack.Navigator>
  );
}
