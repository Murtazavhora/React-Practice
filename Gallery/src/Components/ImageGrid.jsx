import React from "react";
import ImageCard from "../Components/ImageCard";

const ImageGrid = ({ data, loading }) => {
  if (loading) {
    return <h2 className="mt-10">Loading...</h2>;
  }

  if (data.length === 0) {
    return <h3 className="text-gray-400 mt-10">No user data</h3>;
  }

  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {data.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ImageGrid;