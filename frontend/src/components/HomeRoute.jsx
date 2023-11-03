import React from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { likes, onChange } = props;

  return (
    <div className="home-route">
      <TopNavigationBar likes={likes} onChange={onChange} />
      <PhotoList likes={likes} onChange={onChange} />
    </div>
  );
};

export default HomeRoute;
