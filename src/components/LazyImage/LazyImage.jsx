import React, { useState } from "react";

export const LazyImage = ({
  src,
  alt,
  className,
  style,
  placeholder = "/img/placeholder.png",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <img
      src={hasError ? placeholder : src}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.7,
        transition: "opacity 0.3s ease-in-out",
      }}
      loading="lazy"
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};
