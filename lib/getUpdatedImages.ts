'use server';
import 'dotenv/config';

export const getUpdatedImages = async () => {
  try {
    const authValues = `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`;
    const auth = Buffer.from(`${authValues}`).toString('base64');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const data = await response.json();
    return data.resources;
  } catch (error) {
    console.error('Failed to fetch images from Cloudinary', error);
  }
};
