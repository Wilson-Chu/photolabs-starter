import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topicId, title, filterByTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => filterByTopic(topicId)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
