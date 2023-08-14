import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import InputSearch from '../../components/InputSearch';

import ElizaSVG from './../../assets/eliza.svg';
import MatheusSVG from './../../assets/matheus.svg';
import IcaroSVG from './../../assets/icaro.svg';
import LeandroSVG from './../../assets/leandro.svg';
import UserListSVG from '../../assets/user.svg';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import {UpdateUser} from '../../services/Users/UserService';
import {useHandleUser} from '../../hooks/useHandleUser';

interface EditUserProps {
  id: string;
  name?: string;
  birthDate?: string;
  address?: string;
  telephoneNumber?: string;
  image: string;
}

export function EditUser() {
  const {userToBeHandle} = useHandleUser();
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();
  const [formData, setFormData] = useState<EditUserProps>({...userToBeHandle});

  const cancelNewUser = () => {
    navigate('UserList');
  };

  const handleEditUser = (payload: EditUserProps) => {
    UpdateUser(payload);
    navigate('UserList');
  };

  const handleChangeForm = (value: any, field: string) => {
    setFormData(prevData => ({...prevData, [field]: value}));
  };

  return (
    <View className="flex flex-1 flex-col pt-[30px] bg-white">
      <InputSearch />
      <View className="flex items-center justify-start flex-row text-center w-[240px] bg-[#9747FF] py-[15] rounded-r-full mt-[10]">
        <View className="flex items-center justify-start flex-row pl-4 gap-4">
          <UserListSVG />
          <Text className="text-[16px] text-white font-semibold">New User</Text>
        </View>
      </View>

      <View className="flex items-center justify-center mt-[20px]">
        <Text className="mb-5">Photo Profile</Text>
        <View className="h-[120px] w-[120px] bg-slate-100 rounded-full text-center flex justify-center items-center">
          <View className="text-white">
            {userToBeHandle.name === 'Eliza César' && (
              <ElizaSVG width={130} height={130} />
            )}
            {userToBeHandle.name === 'Matheus Sukso' && (
              <MatheusSVG width={150} height={150} />
            )}
            {userToBeHandle.name === 'Leandro Reis' && (
              <LeandroSVG width={150} height={150} />
            )}
            {userToBeHandle.name === 'Icaro Monteiro' && (
              <IcaroSVG width={150} height={150} />
            )}
          </View>
        </View>
      </View>
      <View>
        <Text className="w-full mx-4 mb-2 text-[14]">Profile</Text>
      </View>
      <View className="w-[90%] mx-4">
        <View>
          <Text className="text-[12px] mb-2">Full Name</Text>
          <TextInput
            defaultValue={userToBeHandle.name}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder=""
            onChangeText={event => handleChangeForm(event, 'name')}
          />
        </View>
        <View>
          <Text className="text-[12px] mb-2">Yout date birth</Text>
          <TextInput
            defaultValue={userToBeHandle.birthDate}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder=""
            onChangeText={event => handleChangeForm(event, 'birthDate')}
          />
        </View>
        <View>
          <Text className="text-[12px] mb-2">Addres</Text>
          <TextInput
            defaultValue={userToBeHandle.address}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder=""
            onChangeText={event => handleChangeForm(event, 'address')}
          />
        </View>
        <View>
          <Text className="text-[12px] mb-2">Phone</Text>
          <TextInput
            defaultValue={userToBeHandle.telephoneNumber}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder="(xx)00000-0000"
            onChangeText={event => handleChangeForm(event, 'telephoneNumber')}
          />
        </View>
      </View>

      <View className="mx-8 mt-1 flex flex-row justify-end items-center">
        <TouchableOpacity
          onPress={cancelNewUser}
          className="w-20 mr-4 border-2 border-slate-500 p-2 rounded-full flex items-center justify-center">
          <Text className="font-semibold text-[16px]">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleEditUser(formData)}
          className="bg-[#9747FF] p-3 rounded-full w-56 flex items-center justify-center">
          <Text className="text-white font-semibold text-[16px]">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
