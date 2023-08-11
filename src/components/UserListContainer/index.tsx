import React, {useEffect, useState} from 'react';
import {GetUsers} from '../../services/Users/UserService';
import {
  Alert,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputSearch from '../InputSearch';
// import {
//   NavigationProp,
//   ParamListBase,
//   useNavigation,
// } from '@react-navigation/native';

import ElizaSVG from './../../assets/eliza.svg';
import MatheusSVG from './../../assets/matheus.svg';
import IcaroSVG from './../../assets/icaro.svg';
import LeandroSVG from './../../assets/leandro.svg';

import {useModalMenu} from '../../hooks/useModalMenu';
import {Icon} from 'react-native-elements';

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
  // const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  const {openModal, isModalOpen, closeModal} = useModalMenu();

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
    <View className="flex">
      <Modal animationType="fade" transparent={true} visible={isModalOpen}>
        <View style={styles.overlay}>
          <View className="m-auto bg-white w-[220] h-[200] rounded-lg flex flex-col">
            <View className="flex m-[6] items-end">
              <TouchableOpacity onPress={() => closeModal()}>
                <Icon name="close" size={20} />
              </TouchableOpacity>
            </View>

            <View className="w-full flex flex-col justify-center items-center gap-[10] mt-[10px]">
              <Text
                className="text-[20px] font-medium text-center pb-3"
                onPress={closeModal}>
                Edit
              </Text>
              <View className="border-b-slate-100 border-b-2 w-[60%]" />
              <Text
                className="text-[20px] pt-3 font-medium"
                onPress={closeModal}>
                Delete
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <InputSearch />
      <View className="flex flex-row justify-between items-center mt-[40px]">
        <Text className="flex items-center text-center w-[240px] bg-[#9747FF] text-[16px] text-white font-semibold py-[15] rounded-r-full">
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
                <View className="flex flex-row py-[4] justify-center items-center border-b-slate-200  border-b-2">
                  <View className="mx-[12]">
                    {item.name === 'Eliza César' && (
                      <ElizaSVG
                        width={45}
                        height={45}
                        onPress={() => openModal()}
                      />
                    )}
                    {item.name === 'Matheus Sukso' && (
                      <MatheusSVG
                        width={45}
                        height={45}
                        onPress={() => openModal()}
                      />
                    )}
                    {item.name === 'Leandro Reis' && (
                      <LeandroSVG
                        width={45}
                        height={45}
                        onPress={() => openModal()}
                      />
                    )}
                    {item.name === 'Icaro Monteiro' && (
                      <IcaroSVG
                        width={45}
                        height={45}
                        onPress={() => openModal()}
                      />
                    )}
                  </View>
                  <Text className="w-[145px] px-[9px] py-[12px] flex items-start text-[16px]">
                    {item.name}
                  </Text>
                  <Text className="w-[130px] px-[9px] py-[12px] flex items-start text-[16px]">
                    {item.birthDate}
                  </Text>
                  <TouchableOpacity
                    className="w-[100px] px-[9px] py-[12px] text-[16px] m-auto"
                    onPress={() => openModal()}>
                    <Text className="m-auto text-center">...</Text>
                  </TouchableOpacity>
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
});
