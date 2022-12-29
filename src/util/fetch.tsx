import {DOMAIN} from "#/public/constant/env";

type SanityFetchTypes = {
  query: string;
};

export const sanityFetch = async ({query}: SanityFetchTypes) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `${DOMAIN}/api/sanity?query=${encodedQuery}`;
  const {result} = await fetch(url).then(res => res.json());
  return result || [];
};
