'use server';
import Art from '@/components/Art';
import { getUpdatedArtImages } from '@/lib/actions/getArtImages';
import { ArtImagesResponse } from '@/lib/types';

const ArtWrapper = async () => {
  const { sortedArtImages, error }: ArtImagesResponse =
    await getUpdatedArtImages();

  if (!sortedArtImages) return <div>Images not found!</div>;
  if (error) return <div>Error returning images: {error}</div>;

  return <Art sortedArtImages={sortedArtImages} />;
};

export default ArtWrapper;
