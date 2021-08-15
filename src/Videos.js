import React from "react";
import "./Videos.css";

import { Paper, Typography } from "@material-ui/core";

// Explain destructuring...
const Videos = ({ video: { id: { videoId }, snippet: { title, channelTitle, description } } }) => {
  // TODO - Spinner
  if (!videoId) return <div> </div>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ minHeight: "40vh"  , marginLeft:'10px'}}>
        <iframe
          frameBorder="0"
          width="100%"
          height='400px'
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" , marginLeft:'10px'}}>
        <Typography variant="h4">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {channelTitle}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
    </React.Fragment>
  );
}

export default Videos;