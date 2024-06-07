'use client';

import { API_URL } from '@providers/data-provider';
import { AuthBindings } from '@refinedev/core';
import axios from 'axios';
import Cookies from 'js-cookie';

export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    // Suppose we actually send a request to the back end here.
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        email,
        password
      });
      const { user, tokens } = res.data as {
        user: { id: string; email: string };
        tokens: { access: { token: string } };
      };
      Cookies.set('accessToken', tokens.access.token);
      localStorage.setItem('accessToken', tokens.access.token);
      return {
        success: true,
        redirectTo: '/'
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          name: '',
          message:
            error.response?.data?.message || 'Invalid username or password'
        }
      };
    }
  },
  logout: async () => {
    localStorage.clear();
    return {
      success: true,
      redirectTo: '/login'
    };
  },
  check: async () => {
    const auth = localStorage.getItem('accessToken');
    if (auth) {
      return {
        authenticated: true
      };
    }

    return {
      authenticated: true
      // logout: true,
      // redirectTo: '/login'
    };
  },
  getPermissions: async () => {
    const auth = Cookies.get('auth');
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser.roles;
    }
    return null;
  },
  getIdentity: async () => {
    const auth = Cookies.get('auth');
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser;
    }
    return null;
  },
  onError: async (error) => {
    if (error.response?.status === 401) {
      return {
        logout: true
      };
    }

    return { error };
  }
};
