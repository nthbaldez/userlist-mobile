import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserList} from '../screens/UserLIst';
import {NewUserScreen} from '../screens/NewUserScreen';
import {EditUser} from '../screens/EditUser';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="NewUser" component={NewUserScreen} />
      <Stack.Screen name="EditUser" component={EditUser} />
    </Stack.Navigator>
  );
}
