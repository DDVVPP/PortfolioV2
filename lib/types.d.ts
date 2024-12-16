export type ArtImage = {
  id: string;
  src: string;
  title: string;
  altText: string;
  blurDataURL: string;
  tags: string[];
};

export type ArtImagesResponse = {
  artImages?: ArtImage[];
  error: string | null;
};
