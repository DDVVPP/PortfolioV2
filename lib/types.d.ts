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
  secure_url: string;
  tags: string[];
};
