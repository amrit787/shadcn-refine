'use client';

import Container from '@components/container';
import { Button } from '@components/ui/button';
import { useNavigation, useSelect } from '@refinedev/core';
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
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@components/ui/textarea';
import CreateLayout from '@components/layout/createLayout';
import CountryForm from './countryForm';

const formSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(10),
  category: z.string()
});

export default function CountryCreate() {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish }
  } = refineForm({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const { options: categoryOptions } = useSelect({
    resource: 'categories'
  });

  return (
    <CreateLayout>
      <CountryForm />
    </CreateLayout>
  );
}
