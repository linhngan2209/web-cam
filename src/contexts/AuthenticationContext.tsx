'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { postLogin } from '@/services/authApi';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (user: any) => Promise<string | null>;
  logout: () => void;
  getUser: () => any; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const login = async (user: any): Promise<string | null> => {
    try {
      const response = await postLogin(user);
      if (response?.data.statusCode === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', response.data.data.accessToken);
        localStorage.setItem('user', JSON.stringify(response.data.data.userData));
        setIsLoggedIn(true);
        return null;
      } else {
        return 'Email hoặc mật khẩu không đúng';
      }
    } catch (error) {
      return 'Đã xảy ra lỗi khi đăng nhập';
    }
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/login');
  };

  const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải được sử dụng trong AuthProvider');
  }
  return context;
};