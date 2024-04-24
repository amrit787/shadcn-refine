'use client';

import { PropsWithChildren } from 'react';
import { Breadcrumbs } from '../breadcrumb';

import Sidebar from '@components/layout/sidebar';
import MobileHeader from './mobile-header';
import DesktopHeader from './desktopHeader';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {/* <Menu /> */}
      <MobileHeader />
      <DesktopHeader />
      <Sidebar className="hidden lg:flex" />
      <div className="content">
        <main className="lg:pl-[300px]  h-full pt-[50px] lg:pt-0">
          <Breadcrumbs />
          <div className="  pt-6 h-full">{children}</div>
        </main>
      </div>
    </div>
  );
};
