'use client';

import ShowLayout from '@components/layout/showLayout';
import EmptyState from '@components/empty-state';
import { Button } from '@components/ui/button';
import {
  useList,
  useNavigation,
  useOne,
  useResource,
  useShow
} from '@refinedev/core';

export default function BlogPostShow() {
  const { resource } = useResource();
  const {
    queryResult: { data, isLoading }
  } = useShow({});

  const record = data?.data as
    | { id: string; name: string; states: { id: string; name: string }[] }
    | undefined;

  const { data: statesData, isLoading: statesIsLoading } = useList({
    resource: 'state',
    filters: [
      {
        field: 'countryId',
        operator: 'between',
        value: record?.id!
      }
    ],
    queryOptions: {
      enabled: !!record
    }
  });

  let states = statesData?.data as { id: string; name: string }[];

  if (isLoading) {
    return <p> Loading data....</p>;
  }

  if (!record && !isLoading) {
    return <EmptyState />;
  }

  return (
    <ShowLayout>
      <div className="p-2">
        {/* <p className="text-sm"> info about country</p> */}
        <p>{record?.name}</p>

        <div className="">
          States{' '}
          {statesIsLoading ? (
            <p>Loading states...</p>
          ) : (
            states?.map((item) => <p key={item.id}>- {item.name}</p>)
          )}
        </div>
      </div>
    </ShowLayout>
  );
}
