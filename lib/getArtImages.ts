'use server';
import 'dotenv/config';

export const getArtImages = async () => {
  try {
    const authValues = `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`;
    const auth = Buffer.from(`${authValues}`).toString('base64');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=64&tags=true`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const data = await response.json();

    const artImages = await Promise.all(
      data.resources.map(
        async (image: {
          public_id: string;
          secure_url: string;
          tags: string[];
        }) => {
          const cloudinaryBaseURL = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
          const title = image.public_id.split('_')[0].split('/').pop();
          const altText = title
            ?.replace(/(^[A-Z])/, (match) => match.toLowerCase())
            .replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);

          // Blur Data Processing
          const blurURL = `${cloudinaryBaseURL}/e_blur:300,w_22,h_22,c_scale/${image.public_id}.jpg`;
          const blurBuffer = await fetch(blurURL).then((res) =>
            res.arrayBuffer()
          );
          const blurDataURL = `data:image/webp;base64,${Buffer.from(blurBuffer).toString('base64')}`;

          return {
            id: image.public_id,
            src: image.secure_url,
            title,
            altText,
            blurDataURL,
            tags: image.tags ?? [],
          };
        }
      )
    );

    return { artImages, error: null };
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return { error: 'An unexpected error occurred while fetching images' };
  }
};
