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
