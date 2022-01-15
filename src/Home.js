import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "ABC", body: "lorem ipsum", author: "mario", id: 1 },
    { title: "DEF", body: "lorem ipsum", author: "yoshi", id: 2 },
    { title: "GHI", body: "lorem ipsum", author: "luigi", id: 3 },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
