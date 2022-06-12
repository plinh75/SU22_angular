import instance from './instance';
import { TypeLogInRequest } from 'src/app/types/UserType';

export const signup = (user:TypeLogInRequest)=>{
    const url = `/signup`
    return instance.post(url, user)
}

export const signin = (user:TypeLogInRequest)=>{
    const url = `/signin`
    return instance.post(url, user)
}

export const list = () => {
    const url = `/user`;
    return instance.get(url)
}

export const remove = (_id: string) => {
    const url = `/user/${_id}`;
    return instance.delete(url)
}