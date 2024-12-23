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
  title: string;
  description: JSXElement;
  coverImage: StaticImageData;
  demoLink: string;
  githubLink: string;
  altText: string;
  tags: string[];
};
