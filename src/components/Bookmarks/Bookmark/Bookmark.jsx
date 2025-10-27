import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-100 px-4 py-4 my-2 rounded-md">
      <h3 className="text-xl text-center">{title}</h3>
    </div>
  );
};

export default Bookmark;
