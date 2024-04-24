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

const formSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(10),
  category: z.string()
});

export default function BlogPostCreate() {
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
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 className="ring-gray-300 font-bold p-2 ">Create</h1>
        <div>
          <Button
            onClick={() => {
              list('blog_posts');
            }}
          >
            List
          </Button>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFinish)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormDescription>Your title</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Content" {...field} />
                </FormControl>
                <FormDescription>Enter your content</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select categories" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {categoryOptions.map((item, index) => (
                        <SelectItem key={index} value={item.value.toString()}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </Container>
  );
}
