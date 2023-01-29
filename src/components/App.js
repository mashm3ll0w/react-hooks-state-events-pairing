import React from "react";
import video from "../data/video.js";
import VideoFrame from "./VideoFrame";
import Header from "./Header"
import CommentList from "./CommentList"


function App() {
  return (
    <div className="App">
      <VideoFrame title={video.title} embedUrl={video.embedUrl}/>
      <Header title={video.title} views={video.views} uploadDate={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
