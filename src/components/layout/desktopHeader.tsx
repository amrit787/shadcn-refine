'use client';

import { UserPopover } from '@components/user-popover';
import { MenuIcon, PhoneCallIcon } from 'lucide-react';
import React from 'react';

interface DesktopHeaderProps {
  // Add props here
}

const DesktopHeader: React.FC<DesktopHeaderProps> = (props) => {
  return (
    <nav className="hidden ml-[300px] px-6 h-[50px] lg:flex items-center border-b  top-0 w-full z-50">
      <div className="p-2 cursor-pointer">
        <MenuIcon />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <p className="font-bold ">Welcome, Amrit Sharma</p> <UserPopover />
      </div>
    </nav>
  );
};

export default DesktopHeader;
