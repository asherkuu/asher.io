import {SANITY_URL} from "#/public/constant/env";

type SanityFetchProps = {
  query: string;
  params?: any;
  isClient?: boolean;
};

export const sanityFetch = async ({query, params = {}, isClient = false}: SanityFetchProps) => {
  const encodedQuery = encodeURIComponent(query);
  const PATH = !isClient ? SANITY_URL : "/api/sanity";
  let url = `${PATH}?query=${encodedQuery}`;

  Object.keys(params)!.map(param => {
    url += `&${param}=${params[param]}`;
  });

  const {result} = await fetch(url, {cache: "no-store"}).then(res => res.json());
  return result || [];
};
