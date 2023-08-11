import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import UserListContainer from '../../components/UserListContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function UserList() {
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  const handleNavigationNewUser = () => {
    navigate('NewUser');
    console.log('new user');
  };

  return (
    <View className="flex flex-1 pt-[40px] bg-white">
      <UserListContainer />
      <View className="w-full flex items-end">
        <TouchableOpacity
          className="w-[120px] m-[15px] rounded-full flex flex-row justify-center items-center mt-[40px] px-[15px] py-[10px] bg-[#9747FF] "
          onPress={() => handleNavigationNewUser()}>
          <Text className="text-white font-semibold mr-[8]">ADD NEW</Text>
          <Ionicons color="#FFF" name="add" size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
