type SanityFetchProps = {
  query: string;
  params?: any;
};

export const sanityFetch = async ({query, params = {}}: SanityFetchProps) => {
  const encodedQuery = encodeURIComponent(query);
  let url = `/api/sanity?query=${encodedQuery}`;

  Object.keys(params)!.map(param => {
    url += `&${param}=${params[param]}`;
  });

  const {result} = await fetch(url).then(res => res.json());
  return result || [];
};
