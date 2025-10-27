import React from "react";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className=" flex flex-col gap-y-4">
      <img
        className="w-full h-80 object-cover"
        src={cover}
        alt={`Cover picture of ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 content-center">
          <img
            className="w-13 rounded-full object-cover"
            src={author_img}
            alt=""
          />
          <div>
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="gap-2 flex justify-between items-center">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)}>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, id) => (
          <span key={id}>
            <a className="ml-2" href="">
              {hash}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Blog;
