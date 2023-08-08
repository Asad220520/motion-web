import axios from "axios";
import React, { useEffect, useState } from "react";
import GoodCard from "./GoodCard";
import "./index.scss";

const GoodState = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = (page) => {
    axios
      .get(`http://3.83.165.209/api/v1/blog/best-articles/`, {
        params: {
          page: page,
        },
      })
      .then((res) => {
        const moviesArray = Array.isArray(res.data.results)
          ? res.data.results
          : [];

        setMovies((prevMovies) => {
          const newMovies = moviesArray.filter(
            (newMovie) =>
              !prevMovies.some((prevMovie) => prevMovie.id === newMovie.id)
          );
          return [...prevMovies, ...newMovies];
        });
      })
      .catch((error) => {
        console.error("Error fetching additional movies:", error);
      });
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div id="goodState">
      <div className="container">
        <h1>Лучшие статьи</h1>
        <div className="goodState">
          {movies.map((el) => (
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







// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import GoodCard from "./GoodCard";
// import "./index.scss";
// const GoodState = () => {
//   const [movies, setMovies] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const getMovies = (page) => {
//     axios
//       .get(`http://3.83.165.209/api/v1/blog/best-articles/`, {
//         params: {
//           page: page,
//         },
//       })
//       .then((res) => {
//         const moviesArray = Array.isArray(res.data.results)
//           ? res.data.results
//           : [];
//         setMovies((prevMovies) => [...prevMovies, ...moviesArray]);
//       })
//       .catch((error) => {
//         console.error("Error fetching additional movies:", error);
//       });
//   };

//   useEffect(() => {
//     getMovies(currentPage);
//   }, [currentPage]);

//   const handleLoadMore = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };
//   return (
//     <div id="goodState">
//       <div className="container">
//         <h1>Лучшие статьи</h1>
//         <div className="goodState">
//           {movies.map((el) => (
//             <GoodCard el={el} key={el.id} />
//           ))}
//         </div>
//         <button onClick={handleLoadMore} className="btn">
//           Еще статьи
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GoodState;