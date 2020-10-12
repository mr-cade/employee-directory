import userEvent from "@testing-library/user-event";
import React from "react";
import API from "../utils/API"
import "./table.css"
// import res from "../utils/seed.json"

function ResultList(props) {
  const userMap = props.users.map(el => {
    return (
      <tr>
          <td scope="row">{el.image}</td>
          <td>{el.name}</td>
          <td>{el.login}</td>
          <td>{el.email}</td>
        </tr>
    )
  })
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {userMap}
      </tbody>
    </table>
  );
}

export default ResultList;