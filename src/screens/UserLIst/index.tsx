import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View, StyleSheet} from 'react-native';
import {GetUsers} from '../../services/Users/UserService';
import axios from 'axios';

interface UserProps {
  id: number;
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: string;
  status: string;
  image: string;
}

export function UserList() {
  const {navigate}: NavigationProp<ParamListBase> = useNavigation();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      console.log('cheguei aqui');
      try {
        setLoading(true);
        const response = await GetUsers();
        if (response) {
          const res = response.data;
          setUsers(res);
          setLoading(false);
          users.map((user: any) => {
            console.log(user.name);
          });
        }
        // console.log('aqui: ' + JSON.stringify(response.data, null, 2));
      } catch (error) {
        setLoading(false);
        console.error('Erro na requisição:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* <Button title="Add new" onPress={() => navigate('NewUser')} /> */}
      <Text style={{color: '#000'}}>User List</Text>

      <View>
        {!loading && (
          <FlatList
            data={users}
            keyExtractor={(user: any) => String(user.id)}
            renderItem={({item, index}) => {
              console.log(index);
              return (
                <>
                  {/* Cabeçalho da tabela vai ser aqui no index 0 */}
                  {/* {index == 0 && <View>Tey</View>} */}
                  <Text style={styles.textView}>{item.name}</Text>
                </>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    color: '#267897',
    padding: 10,
  },
});
