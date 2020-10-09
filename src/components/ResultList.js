import userEvent from "@testing-library/user-event";
import React from "react";
import API from "../utils/API"
import "./table.css"
// import res from "../utils/seed.json"

function ResultList(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">Image Here</td>
          <td>Name1</td>
          <td>Username1</td>
          <td>email1@test.com</td>
        </tr>
        <tr>
        <td scope="row">Image2 Here</td>
          <td>Name2</td>
          <td>Username2</td>
          <td>email2@test.com</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultList;