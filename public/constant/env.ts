export const TELEGRAM_ENV = {
  token: process.env.NEXT_PUBLIC_TELEGRAM_TOKEN,
  chatId: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
};

export const SANITY_ENV = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  version: process.env.NEXT_PUBLIC_SANITY_VERSION,
};

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export const NEXT_AUTH_SECRET = process.env.NEXT_PUBLIC_AUTH_SECRET;

export const GITHUB_AUTH = {
  clientId: process.env.OAUTH_CLIENT_KEY as string,
  clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
};

export const SANITY_URL = `https://${SANITY_ENV.projectId}.api.sanity.io/v1/data/query/${SANITY_ENV.dataset}`;
