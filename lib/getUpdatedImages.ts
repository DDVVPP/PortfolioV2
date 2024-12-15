'use server';
import sharp from 'sharp';

export const getBlurDataURL = async (
  artImages: {
    id: number;
    src: string;
    altText: string;
    title: string;
    tags: string[];
  }[]
) => {
  const imagesWithBlur = await Promise.all(
    artImages.map(async (image) => {
      const buffer = await fetch(image.src).then((res) => res.arrayBuffer());
      const imageBuffer = await sharp(buffer).resize(22, 22).webp().toBuffer();
      const blurDataURL = `data:image/webp;base64,${imageBuffer.toString(
        'base64'
      )}`;

      return { ...image, blurDataURL };
    })
  );

  return imagesWithBlur;
};
