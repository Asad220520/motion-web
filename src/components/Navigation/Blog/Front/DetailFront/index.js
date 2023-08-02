// import React, { useEffect, useState } from "react";
// import "./index.scss";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import BlogProf from "../../BlogProf";
// const DetailFront = () => {
//   const { id } = useParams();
//   const [actorDetails, setActorDetails] = useState({});
//   useEffect(() => {
//     axios(`http://13.48.46.219/api/v1/blog/post/${id}/`).then((res) =>
//       setActorDetails(res.data)
//     );
//   }, []);
//   console.log("detal", actorDetails);
//   if (!actorDetails.descriptions || !Array.isArray(actorDetails.descriptions)) {
//     return <div>Loading...</div>;
//   }

//   for (let i = 0; i < actorDetails.length; i++) {
//     const element = actorDetails[i]
//   }
//   return (
//     <div id="DetailFront">
//       <div className="container">
//         <BlogProf />
//         <div className="DetailFront">
//           {/* <h1>{actorDetails.tags[0].name}</h1> */}
//           {/* <p>{actorDetails.descriptions[1].description}</p> */}
//           <img
//             className="indexImage1"
//             src={actorDetails.media[1].media}
//             alt="alt"
//           />
//           {/* <h1>{actorDetails.tags[1].name}</h1> */}
//           {/* <p>{actorDetails.descriptions[i]}</p>; */}
//           {/* <p>{actorDetails.descriptions[3].description}</p>
//           <p>{actorDetails.descriptions[4].description}</p>
//           <p>{actorDetails.descriptions[5].description}</p> */}
//           <img src={actorDetails.media[2].media} alt="alt" />
//           {/* <p>{actorDetails.descriptions[6].description}</p>
//           <p>{actorDetails.descriptions[7].description}</p> */}
//           <img src={actorDetails.media[3].media} alt="alt" />
//           {/* <p className="por">{actorDetails.descriptions[8].description}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailFront;
import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogProf from "../../BlogProf";
const DetailFront = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  useEffect(() => {
    axios(`http://13.48.46.219/api/v1/blog/post/${id}/`).then((res) =>
      setBlogDetail(res.data)
    );
  }, []);
  console.log("detal", blogDetail);
  if (!blogDetail.descriptions || !Array.isArray(blogDetail.descriptions)) {
    return <div>Loading...</div>;
  }

  const descriptionsArray = blogDetail.descriptions;
  return (
    <div id="DetailFront">
      <div className="container">
        <BlogProf />
        <div className="DetailFront">
          <h1>{blogDetail.title}</h1>
          {blogDetail.media.map((item, index) => (
            <img key={index} src={item.media} alt={`Image ${index + 2}`} />
          ))}
          {descriptionsArray.map((description, index) => (
            <p key={index}>{description.description}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailFront;
