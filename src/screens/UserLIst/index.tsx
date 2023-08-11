import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import UserListContainer from '../../components/UserListContainer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useModalMenu} from '../../hooks/useModalMenu';

export function UserList() {
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();
  const {openModal} = useModalMenu();

  return (
    <View className="flex flex-1 pt-[40px] bg-white">
      <UserListContainer />
      <View className="w-full flex items-end">
        <TouchableOpacity
          className="w-[120px] m-[15px] rounded-full flex items-center mt-[40px] px-[15px] py-[10px] bg-[#9747FF] "
          onPress={() => openModal()}>
          <Text className="text-white font-semibold">
            ADD NEW <Icon name="rocket" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
