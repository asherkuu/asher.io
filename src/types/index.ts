import {MDXRemoteSerializeResult} from "next-mdx-remote";

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

export type InfinityResponseType<DataType> = {
  body: DataType;
  page: Number;
};

export type MDXHtml = MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;

export type PostLayoutType = {
  _id: string;
  slug: string;
  title: string;
  publishedAt: Date;
  readingTime: string;
};

export type ProjectType = "TOY" | "WORK";
export type Summaries = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: "projectSummaries";
  _updatedAt: Date;
  description: string;
  title: string;
};

export type Project = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  belong: string;
  position: string;
  workedAt: string;
  workStartedAt: string;
  workEndedAt: string;
  isPublished: boolean;
  publishedAt: Date;
  mainImage: string;
  summaries: Summaries[];
  projectType: ProjectType;
  html?: MDXHtml;
  readingTime?: string;
};

export type Post = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tweets: any[];
};

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type YouTube = {
  subscriberCount: number;
  viewCount: number;
};

export type GitHub = {
  stars: number;
};

export type Unsplash = {
  downloads: number;
  views: number;
};
