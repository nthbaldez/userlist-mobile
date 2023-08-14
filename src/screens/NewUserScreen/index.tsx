import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import InputSearch from '../../components/InputSearch';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {useForm} from 'react-hook-form';

import UserListSVG from '../../assets/user.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import ControlledInput from '../../components/ControlledInput';
import {CreateUser} from '../../services/Users/UserService';

interface FormProps {
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
}

const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  birthDate: yup
    .string()
    .transform((curr, orig) => (orig === '' ? undefined : curr))
    .required('A data é obrigatória')
    .test('valid-date', 'Data inválida', function (value) {
      return /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/]\d{4}$/.test(value);
    }),
  address: yup.string().required('Informe seu endereço'),
  telephoneNumber: yup
    .string()
    .required('Informe o número completo com o DDD')
    .test('valid-number', 'Número Inválido', function (value) {
      return /^\d{11}$/.test(value);
    })
    .min(11),
});

export function NewUserScreen() {
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
  });

  const saveNewUser = async (payload: FormProps) => {
    await CreateUser(payload);
    navigate('UserList');
  };

  const cancelNewUser = () => {
    navigate('UserList');
  };

  const handleUserRegister = (data: FormProps) => {
    saveNewUser(data);
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

      <View className="flex items-center mt-[20px]">
        <Text>Photo Profile</Text>
        <View className="h-[130px] w-[130px] rounded-full bg-slate-500 text-center flex justify-center items-center">
          <Text className="text-white">Photo</Text>
        </View>
      </View>
      <View>
        <Text className="w-full mx-4 mb-2 text-[14]">Profile</Text>
      </View>
      <View className="w-[90%] mx-4">
        <View>
          <Text className="text-[12px] mb-2">Full Name</Text>
          <ControlledInput
            name="name"
            control={control}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder=""
            error={errors.name}
          />
        </View>
        <View>
          <Text className="text-[12px] mb-2">Yout date birth</Text>
          <ControlledInput
            name="birthDate"
            control={control}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder="DD/MM/YYYY"
            error={errors.birthDate}
          />
        </View>
        <View>
          <Text className="text-[12px] mb-2">Addres</Text>
          <ControlledInput
            name="address"
            control={control}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder=""
            error={errors.address}
          />
        </View>
        <View>
          <Text className="text-[12px] mb-2">Phone</Text>
          <ControlledInput
            name="telephoneNumber"
            control={control}
            className="bg-gray-100 rounded-sm w-full mb-2 focus:bg-white"
            placeholder="(xx)00000-0000"
            error={errors.telephoneNumber}
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
          onPress={handleSubmit(handleUserRegister)}
          className="bg-[#9747FF] p-3 rounded-full w-56 flex items-center justify-center">
          <Text className="text-white font-semibold text-[16px]">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
