import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [likes, setLikes] = useState(0);

  const updateLikes = (likes, likesExist) => {
    likesExist ? setLikes(++likes) : setLikes(--likes);
  };

  return (
    <div className="App">
      <HomeRoute likes={likes} onChange={updateLikes} />
      {/* <PhotoDetailsModal /> */}
    </div>
  );
};

export default App;
