import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, filterByTopic }) => {
  const listOfTopics = topics.map((item) => {
    return (
      <TopicListItem
        key={item.id}
        topicId={item.id}
        title={item.title}
        filterByTopic={filterByTopic}
      />
    );
  });

  return <div className="top-nav-bar__topic-list">{listOfTopics}</div>;
};

export default TopicList;
