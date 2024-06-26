'use client';
import { Layout as BaseLayout } from '@components/layout';
import { useIsAuthenticated } from '@refinedev/core';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Layout({ children }: React.PropsWithChildren) {
  const { data } = useIsAuthenticated();

  if (!data?.authenticated) {
    return redirect(data?.redirectTo || '/login');
  }

  return <BaseLayout>{children}</BaseLayout>;
}
