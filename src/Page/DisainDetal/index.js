import React from "react";
import "./index.scss";
import Why from "./why";
import WereKurs from "./werekurs";
import Obusheni from "./obucheni";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ThisKurs from "./thiskurs";
import Sertivkat from "./sertivkat";
import SvoiSait from "./delaiSvoiSait";
import Mentory from "./mentory";
import ProgramKurs from "./programKursa";
import Glav from "./glav";

const DisainDetal = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios(`http://3.83.165.209/api/v1/courses/courses/${id}/`).then((res) =>
      setDetail(res.data)
    );
  }, []);
  console.log("dfx", detail);
  return (
    <>
      <div>
        <Glav />
        <Why />
        <WereKurs el={detail} />
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

export default DisainDetal;

