'use client';

import { Button } from '@components/ui/button';
import { useNavigation, useResource, useResourceParams } from '@refinedev/core';
import { PropsWithChildren } from 'react';

const CreateLayout = ({ children }: PropsWithChildren) => {
  const { resource, resources } = useResource();
  const { id } = useResourceParams();
  const { edit, list, show } = useNavigation();

  return (
    <div className="p-4 w-full">
      <div className=" flex justify-between w-full gap-x-4">
        <p className="text-3xl font-bold">Create</p>

        <div className="flex gap-x-4">
          <Button onClick={() => list(resource?.name!)}>List</Button>
          {/* <Button onClick={() => show(resource?.name!, id ?? '')}>Show</Button> */}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CreateLayout;
