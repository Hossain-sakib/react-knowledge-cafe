import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkedAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog, idx) => (
        <Blog
          key={idx}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkedAsRead={handleMarkedAsRead}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
