import { authProvider } from '@providers/auth-provider';
import { CheckResponse } from '@refinedev/core/dist/contexts/auth/types';
import { useEffect, useState } from 'react';

export const useAuthenticated = () => {
  const [data, setData] = useState<CheckResponse>({ authenticated: false });

  useEffect(() => {
    async function init() {
      let data = await authProvider.check();
      setData(data);
    }
    init();
  }, []);
  return data;
};
