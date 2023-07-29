import RootLayouts from "@/components/layouts/RootLayouts";
import React from "react";

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <RootLayouts>{page}</RootLayouts>;
};
