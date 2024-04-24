'use client';

import { Button } from '@components/ui/button';
import { useNavigation, useResource, useResourceParams } from '@refinedev/core';
import { PropsWithChildren } from 'react';

const ShowLayout = ({ children }: PropsWithChildren) => {
  const { resource, resources } = useResource();
  const { id } = useResourceParams();
  const { edit, list } = useNavigation();

  return (
    <div className="p-4">
      <div className=" flex justify-between w-full gap-x-4">
        <p className="text-3xl font-bold">Show</p>

        <div className="flex gap-x-4">
          <Button onClick={() => list(resource?.name!)}>List</Button>
          <Button onClick={() => edit(resource?.name!, id ?? '')}>Edit</Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ShowLayout;
