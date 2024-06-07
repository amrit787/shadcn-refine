'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export const SidebarItem = ({ label, icon, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? 'sidebarOutline' : 'sidebar'}
      className="justify-start w-full group-hover:text-background  h-[52px]"
      asChild
    >
      <Link className="flex  text-lg gap-4 " href={href}>
        {icon}
        {label}
      </Link>
    </Button>
  );
};
