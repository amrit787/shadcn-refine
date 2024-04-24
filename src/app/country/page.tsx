'use client';

import {
  GetManyResponse,
  useList,
  useMany,
  useNavigation
} from '@refinedev/core';
import { useTable } from '@refinedev/react-table';
import { ColumnDef, flexRender } from '@tanstack/react-table';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  Eye,
  Pencil
} from 'lucide-react';
import { Input } from '@components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@components/ui/select';
import { Button } from '@components/ui/button';
import ListLayout from '@components/layout/listLayout';

export default function BlogPostList() {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: 'id',
        accessorKey: 'id',
        header: 'ID'
      },
      {
        id: 'name',
        accessorKey: 'name',
        header: 'Name'
      },
      {
        id: 'states',
        header: 'states',
        accessorKey: 'states',
        cell: function render({ getValue, table }) {
          const states = getValue() as any;
          return (
            <>
              <div className="flex gap-2">
                {states?.map((item) => item.name)}
              </div>
            </>
          );
        }
      },

      {
        id: 'actions',
        accessorKey: 'id',
        header: 'Actions',
        cell: function render({ getValue }) {
          return (
            <div className="flex row wrap gap-2">
              <Button
                onClick={() => {
                  show('country', getValue() as string);
                }}
              >
                <Eye />
              </Button>
              <Button
                onClick={() => {
                  edit('country', getValue() as string);
                }}
                variant={'outline'}
              >
                <Pencil />
              </Button>
            </div>
          );
        }
      }
    ],
    []
  );

  const { edit, show, create } = useNavigation();

  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      tableQueryResult: { data: tableData }
    },
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize
  } = useTable({
    columns
  });

  return (
    <ListLayout>
      <Table>
        <TableCaption>A list of countries.</TableCaption>

        <TableHeader>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {!header.isPlaceholder &&
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="">
          <TableRow>
            <TableCell colSpan={12}>
              {' '}
              <div className="mt-8 ">
                <Pagination className="">
                  <PaginationContent className="ml-auto">
                    <PaginationItem className="flex items-center gap-x-4 justify-center">
                      <strong className="w-32">
                        {' '}
                        {getState().pagination.pageIndex + 1} / {getPageCount()}{' '}
                      </strong>

                      <p className="w-20">Go to </p>
                      <Input
                        type="number"
                        className="w-20"
                        defaultValue={getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                          const page = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          setPageIndex(page);
                        }}
                      />

                      <Select
                        value={getState().pagination.pageSize.toString()}
                        onValueChange={(e) => {
                          setPageSize(Number(e));
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Items per page" />
                        </SelectTrigger>
                        <SelectContent>
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <SelectItem
                              key={pageSize}
                              value={pageSize.toString()}
                            >
                              {'Show'} {pageSize}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </PaginationItem>
                    <PaginationItem
                      onClick={() => setPageIndex(0)}
                      // disabled={!getCanPreviousPage()}
                    >
                      <PaginationLink className="font-bold">
                        {' '}
                        <ChevronFirst />{' '}
                      </PaginationLink>
                    </PaginationItem>

                    <PaginationItem
                      onClick={() => previousPage()}
                      // disabled={!getCanPreviousPage()}
                    >
                      <PaginationPrevious />
                    </PaginationItem>
                    <PaginationItem
                      onClick={() => nextPage()}
                      // disabled={!getCanNextPage()}
                    >
                      <PaginationNext />
                    </PaginationItem>
                    <PaginationItem
                      onClick={() => setPageIndex(getPageCount() - 1)}
                      // disabled={!getCanNextPage()
                      // disabled={!getCanPreviousPage()}
                    >
                      <PaginationLink>
                        {' '}
                        <ChevronLast />{' '}
                      </PaginationLink>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className="mt-24"></div>
    </ListLayout>
  );
}
