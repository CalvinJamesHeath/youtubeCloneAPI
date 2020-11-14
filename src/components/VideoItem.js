import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12} style={{ alignItems: "center" }}>
      <Paper
        elevation={10}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          padding: "20px",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ alignItems: "center" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1" style={{ marginTop: "5px" }}>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};
