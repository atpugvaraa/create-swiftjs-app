import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ViewProps } from "@/swiftui/types";

interface ImageProps extends ViewProps, Omit<NextImageProps, "alt"> {
  src: string;
  alt?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  className = "",
  ...props
}) => {
  return <NextImage src={src} alt={alt} className={className} {...props} />;
};
