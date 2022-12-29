import {SANITY_ENV} from "#/public/constant/env";

type SanityFetchTypes = {
  query: string;
};

export const sanityFetch = async ({query}: SanityFetchTypes) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `https://${SANITY_ENV.projectId}.api.sanity.io/v1/data/query/${SANITY_ENV.dataset}?query=${encodedQuery}`;
  const {result} = await fetch(url).then(res => res.json());
  return result || [];
};
