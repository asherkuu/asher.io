export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

export type GuestbookTypes = {
  body: string;
  created_by: string;
  id: string;
  updated_at: string;
};

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};
