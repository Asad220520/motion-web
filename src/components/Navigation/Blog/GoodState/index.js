import axios from "axios";
import React, { useEffect, useState } from "react";
import GoodCard from "./GoodCard";
import "./index.scss";
const GoodState = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const API_KEY = "45d1d56fc54beedb6c0207f9ac6cab7c";
 const getMovies = (key, page) => {
   axios
     .get(`https://api.themoviedb.org/3/movie/popular`, {
       params: {
         api_key: API_KEY,
         language: "en-US",
         page: page,
       },
     })
     .then((res) => {
       const moviesArray = Array.isArray(res.data.results)
         ? res.data.results
         : [];
       setMovies((prevMovies) => [...prevMovies, ...moviesArray]);
     })
     .catch((error) => {
       console.error("Error fetching additional movies:", error);
     });
 };

  useEffect(() => {
    getMovies(API_KEY, currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <div id="goodState">
      <div className="container">
        <h1>Лучшие статьи</h1>
        <div className="goodState">
          {movies.slice(0,6).map((el) => (
            <GoodCard el={el} key={el.id} />
          ))}
        </div>
        <button onClick={handleLoadMore} className="btn">
          Еще статьи
        </button>
      </div>
    </div>
  );
};

export default GoodState;
