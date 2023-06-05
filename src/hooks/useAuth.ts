import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { User } from '../component/common/interface/User';

export const useAuth = () =>  useContext(AuthContext);
export const useUser = (): User | null =>  {
   const userObject = localStorage.getItem('user'); 
   if (userObject) {
    return JSON.parse(userObject) as User;
   } else {
    return null;
   }
}
  