import userEvent from "@testing-library/user-event";
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

    <h1>{props.login}</h1>
    </ul>
  );
}

export default ResultList;