import { StaticImageData } from 'next/image';
import { JSXElement } from 'react';

export type ProcessedImage = {
  id: string;
  src: string;
  title: string;
  altText: string;
  blurDataURL: string;
  tags: string[];
};

export type ArtImagesResponse = {
  sortedArtImages?: ProcessedImage[];
  error: string | null;
};

export type CloudinaryResource = {
  public_id: string;
  display_name: string;
  secure_url: string;
  tags: string[];
};

export type Project = {
  title: string | JSXElement;
  description: JSXElement | string;
  coverImage: StaticImageData;
  demoLink?: string;
  githubLink: string;
  altText: string;
  tags: string[];
  demoCredentials?: boolean;
};

export type Repo = {
  updated_at: string;
  name: string;
  state: 'open' | 'closed';
  merged_at: string | null;
  title: string;
  url: string;
  html_url: string;
  body: string;
  commit: { author: { date: string }; message: string };
};

export type RepoPR = {
  repoName: string;
  state: 'open' | 'closed';
  mergedAt: string | null;
  url: string;
  title: string;
  body: string;
};

export type RepoCommit = {
  repoName: string;
  date: string;
  message: string;
  url: string;
};
