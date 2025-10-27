import React from "react";
import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h3 className="my-4">Bookmarked Blogs: {bookmarks.length}</h3>
      <div className="bg-amber-100 p-8 rounded-xl">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
