import React, { createContext, useCallback, useContext, useState } from 'react';
import apiUrl from '../services/api';


interface AuthState {
  token: string;
  name: string;
  roles: string;
  cityId: any;
}

interface SigInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  name: string;
  roles: string;
  token: string;
  cityId: any;

  singIn(credentials: SigInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {

    const token = localStorage.getItem('@Elit:token');
    const name = localStorage.getItem('@Elit:name');
    const roles = localStorage.getItem('@Elit:roles');
    const cityId = localStorage.getItem('@Elit:city');

    if (token && name && roles && cityId) {
      return { token, name , roles , cityId };
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ login, password }) => {
    const response = await apiUrl.post('/stonks/login', {
      login,
      password,
    });
    
    const { token, name, roles, cityId } = response.data; 

    localStorage.setItem('@Elit:token', token);
    localStorage.setItem('@Elit:name', name);
    localStorage.setItem('@Elit:roles', roles);
    localStorage.setItem('@Elit:city', cityId);

    setData({ token, name, roles , cityId });
  }, []);

  const signOut = useCallback(() => {

    localStorage.removeItem('@Elit:token');
    localStorage.removeItem('@Elit:name');
    localStorage.removeItem('@Elit:roles');
    localStorage.removeItem('@Elit:city');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ name: data.name, roles: data.roles, token: data.token, cityId: data.cityId, singIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
