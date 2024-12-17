export type ArtImage = {
  id: string;
  src: string;
  title: string;
  altText: string;
  blurDataURL: string;
  tags: string[];
};

export type ArtImagesResponse = {
  sortedArtImages?: ArtImage[];
  error: string | null;
};

export type ProcessedImage = {
  id: string;
  src: string;
  title: string;
  altText: string;
  blurDataURL: string;
  tags: any;
};

export type CloudinaryResource = {
  public_id: string;
  secure_url: string;
  tags: string[];
};
