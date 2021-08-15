import React, { useState } from "react";
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Videos from './Videos';
import Youtube from './Youtube';
import { Grid } from "@material-ui/core";
import VideoList from "./VideoList";

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });
  console.log(selectedVideo);


  return (
    <div className="app">
      <Header onSubmit={handleSubmit} />
      <div className="app_page">
        <Sidebar />

        <Grid item xs={6}>
          <Videos video={selectedVideo} />
        </Grid>


        <Grid item xs={3}>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </Grid>

      </div>
    </div>
  );


  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        // TODO - add a new API key.
        type: 'video',
        key: 'AIzaSyCNU-dpsxNwOKROcwk5XlTIjbdtSE9mm_M',
        q: searchTerm,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}

export default App;
