'use client';

import { useBreadcrumb } from '@refinedev/core';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';
import { HomeIcon } from 'lucide-react';

export const Breadcrumbs = () => {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <Breadcrumb className="p-2 pl-5">
      <BreadcrumbList className=" text-lg ">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={'/'}>
              <HomeIcon className="h-5 w-5 font-bold " />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = breadcrumbs.length === index + 1;

          // if(isLast){
          //   return
          // }

          return (
            <Fragment key={breadcrumb.label + 'sdf'}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className={`${
                    isLast
                      ? 'text-muted-foreground hover:text-muted-foreground'
                      : ''
                  }`}
                  asChild={!isLast}
                >
                  {isLast ? (
                    breadcrumb.label
                  ) : (
                    <Link href={breadcrumb.href!}>{breadcrumb.label}</Link>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
