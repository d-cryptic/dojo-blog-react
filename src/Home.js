import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "ABC", body: "lorem ipsum", author: "mario", id: 1 },
    { title: "DEF", body: "lorem ipsum", author: "yoshi", id: 2 },
    { title: "GHI", body: "lorem ipsum", author: "luigi", id: 3 },
  ]);

  const [name, setName] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
