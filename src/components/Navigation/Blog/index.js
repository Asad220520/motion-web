import "./index.scss";
import React from "react";
import Front from "./Front";
import Paython from "./Paython";
import IscI from "./IscI";
import GoodState from "./GoodState";
import NewInteres from "./NewIteres";
const Blog = () => {
  return (
    <>
      <div id="blog">
        <div className="container">
          <h1>Блоги</h1>
          <div className="blog">
            <IscI />
            <Front />
            <Paython />
          </div>
        </div>
      </div>
      <GoodState/>
      <NewInteres/>
    </>
  );
};

export default Blog;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Blog() {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://13.48.46.219/api/v1/blog/posts")
//       .then((res) => setState(res.data.results));
//   }, []);

//   return (
//     <div>
//       {state.map((el) => (
//         <div key={el.id}>
//           <h1>{el.title}</h1>
//           <p>Created at: {el.created_at}</p>
//           <p>Tags: {el.tags.map((tag) => tag.name).join(", ")}</p>
//           {el.descriptions.length > 0 ? (
//             <p>Description: {el.descriptions[0].description}</p>
//           ) : (
//             <p>Description: N/A</p>
//           )}
//           {el.media.length > 0 && (
//             <video controls>
//               <source src={el.media[0].media} type="video/mp4" />
//             </video>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Blog;


