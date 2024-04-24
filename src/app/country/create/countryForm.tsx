'use client';

import Container from '@components/container';
import { Button } from '@components/ui/button';
import { useCreate, useNavigation, useSelect } from '@refinedev/core';
import { useForm as refineForm } from '@refinedev/react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

// import { useForm } from "react-hook-form"
import { TypeOf, z } from 'zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@components/ui/textarea';
import CreateLayout from '@components/layout/createLayout';
import { MultiSelect } from 'react-multi-select-component';
import { CountryType } from '../../../../types';

const formSchema = z.object({
  name: z.string().min(5),
  code: z.string()
  //   states: z.array(z.any())
});

type CountryFormType = z.infer<typeof formSchema>;

export default function CountryForm({
  initailValues,
  loading
}: {
  initailValues?: CountryType;
  loading?: boolean;
}) {
  const editMode = !!initailValues;
  //   const initailStates =
  //     initailValues?.states?.map((item) => ({
  //       label: item.name,
  //       value: item.value
  //     })) || [];
  const form = refineForm({});
  const {
    refineCore: { onFinish }
  } = form;
  // const form = useForm<CountryFormType>({
  //   resolver: zodResolver(formSchema),

  //   defaultValues: {
  //     name: initailValues?.name || '',
  //     code: initailValues?.code || ''
  //     //   states: initailStates
  //   }
  // });

  //   const { options: stateOptions } = useSelect({
  //     resource: 'state',
  //     optionLabel: 'name',
  //     optionValue: 'id'
  //   });

  const onSubmit = (values: any) => {
    // if (editMode) {
    //   let stateIds = values.states.map((item) => ({ id: item.value }));
    //   values.states = stateIds;
    // }
    onFinish(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-4 mt-4 ring-gray-100 ring-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>Name of a country</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country Code</FormLabel>
              <FormControl>
                <Input placeholder="Country Code" {...field} />
              </FormControl>
              <FormDescription>Provide code</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* {editMode && (
          <FormField
            control={form.control}
            name="states"
            render={({ field }) => (
              <FormItem>
                <FormLabel>States</FormLabel>

                <FormControl>
                  <MultiSelect
                    options={stateOptions || []}
                    value={form.getValues('states')}
                    onChange={(value: { label: string; value: string }[]) =>
                      form.setValue('states', value)
                    }
                    labelledBy="States"
                    //   isLoading={isSta}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        )} */}

        <Button type="submit"> {editMode ? 'Edit' : 'Submit'} </Button>
      </form>
    </Form>
  );
}
