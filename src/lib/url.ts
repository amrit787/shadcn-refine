import qs from 'query-string';

export const getFullUrl = (url?: string | null) => url || '';

export const addSearchParams = (url: string, params: Record<string, any>) => {
  return qs.stringifyUrl(
    {
      url: url,
      query: params
    },
    { skipNull: true }
  );
};

// append search params to query string
export const appendSearchParams = (
  queryString: string,
  item: { key: string; value: string | null }
) => {
  let query = qs.parse(queryString);
  query[item.key] = item.value;

  return qs.stringify(query, { skipNull: true });
};
