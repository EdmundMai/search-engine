import React, { Component } from "react";
import styled from "styled-components";

import SearchResults from "./components/SearchResults";

import Api from "./services/Api";

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.p`
  background: rgba(215, 44, 44, 0.4);
  font-size: 12px;
`;

const TextInput = styled.input.attrs({
  type: "text",
})`
  font-size: 15px;
  padding: 10px;
  outline: none;
  margin-bottom: 10px;
`;

const SearchButton = styled.button`
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

class App extends Component {
  state = {
    results: [],
    searchTerm: "",
    error: null,
  };

  search = searchTerm => {
    Api.query(searchTerm)
      .then(results => this.setState({ results, error: null }))
      .catch(error => this.setState({ error, results: [] }));
  };

  render() {
    return (
      <Container>
        {this.state.error && (
          <ErrorMessage>Error occurred, please try again.</ErrorMessage>
        )}
        <TextInput
          value={this.state.searchTerm}
          onChange={e => this.setState({ searchTerm: e.target.value })}
        />
        <SearchButton onClick={() => this.search(this.state.searchTerm)}>
          Search
        </SearchButton>
        <SearchResults results={this.state.results} />
      </Container>
    );
  }
}

export default App;
