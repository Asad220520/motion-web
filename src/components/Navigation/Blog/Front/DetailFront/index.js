import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogProf from "../../BlogProf";
const DetailFront = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  useEffect(() => {
    axios(`http://3.83.165.209/api/v1/blog/post/${id}/`).then((res) =>
      setBlogDetail(res.data)
    );
  }, []);
  window.scroll(0, 0);
  if (!blogDetail.descriptions || !Array.isArray(blogDetail.descriptions)) {
    return <div>Loading...</div>;
  }
  const descriptionsArray = blogDetail.descriptions;
  return (
    <div id="DetailFront">
      <BlogProf />
      <div className="container">
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
