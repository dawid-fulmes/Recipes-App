import React, { useState } from "react";

import noImg from "../../img/noImg.png";

const Img = ({ className, src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src || noImg);
  const getAltImg = () => {
    setImgSrc(noImg);
  };

  return (
    <img className={className} src={imgSrc} alt={alt} onError={getAltImg} />
  );
};

export default Img;
