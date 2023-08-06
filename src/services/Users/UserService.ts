import {api} from '../api';

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
