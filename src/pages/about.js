import RootLayouts from "@/components/layouts/RootLayouts";
import React from "react";

const About = () => {
  return <div>About</div>;
};

export default About;
About.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
