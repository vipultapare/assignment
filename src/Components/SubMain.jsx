import React, { useEffect } from "react";
import Container from "./Container";
import Aos from "aos";
import "aos/dist/aos.css";

const SubMain = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="col-span-11 p-2 ml-5" data-aos="fade-down-left">
      <Container title={"Latest"} />
    </div>
  );
};

export default SubMain;
