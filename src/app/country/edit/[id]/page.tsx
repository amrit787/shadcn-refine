'use client';

import CountryForm from '@app/country/create/countryForm';
import EditLayout from '@components/layout/editLayout';
import { useList, useNavigation, useSelect } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import React from 'react';
import { CountryType } from '../../../../../types';
import EmptyState from '@components/empty-state';

export default function BlogPostCreate() {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish, queryResult, formLoading },
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({});

  const record = queryResult?.data?.data as CountryType | undefined;

  const { data: statesData, isLoading: statesIsLoading } = useList({
    resource: 'state',
    queryOptions: {
      enabled: !!record
    }
  });

  if (queryResult?.isLoading) {
    return <p>loading...</p>;
  }

  if (!record) {
    return <EmptyState />;
  }

  return (
    <EditLayout>
      <CountryForm loading={queryResult?.isLoading} initailValues={record} />
    </EditLayout>
  );
}
