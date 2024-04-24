'use client';

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { MenuIcon } from 'lucide-react';
import Sidebar from './sidebar';

interface MobileSidebarProps {
  // Add props here
}

const MobileSidebar: React.FC<MobileSidebarProps> = (props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100] " side={'left'}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
