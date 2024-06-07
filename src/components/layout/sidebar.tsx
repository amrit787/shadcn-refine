'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
// import { SidebarItem } from './sidebar-item';
import Link from 'next/link';
// import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Circle, LayoutDashboard, Loader } from 'lucide-react';
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
import { themes } from '@components/colors/themes';
import { Button } from '@components/ui/button';
import { useTheme } from 'next-themes';
import { useColor } from '../../../hooks/useColor';
import ColorPicker from '@components/colors/colorPicker';

interface SidebarProps {
  className?: string;
}

const SidebarSectionSeperator = ({ label }: { label: string }) => {
  return (
    <div className="text-[11px]  mt-5 font-semibold uppercase text-black dark:text-white">
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
          <AccordionTrigger className="hover:bg-primary group text-foreground hover:text-background  p-0 px-2   rounded">
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
  const { resolvedTheme: mode } = useTheme();
  const [color, setColor] = useColor();
  return (
    <div
      className={cn(
        ' flex no-scrollbar overflow-y-auto h-full  lg:w-[300px]  lg:fixed left-0 top-0  border-r-2 flex-col',
        className
      )}
    >
      <Link href={'/learn'}>
        <div className="pt-4 pb-5  bg-muted text-primary   flex items-center justify-center gap-x-3">
          {/* <Image src="/mascot.svg" height={40} width={40} alt="Mascot" /> */}
          <h1 className="text-xl font-bold text-center  tracking-wide">
            Shad test
          </h1>{' '}
          <LayoutDashboard />{' '}
        </div>
      </Link>
      <div className="flex mt-3 p-2  flex-col gap-y-2 flex-1">
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
        <div className="flex flex-wrap gap-2 mb-3">
          {themes.map((theme) => {
            return (
              <div
                className="cursor-pointer"
                title={theme.label}
                onClick={() => setColor(theme.name)}
                key={theme.label}
              >
                <div
                  style={
                    {
                      '--theme-primary': `hsl(${
                        theme?.activeColor[mode === 'dark' ? 'dark' : 'light']
                      })`
                    } as React.CSSProperties
                  }
                  className={`h-6 w-6 bg-[--theme-primary] rounded-full `}
                ></div>
              </div>
            );
          })}
        </div>
        <ColorPicker />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
