import React from "react";
import { IKImage } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Image = ({src,className,w,h,alt}:{src:string,className:string,w:number,h:number,alt:string}) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      width={w}
      height={h}
      loading="lazy"
      alt={alt}
      lqip={{ active: true, quality: 20 }}
    
    />
  );
};

export default Image;
