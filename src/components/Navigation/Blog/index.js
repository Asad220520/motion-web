import "./index.scss";
import React, { useEffect, useState } from "react";
import Front from "./Front";
import GoodState from "./GoodState";
import NewInteres from "./NewIteres";
import axios from "axios";
import BlogProf from "./BlogProf";
const Blog = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.83.165.209/api/v1/blog/posts")
      .then((res) => setState(res.data.results));
  }, []);
  console.log(state);
  window.scroll(0, 0);
  return (
    <>
      <div id="blog">
        <BlogProf />
        <div className="container">
          <h1>Блоги</h1>
          <div className="blog">
            {state.map((el) => (
              <div key={el.id}>
                <Front el={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <GoodState />
      <NewInteres />
    </>
  );
};

export default Blog;
