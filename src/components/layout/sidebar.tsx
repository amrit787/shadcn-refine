'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
// import { SidebarItem } from './sidebar-item';
import Link from 'next/link';
// import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { useLogout, useMenu } from '@refinedev/core';
import { SidebarItem } from './sidebar-item';
import { ModeToggle } from '@components/theme-toggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@components/ui/accordion';
import { links } from './links';

interface SidebarProps {
  className?: string;
}

const SidebarSectionSeperator = ({ label }: { label: string }) => {
  return (
    <div className="text-[11px]  mt-5 font-semibold uppercase text-muted">
      {label}
      <div className="bg-primary h-[2px] w-7 mt-[2px]"></div>
    </div>
  );
};

const SidebarLink = ({
  link
}: {
  link:
    | {
        label: string;
        icon: React.JSX.Element;
        href: string;
        links?: undefined;
      }
    | {
        label: string;
        icon: React.JSX.Element;
        href: string;
        links: { label: string; icon: React.JSX.Element; href: string }[];
      };
}) => {
  if (link.links) {
    return (
      <Accordion className="" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:bg-primary p-0 px-2 text-white  rounded">
            <SidebarItem
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          </AccordionTrigger>
          <AccordionContent className="pl-5">
            {link.links.map((lin) => (
              <SidebarItem
                key={lin.label}
                href={lin.href}
                icon={lin.icon}
                label={lin.label}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  } else {
    return (
      <SidebarItem
        key={link.label}
        href={link.href}
        icon={link.icon}
        label={link.label}
      />
    );
  }
};

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { mutate: logout } = useLogout();
  const { menuItems, selectedKey } = useMenu();

  return (
    <div
      className={cn(
        ' flex no-scrollbar overflow-y-auto h-full  lg:w-[300px]  lg:fixed left-0 top-0  border-r-2 flex-col',
        className
      )}
    >
      <Link href={'/learn'}>
        <div className="pt-8 dark:bg-slate-700 bg-slate-100 pl-4 pb-7 flex items-center gap-x-3">
          {/* <Image src="/mascot.svg" height={40} width={40} alt="Mascot" /> */}
          <h1 className="text- font-semibold text-primary tracking-wide">
            ERP Management System
          </h1>
        </div>
      </Link>
      <div className="flex mt-3 p-2 bg-[#3f4d67] flex-col gap-y-2 flex-1">
        {/* {menuItems.map((item) => (
          <SidebarItem
            key={item.key}
            href={`/${item.name}`}
            icon={item.icon}
            label={item.name}
          />
        ))} */}

        {links.map((item) => {
          return (
            <>
              <SidebarSectionSeperator label={item.label} />
              {item.links.map((link) => (
                <SidebarLink key={link.label} link={link} />
              ))}
            </>
          );
        })}

        {/* <SidebarSectionSeperator label="Ticketing system" />
        <SidebarItem
          href="/learn"
          icon={<LayoutDashboard />}
          label="Dashboard"
        /> */}
        {/* <SidebarItem href="/quests" iconSrc="/quests.svg" label="quests" />
        <SidebarItem href="/shop" iconSrc="/shop.svg" label="shop" /> */}
      </div>
      <div className="p-4 ml-auto">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
