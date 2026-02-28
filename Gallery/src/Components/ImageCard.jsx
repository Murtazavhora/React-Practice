import React from "react";

const ImageCard = ({ item }) => {
  return (
    <div>
      <a href={item.url} target="_blank" rel="noreferrer">
        <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img
            src={item.download_url}
            alt={item.author}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </a>
      <h2 className="font-medium text-lg mt-2">{item.author}</h2>
    </div>
  );
};

export default ImageCard;