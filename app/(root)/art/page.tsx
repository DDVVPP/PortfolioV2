'use server';
import Art from '@/components/Art';
import { artImages } from '@/lib/constants';
import { getBlurDataURL } from '@/lib/getUpdatedImages';

const ArtWrapper = async () => {
  const updatedImages = await getBlurDataURL(artImages);
  console.log('blurdata', updatedImages);

  return <Art />;
};

export default ArtWrapper;
