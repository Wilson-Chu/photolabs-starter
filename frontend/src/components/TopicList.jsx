import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const sampleDataForTopicList = topics;

const TopicList = () => {
  const listOfTopics = sampleDataForTopicList.map((item) => {
    return <TopicListItem key={item.id} title={item.title} />;
  });

  return <div className="top-nav-bar__topic-list">{listOfTopics}</div>;
};

export default TopicList;
