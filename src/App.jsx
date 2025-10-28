import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingtime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };
  const handleMarkedAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingtime(newReadingTime);

    const remainingBookmarks = bookmarks.filter(bookmarks.id !== id);
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex mt-6 max-w-7xl mx-auto gap-8">
        <Blogs
          handleMarkedAsRead={handleMarkedAsRead}
          handleAddToBookmark={handleAddToBookmark}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
