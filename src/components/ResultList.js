import React from "react";
import API from "../utils/API"
import res from "../utils/seed.json"

function ResultList(props) {
  // randomPopulate("")
  return (
    <ul className="list-group">
      {props.results.map(results => (
        <li className="list-group-item" key={results.name.first}>
          <p>{results.name.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;

function randomPopulate(query) {
  API.search(query)
    .then(res => this.setState({ results: res.data.data }))
    .catch(err => console.log(err));
};