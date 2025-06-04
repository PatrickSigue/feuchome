import React from 'react';

interface ImageCardProps {
  imageSrc: string;
  altText: string;
  isBorderLeft: boolean;
  cardHeader: string;
  cardBody: string;
  iconSvg: React.ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  altText,
  isBorderLeft,
  cardHeader,
  cardBody,
  iconSvg,
}) => {
  return (
    <div
      className={`
        relative flex flex-row flex-grow w-full h-44 overflow-hidden
        ${isBorderLeft ? 'border-l-8' : 'border-r-8'}
        border-[#d0ad22]
      `}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="absolute inset-0 w-full h-full object-cover object-center grayscale"
      />

      <div
        className={`
          relative z-10 flex w-full h-full 
          ${isBorderLeft ? 'flex-row' : 'flex-row-reverse'} 
        `}
      >
        <div className="w-2/3 flex flex-col justify-center p-7">
          <h3 className="text-[#d0ad22] text-lg font-bold leading-none mb-1 text-shadow-lg">{cardHeader}</h3>
          <p className="text-white text-xs leading-snug font-dm-sans text-shadow-lg">{cardBody}</p>
        </div>

        <div className="w-1/3 flex items-center justify-center p-2">
          <div className="flex items-center justify-center w-19 h-19 rounded-full bg-[#d0ad22]">
            {iconSvg ? (
              <span className="w-10 h-10 text-white">{iconSvg}</span>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
