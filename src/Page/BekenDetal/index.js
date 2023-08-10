  import React, { useEffect, useState } from "react";
import "./index.scss";
import Why from "./why"
import Glav from "./glav"
import WereKurs from "./werekurs"
import Obusheni from "./obucheni"
import ThisKurs from "./thiskurs"
import Sertivkat from "./sertivkat"
import SvoiSait from "./delaiSvoiSait"
import Mentory from "./mentory"
import ProgramKurs from "./programkursa"
import axios from "axios";
import { useParams } from "react-router-dom";

const BekenDetal = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`http://13.48.46.219/api/v1/courses/courses/${id}/`).then((res) =>
      setDetail(res.data)
    );
  }, []);
  console.log("dfx", detail);
  // const [onli,setOnli] = useState(false)
  return (
    <>
      <div>
        <Glav />
        <Why />
        <WereKurs />
        <Obusheni />
        <ThisKurs />
        <Sertivkat />
        <SvoiSait />
        <Mentory />
        <ProgramKurs />
      </div>
    </>
  );
};

export default BekenDetal;
