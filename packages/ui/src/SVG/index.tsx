import React from 'react';

const SVG = ({...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const {width, height} = props;

  return <img alt="icon" aria-hidden width={width || 24} height={height || 24} {...props} />;
};

export default SVG;
