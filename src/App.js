import React from "react";
import { Grid } from "@material-ui/core";
import VideoDetail from "./components/VideoDetail";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "[your google key]",
        q: searchTerm,
        // q => searchTerm
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid
        style={{ justifyContent: "center", alignItems: "center" }}
        container
        spacing={6}
      >
        <Grid item xs={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item md={12} lg={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid
              item
              md={12}
              lg={4}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
