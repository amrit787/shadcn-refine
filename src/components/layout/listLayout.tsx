'use client';

import { Button } from '@components/ui/button';
import { useNavigation, useResource, useResourceParams } from '@refinedev/core';
import { PropsWithChildren } from 'react';

const ListLayout = ({ children }: PropsWithChildren) => {
  const { resource, resources } = useResource();
  const { id } = useResourceParams();
  const { create } = useNavigation();

  return (
    <div className="p-4">
      <div className=" flex justify-between w-full gap-x-4">
        <p className="text-3xl font-bold">List</p>

        <div className="flex gap-x-4">
          <Button onClick={() => create(resource?.name!)}>Create</Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ListLayout;
