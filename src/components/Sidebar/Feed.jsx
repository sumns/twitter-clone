import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post"
import "./Feed.css";
function Feed() {
  return (
    <div className="Feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      <TweetBox/>

      <Post />


    </div>
  );
}

export default Feed;
