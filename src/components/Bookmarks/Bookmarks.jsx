import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="bg-slate-100 p-8 rounded-xl md:w-1/3">
      <div className="text-2xl px-6 py-6 text-center bg-indigo-100 border-2 rounded-xl border-indigo-700 ">
        <h3>Total reading time: {readingTime}min</h3>
      </div>
      <h3 className="my-4 text-2xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
