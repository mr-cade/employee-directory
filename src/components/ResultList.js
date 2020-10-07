import React from "react";
import API from "../utils/API"
// import res from "../utils/seed.json"



function ResultList(props) {
  return (
    <ul className="list-group">
      {/* {nameList.map(results => (
        <li className="list-group-item" key={results.name.first}>
          <p>{results.name.title}</p>
          <p>{results.name.first}</p>
        </li>
      ))} */}

      <h1>TESTING</h1>
    </ul>
  );
}

export default ResultList;

// function populate() {
//   return res
// }

function randomPopulate(query) {
  API.search(query)
    .then(res => this.setState({ results: res.data.data }))
    .catch(err => console.log(err));
};