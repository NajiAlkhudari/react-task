import React from 'react';

const ImageButton = ({ imageSrc, altText, onClick, className }) => {
  
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      <img src={imageSrc} alt={altText} className="button-image" />
    </button>
  );
};

export default ImageButton;
