import {api} from '../api';
import uuid from 'react-native-uuid';

interface CreateUserProps {
  name: string;
  birthDate: string;
  address: string;
  telephoneNumber: number;
}
export async function GetUsers() {
  let urlAPI = `${api.defaults.baseURL}/users`;

  const header = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };
  console.log('api ' + urlAPI);
  return await api.get(urlAPI, header);
}

export async function CreateUser(payload: CreateUserProps) {
  api
    .post('/users', {
      name: payload.name,
      birthDate: payload.birthDate,
      address: payload.address,
      telephoneNumber: payload.telephoneNumber,
      id: uuid.v4(),
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
