import React from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <Paper
        elevation={10}
        style={{
          padding: "3vw",
          marginTop: "2vw",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search..."
            // value={searchTerm}
            onChange={this.handleChange}
            // onKeyPress={onKeyPress}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
