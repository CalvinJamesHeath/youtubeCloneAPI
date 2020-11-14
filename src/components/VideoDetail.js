import React from "react";
import { Paper, Typography } from "@material-ui/core";

function VideoDetail({ video }) {
  if (!video) return <div>Search for Content!</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={10} style={{ height: "50%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={10} style={{ padding: "10px", marginBottom: "50px" }}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}

export default VideoDetail;
