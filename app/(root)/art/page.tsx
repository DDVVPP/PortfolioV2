'use server';
import Art from '@/components/Art';
import { getArtImages } from '@/lib/getArtImages';
import { ArtImagesResponse } from '@/lib/types';

const ArtWrapper = async () => {
  const { artImages, error }: ArtImagesResponse = await getArtImages();

  if (!artImages) return <div>Images not found!</div>;
  if (error) return <div>Error returning images: {error}</div>;

  return <Art artImages={artImages} />;
};

export default ArtWrapper;
