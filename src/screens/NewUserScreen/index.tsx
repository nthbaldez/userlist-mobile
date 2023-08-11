import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import InputSearch from '../../components/InputSearch';

export function NewUserScreen() {
  return (
    <View className="flex flex-1 flex-col pt-[30px] bg-white">
      <InputSearch />
      <View className="flex flex-row justify-between items-center mt-[30px]">
        <Text className="flex items-center text-center w-[240px] bg-[#9747FF] text-[16px] text-white font-semibold py-[15] rounded-r-full">
          {/* <UserListSvg /> */}
          New User
        </Text>
      </View>

      <View className="flex items-center mt-[35px]">
        <Text>Photo Profile</Text>
        <Text className="h-[130px] w-[130px] rounded-full bg-slate-500 text-center">
          Photo
        </Text>
      </View>

      <View>
        <Text>Profile</Text>
        <View>
          <Text>Full Name</Text>
          {/* <TextInput value={} /> */}
        </View>
        <View>
          <Text>Yout date birth</Text>
          {/* <TextInput value={} /> */}
        </View>
        <View>
          <Text>Addres</Text>
          {/* <TextInput value={} /> */}
        </View>
        <View>
          <Text>Phone</Text>
          {/* <TextInput value={} /> */}
        </View>
      </View>
    </View>
  );
}
