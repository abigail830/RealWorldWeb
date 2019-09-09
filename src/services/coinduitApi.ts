import axios from 'axios';
import { User, LoginResponse, UserAuth } from '../models/model';

const apiClient = axios.create({
  baseURL: `https://conduit.productionready.io/api`,
//   withCredentials: false, // This is the default
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000,
});

export function setJWT(jwt: string) {
        apiClient.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}
export function clearJWT() {
    delete apiClient.defaults.headers.common['Authorization'];
}
export async function loginUser(user: UserAuth): Promise<User> {
    const response = await apiClient.post('/users/login', {
        user,
    });
    return (response.data as LoginResponse).user;
}


