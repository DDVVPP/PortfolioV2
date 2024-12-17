'use server';
import 'dotenv/config';
import { artImageOrder } from '../constants';
import { CloudinaryResource, ProcessedImage } from '../types';

const fetchCloudinaryResources = async () => {
  try {
    const maxResults = 100;
    const authValues = `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`;
    const auth = Buffer.from(authValues).toString('base64');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=${maxResults}&tags=true`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const data = await response.json();

    const filteredImagesFromPortfolioArtRepo = data.resources.filter(
      (image: { asset_folder?: string }) =>
        image.asset_folder === 'portfolio-art'
    );

    return filteredImagesFromPortfolioArtRepo || [];
  } catch (error) {
    console.error('Failed to fetch images:', error);
  }
};

const sortImages = (images: ProcessedImage[]) => {
  return images.sort((a, b) => {
    const indexA = artImageOrder.indexOf(a.altText);
    const indexB = artImageOrder.indexOf(b.altText);
    return indexA - indexB;
  });
};

const generateBlurDataURL = async (publicId: string) => {
  const cloudinaryBaseURL = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
  const blurURL = `${cloudinaryBaseURL}/e_blur:300,w_22,h_22,c_scale/${publicId}.jpg`;
  const blurBuffer = await fetch(blurURL).then((res) => res.arrayBuffer());
  return `data:image/webp;base64,${Buffer.from(blurBuffer).toString('base64')}`;
};

const formatImages = async (images: CloudinaryResource[]) => {
  return Promise.all(
    images.map(async (image: CloudinaryResource) => {
      const { public_id: publicId, secure_url: secureUrl, tags } = image;
      try {
        const blurDataURL = await generateBlurDataURL(publicId);

        const title = publicId.split('_')[0].split('/').pop() ?? '';
        const altText = title
          ?.replace(/(^[A-Z])/, (match: string) => match.toLowerCase())
          .replace(/([A-Z])/g, (match: string) => `-${match.toLowerCase()}`);

        return {
          id: publicId,
          src: secureUrl,
          title,
          altText,
          blurDataURL,
          tags: tags ?? [],
        };
      } catch (error) {
        console.error(`Error formatting image ${publicId}:`, error);
      }
    })
  );
};

export const getUpdatedArtImages = async () => {
  try {
    // Fetch images from Cloudinary
    const cloudinaryResources = await fetchCloudinaryResources();

    // Format images to include necessary properties for rendering
    const formattedImages = await formatImages(cloudinaryResources);

    // Sort images using the artImages array
    const sortedArtImages = sortImages(formattedImages as ProcessedImage[]);

    return { sortedArtImages, error: null };
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return { error: 'An unexpected error occurred while fetching images' };
  }
};
