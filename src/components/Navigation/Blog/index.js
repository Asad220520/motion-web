import "./index.scss";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import BlogProf from "./BlogProf";
import Front from "./Front";
import GoodState from "./GoodState";
import NewInteres from "./NewIteres";
import Loading from "../../Loading";
import { BASE_URL } from "../../../API";
import { LanguageContext } from "../../../context";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { language, dark } = useContext(LanguageContext);
  console.log(posts);
  const itemsPerPage = 4;
  window.scroll(0, 0);
  const getBlog = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${language}/api/v1/blog/posts?page=${currentPage}`)
      .then((res) => {
        setPosts(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching additional posts:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getBlog();
  }, [currentPage, language]);

  return (
    <>
      {isLoading ? (
        <div className="container">
          <div
            style={{
              display: "flex",
              margin: "auto 0",
              justifyContent: "center",
              paddingTop: "200px",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              background: dark ? "#000" : "",
            }}
            id="blog"
          >
            <BlogProf />
            <div className="container">
              <h1 data-aos="fade-right">
                {language === ""
                  ? "Блоги"
                  : language === "ky"
                  ? "Блогтор"
                  : "Blogs"}
              </h1>
              <div className="blog">
                {posts.map((post) => (
                  <div className="bl" key={post.id}>
                    <Front language={language} dark={dark} el={post} />
                  </div>
                ))}
              </div>
              {/* <button
                style={{
                  color: dark ? "#fff" : "",
                }}
                className="btn"
              >
                {language === ""
                  ? "Блоги"
                  : language === "ky"
                  ? "Блогдор"
                  : "Blogs"}
              </button> */}
            </div>
          </div>
          <GoodState dark={dark} />
          <NewInteres dark={dark} />
        </>
      )}
    </>
  );
};

export default Blog;
