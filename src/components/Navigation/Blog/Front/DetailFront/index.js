import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogProf from "../../BlogProf";
const DetailFront = () => {
  const { id } = useParams();
  const [actorDetails, setActorDetails] = useState({});
  useEffect(() => {
    axios(`http://13.48.46.219/api/v1/blog/post/${id}/`).then((res) =>
      setActorDetails(res.data)
    );
  }, []);
  console.log("detal", actorDetails);
  if (!actorDetails.descriptions || !Array.isArray(actorDetails.descriptions)) {
    return <div>Loading...</div>;
  }
  return (
    <div id="detailFront">
      <div className="container">
        <BlogProf />
        <div className="detailFront">
          <h1>{actorDetails.tags[0].name}</h1>
          <p>{actorDetails.descriptions[1].description}</p>
          <img
            className="indexImage1"
            src={actorDetails.media[1].media}
            alt="alt"
          />
          <h1>{actorDetails.tags[1].name}</h1>
          <p>{actorDetails.descriptions[2].description}</p>
          <p>{actorDetails.descriptions[3].description}</p>
          <p>{actorDetails.descriptions[4].description}</p>
          <p>{actorDetails.descriptions[5].description}</p>
          <img src={actorDetails.media[2].media} alt="alt" />
          <p>{actorDetails.descriptions[6].description}</p>
          <p>{actorDetails.descriptions[7].description}</p>
          <img src={actorDetails.media[3].media} alt="alt" />
          <p>{actorDetails.descriptions[8].description}</p>
          {/* <p>{actorDetails.descriptions[9].description}</p> */}
          {/* <p>{actorDetails.descriptions[10].description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default DetailFront;
