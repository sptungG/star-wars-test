'use client';

import React, { useId, useState } from 'react';
import Image, { ImageProps } from 'next/image';

const NextImage = ({
  src,
  alt,
  style,
  fill,
  ...props
}: Omit<ImageProps, 'alt'> & { alt?: string }) => {
  const uid = useId();
  const [internalSrc, setInternalSrc] = useState<string>(String(src));
  return (
    <Image
      key={uid + String(internalSrc)}
      src={internalSrc}
      alt={alt || uid}
      sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw'
      loader={({ src }) => src}
      style={fill ? style : { height: 'auto', ...style }}
      fill={fill}
      onError={() => {
        const fallbackSrc = `https://ui-avatars.com/api/?background=475569&color=fff&name=${
          alt || uid
        }`;
        setInternalSrc(fallbackSrc);
      }}
      {...props}
    />
  );
};

export default NextImage;
