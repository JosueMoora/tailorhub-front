"use client"
import React, {Dispatch, SetStateAction, createContext, useEffect, useReducer, useState} from 'react';
import {LoginData, LoginResponse, RegisterData, User} from '../interfaces/authInterfaces';
import {AuthState, authReducer} from './AuthReducer';
import { useRouter } from 'next/navigation';
import restaurantApi from '../api/api';

type AuthContextProps = {
  errorMessage: string;
  user: User | null;
  newUser: {
    name: string,
    email: string,
    password: string
  };
  setNewUser: Dispatch<SetStateAction<{ name: string; email: string; password: string; }>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>
  signUp: () => void;
  signIn: (obj: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  const [loading, setLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const router = useRouter()
  useEffect(()=>{
    checkToken()
   },[])

  const checkToken = async () => {
    try {
      const res = await restaurantApi.get('/verify')
      dispatch({
        type: 'signUp',
        payload: {
          user: res.data,
        },
      });
      // setLoading(false)
      
    } catch (error: any) {
      // setLoading(false)
    }
}

  const signIn = async ({email, password}: LoginData) => {
    try {
      const {data} = await restaurantApi.post<LoginResponse>('/login', {
        email,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: {
          user: data.user,
        },
      });
      setLoading(false)
      router.push('/home')
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Informacion Incorrecta',
      });
      setLoading(false)
    }
  };

  const signUp = async () => {
    try {
      const {data} = await restaurantApi.post<LoginResponse>('/sign-up', newUser);
      dispatch({
        type: 'signUp',
        payload: {
          user: data.user,
        },
      })
      
      setLoading(false)
      router.push('/home')
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Informacion Incorrecta',
      });
      setLoading(false)
    }
  };
  const logOut = async () => {
    const {data} = await restaurantApi.post('/log-out')
    dispatch({type: 'logout'})
    setLoading(false)
    router.push('/')
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        loading,
        setLoading,
        newUser,
        setNewUser,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
