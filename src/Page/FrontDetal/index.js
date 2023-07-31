import React from "react";
import "./index.scss";
import { Himages } from "../../assets/Homepage/Himages";
import Why from "./Why";
import WereKurs from "./WereKurs";
import Obusheni from "./obucheni";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ThisKurs from "./ThisKurs";
import Sertivkat from "./Sertivkat";

const KursFront = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios(`http://13.48.46.219/api/v1/courses/courses/${id}/`).then((res) =>
      setDetail(res.data)
    );
  }, []);
  console.log('dfx',detail);
  return (
    <>
     
       <div>
          <Himages/>
          <Why />
          <WereKurs el={detail}/>
          <Obusheni />
          <ThisKurs/>
          <Sertivkat/>
        </div> 
    </>
  );
};

export default KursFront;
