import React from "react";
import Post from "./post";
import RightSection from "./rightSection";

const Content = () => {
  return (
    <div className="container flex justify-between fluid">
      <Post />
      <RightSection />
    </div>
  );
};

export default Content;
