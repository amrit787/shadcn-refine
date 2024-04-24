'use client';
import { AuthPage } from '@components/auth-page';
import { authProvider } from '@providers/auth-provider';
import { redirect } from 'next/navigation';
import { useAuthenticated } from '../../../hooks/useAuthenticated';
import { useIsAuthenticated } from '@refinedev/core';

export default function Login() {
  const { data } = useIsAuthenticated();

  if (data?.authenticated) {
    redirect(data?.redirectTo || '/');
  }
  console.log(data);

  return <AuthPage type="login" />;
}
