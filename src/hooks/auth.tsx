import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';


interface AuthState {
  token: string;
  name: string;
}

interface SigInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  singIn(credentials: SigInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Elit:token');
    const name = localStorage.getItem('@Elit:name');
    const roles = localStorage.getItem('@Elit:roles');

    if (token && name && roles) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, name , roles};
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ login, password }) => {
    const response = await api.post('/stonks/login', {
      login,
      password,
    });
    const { token, name, roles } = response.data;
    localStorage.setItem('@Elit:token', token);
    localStorage.setItem('@Elit:name', name);
    localStorage.setItem('@Elit:roles', roles);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, name });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Elit:token');
    localStorage.removeItem('@Elit:user');
    localStorage.removeItem('@Elit:roles');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ singIn, signOut }}>
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
