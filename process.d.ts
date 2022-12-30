declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_PSDB_USERNAME: string;
    NEXT_PUBLIC_PSDB_PASSWORD: string;
    NEXT_PUBLIC_AUTH_SECRET: string;
    OAUTH_CLIENT_KEY: string;
    OAUTH_CLIENT_SECRET: string;
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    NEXT_PUBLIC_SANITY_VERSION: string;
    SANITY_API_TOKEN: string;
    NEXT_PUBLIC_TELEGRAM_TOKEN: string;
    NEXT_PUBLIC_TELEGRAM_CHAT_ID: string;
  }
}
