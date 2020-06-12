import React, { Component } from "react";
import SearchBox from "../searchBox/searchBox";
import ResultsTable from "../resultsTable/resultsTable";
import { getBugs } from "../../service/bugservices";
import "./issuesView.scss";

class IssuesView extends Component {
  state = {
    data: null,
    searchQuery: "",
    results: null,
  };

  async componentDidMount() {
    const { data } = await getBugs();
    this.setState({ data });
  }

  handleSubmit = async () => {
    console.log("clicked submit", this.state.data);
  };

  handleChange = (query) => {
    let filtered = this.state.results;
    if (query) {
      filtered = this.state.data.filter((issue) =>
        issue.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    this.setState({ searchQuery: query, results: filtered });
  };

  render() {
    return (
      <React.Fragment>
        <div className="issuesView-container">
          <form className="issuesView-form" onSubmit={this.handleSubmit}>
            <label className="issuesView-label">Search bug:</label>
            <SearchBox
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
          </form>
          {this.state.searchQuery && <ResultsTable data={this.state.results} />}
        </div>
      </React.Fragment>
    );
  }
}

export default IssuesView;
