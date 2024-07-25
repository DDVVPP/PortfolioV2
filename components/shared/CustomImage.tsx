import { useEffect, useState } from 'react';

/* eslint-disable @next/next/no-img-element */
const CustomImage = ({
  image,
}: {
  image: { altText: string; src: string; id: number };
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const complete = (
      document.getElementById(`${image.altText}`) as HTMLElement & {
        complete: boolean;
      }
    ).complete;

    if (complete) setIsLoading(false);
  }, [image.altText, isLoading]);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <img
        id={image.altText}
        alt={image.altText}
        src={image.src as string}
        className="size-full rounded-xl object-cover"
        loading="lazy"
        onLoad={onLoad}
      />
      {isLoading && (
        <div className="mt-2 size-full animate-pulse rounded-xl bg-slate-600"></div>
      )}
    </>
  );
};

export default CustomImage;
