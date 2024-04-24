import { DevtoolsProvider } from '@providers/devtools';
import './globals.css';

import { GitHubBanner, Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import routerProvider from '@refinedev/nextjs-router';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

import { authProvider } from '@providers/auth-provider';
import { dataProvider } from '@providers/data-provider';
import '@styles/global.css';
import { FlagIcon, MapIcon } from 'lucide-react';
import { ThemeProvider } from '@components/theme-provider';

export const metadata: Metadata = {
  title: 'Refine',
  description: 'Generated by create refine app',
  icons: {
    icon: '/favicon.ico'
  }
};

const themes = [
  'light',
  'dark',
  'blue',
  'blue-dark',
  'orange',
  'orange-dark',
  'green',
  'green-dark'
];
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          {/* <GitHubBanner /> */}
          <RefineKbarProvider>
            <DevtoolsProvider>
              <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider}
                authProvider={authProvider}
                resources={[
                  {
                    name: 'country',
                    list: '/country',
                    create: '/country/create',
                    edit: '/country/edit/:id',
                    show: '/country/show/:id',
                    icon: <FlagIcon />,
                    meta: {
                      canDelete: true
                    }
                  },
                  {
                    name: 'states',
                    list: '/states',
                    create: '/states/create',
                    edit: '/states/:id',
                    show: '/states/:id',
                    meta: {
                      canDelete: true
                    },
                    icon: <MapIcon />
                  }
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: 'uqGwFx-UFQGGi-vG5y7M'
                }}
              >
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  themes={themes}
                  disableTransitionOnChange
                >
                  {children}
                </ThemeProvider>

                <RefineKbar />
              </Refine>
            </DevtoolsProvider>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
