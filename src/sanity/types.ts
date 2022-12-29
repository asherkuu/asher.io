import {MDXRemoteSerializeResult} from "next-mdx-remote";

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
  body: MDXRemoteSerializeResult;
  title: string;
  description: string;
  belong: string;
  position: string;
  workedAt: string;
  workStartedAt: string;
  workEndedAt: string;
  isPublished: boolean;
  publishedAt: string;
  summaries: Summaries[];
  projectType: ProjectType;
};

export type Snippet = {
  _id: string;
  slug: string;
  content: MDXRemoteSerializeResult;
  title: string;
  description: string;
  logo: string;
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
