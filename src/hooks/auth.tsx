import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  name: string;
  roles: string[];
}

interface AuthState {
  token: string;
  user: User;
}

interface SigInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  user: User;
  singIn(credentials: SigInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Elit:token');
    const user = localStorage.getItem('@Elit:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', {
      login,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Elit:token', token);
    localStorage.setItem('@Elit:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Elit:token');
    localStorage.removeItem('@Elit:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@Elit:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, singIn, signOut, updateUser }}
    >
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
