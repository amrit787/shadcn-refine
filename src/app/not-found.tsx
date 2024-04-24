'use client';

import EmptyState from '@components/empty-state';
import { Authenticated, ErrorComponent } from '@refinedev/core';
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Suspense>
      <Authenticated key="not-found">
        <EmptyState subtitle="Page not found" />
      </Authenticated>
    </Suspense>
  );
}
