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
  const { language } = useContext(LanguageContext);
  console.log(posts);
  const itemsPerPage = 4;
  window.scroll(0, 0);
  const getBlog = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/${language}/api/v1/blog/posts?page=${currentPage}`)
      .then((res) => {
        const newPosts = Array.isArray(res.data.results)
          ? res.data.results
          : [];

        setPosts((prevPosts) => {
          const uniqueNewPosts = newPosts.filter(
            (newPost) => !prevPosts.some((post) => post.id === newPost.id)
          );

          return [...prevPosts, ...uniqueNewPosts];
        });

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

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const visiblePosts = posts.slice(0, currentPage * itemsPerPage);

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
          <div id="blog">
            <BlogProf />
            <div className="container">
              <h1 data-aos="fade-right">
                {language === ""
                  ? "Блоги"
                  : language === "ky"
                  ? "Блогдор"
                  : "Blogs"}
              </h1>
              <div className="blog">
                {visiblePosts.map((post) => (
                  <div key={post.id}>
                    <Front el={post} />
                  </div>
                ))}
              </div>
              {visiblePosts.length < posts.length && (
                <button onClick={handleLoadMore} className="btn">
                  {language === ""
                    ? "Блоги"
                    : language === "ky"
                    ? "Блогдор"
                    : "Blogs"}
                </button>
              )}
            </div>
          </div>
          <GoodState />
          <NewInteres />
        </>
      )}
    </>
  );
};

export default Blog;
