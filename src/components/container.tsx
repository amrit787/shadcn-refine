'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="h-full w-full p-4">
      <div onClick={router.back} className="p-2">
        <Button variant="ghost">
          <ChevronLeft />
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Container;
