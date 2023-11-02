import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };

  let array = new Array(3).fill(sampleDataForPhotoListItem);
  let i = 0;
  const sampleList = array.map((item) => {
    return <PhotoListItem {...item} key={i++} />;
  });

  return <div className="App">{sampleList}</div>;
};

export default App;
