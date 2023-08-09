import "./index.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogProf from "./BlogProf";
import Front from "./Front";
import GoodState from "./GoodState";
import NewInteres from "./NewIteres";
import Loading from "../../Loading";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;

  const getBlog = () => {
    setIsLoading(true);
    axios
      .get(`http://3.83.165.209/api/v1/blog/posts?page=${currentPage}`)
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
  }, [currentPage]);

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
                Блоги
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
                  Показать больше
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
