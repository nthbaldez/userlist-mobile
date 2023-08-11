import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import UserListContainer from '../../components/UserListContainer';

export function UserList() {
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  return (
    <View className="flex-1 flex mt-[40px]">
      <UserListContainer />
      <View className="w-full flex items-end">
        <TouchableOpacity
          className="w-[120px] m-[15px] rounded-full flex items-center mt-[40px] px-[15px] py-[10px] bg-[#9747FF] "
          onPress={() => navigate('NewUser')}>
          <Text className="text-white font-semibold">ADD NEW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
