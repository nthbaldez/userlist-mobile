import React, {useEffect, useState} from 'react';
import {GetUsers} from '../../services/Users/UserService';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import InputSearch from '../InputSearch';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface UserProps {
  id: number;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

export default function UserListContainer() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetUsers();
        if (response) {
          const res = response.data;
          setUsers(res);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View className="flex flex-col">
      <InputSearch />
      <View className="flex flex-row justify-between items-center mt-[40px]">
        <Text className="flex items-center text-center w-[240px] bg-[#9747FF] text-[16px] text-white font-semibold py-[10] rounded-r-full">
          {/* <UserListSvg /> */}
          User List
        </Text>
        <Text className="mr-[20px] text-[18px] font-medium">
          All ({users.length})
        </Text>
      </View>

      <View className="mt-[40px]">
        <FlatList
          data={users}
          keyExtractor={(user: any) => String(user.id)}
          renderItem={({item, index}) => {
            return (
              <>
                {index === 0 && (
                  <View className="flex flex-row border-b-[2px] border-gray-300">
                    <Text className="w-[67px] px-[9px] py-[12px] flex items-start text-[16px] text-[#343A40] font-medium">
                      Profile
                    </Text>
                    <Text className="w-[145px] px-[9px] py-[12px] flex items-start text-[16px] text-[#343A40] font-medium">
                      Name
                    </Text>
                    <Text className="w-[120px] px-[9px] py-[12px] flex items-start text-[16px] text-[#343A40] font-medium">
                      Birth Date
                    </Text>
                    <Text className="w-[65px] px-[9px] py-[12px] flex items-start text-[16px] text-[#343A40] font-medium">
                      Action
                    </Text>
                  </View>
                )}
                <View className="flex flex-row py-[7px] justify-center items-center border-b-slate-200  border-b-2">
                  <Text className="w-[50px] h-[50px] mx-[10px] rounded-full px-[9px] py-[12px] flex items-start text-[16px] bg-slate-600" />
                  <Text className="w-[145px] px-[9px] py-[12px] flex items-start text-[16px]">
                    {item.name}
                  </Text>
                  <Text className="w-[160px] px-[9px] py-[12px] flex items-start text-[16px]">
                    {item.birthDate}
                  </Text>
                  <Text className="w-[65px] px-[9px] py-[12px] text-[16px] m-auto">
                    <View className="flex items-center relative h-[100%] w-[100%]">
                      <TouchableOpacity onPress={() => navigate('NewUser')}>
                        <Text className="m-auto">...</Text>
                      </TouchableOpacity>
                    </View>
                  </Text>
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}
