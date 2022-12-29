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
