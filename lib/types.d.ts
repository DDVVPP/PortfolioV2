import { StaticImageData } from 'next/image';

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
  description: string;
  coverImage: StaticImageData;
  demoLink: string;
  githubLink: string;
  altText: string;
  tags: string[];
};
