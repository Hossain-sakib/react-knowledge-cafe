import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white px-4 py-4 my-4 rounded-md">
      <h3 className="text-xl text-center">{title}</h3>
    </div>
  );
};

export default Bookmark;
