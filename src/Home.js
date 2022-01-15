import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "ABC", body: "lorem ipsum", author: "mario", id: 1 },
    { title: "DEF", body: "lorem ipsum", author: "yoshi", id: 2 },
    { title: "GHI", body: "lorem ipsum", author: "luigi", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
