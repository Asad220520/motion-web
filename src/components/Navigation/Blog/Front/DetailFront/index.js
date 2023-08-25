import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogProf from "../../BlogProf";
import { BASE_URL } from "../../../../../API";
import { LanguageContext } from "../../../../../context";
const DetailFront = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  const { language, dark } = useContext(LanguageContext);
  useEffect(() => {
    axios(`${BASE_URL}/${language}/api/v1/blog/post/${id}/`).then((res) =>
      setBlogDetail(res.data)
    );
  }, [language]);
  window.scroll(0, 0);
  if (!blogDetail.descriptions || !Array.isArray(blogDetail.descriptions)) {
    return <div>Loading...</div>;
  }
  console.log(blogDetail);
  const descriptionsArray = blogDetail.descriptions;
  return (
    <div
      style={{
        background: dark ? "#000" : "",
        borderBottom: dark ? "1px solid #fff" : "",
      }}
      id="DetailFront"
    >
      <BlogProf />
      <div className="container">
        <div className="DetailFront">
          <h1>{blogDetail.title}</h1>
          {blogDetail.media.map((item, index) => (
            <img
              style={{
                border: dark ? "1px solid #fff" : "",
              }}
              key={index}
              src={item.media}
              alt={`Image ${index + 2}`}
            />
          ))}
          {descriptionsArray.map((description, index) => (
            <p
              style={{
                color: dark ? "#fff" : "",
              }}
              key={index}
            >
              {description.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailFront;
