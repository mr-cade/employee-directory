import React from "react";
import "./table.css"

function ResultList(props) {
  const userMap = props.users.map(el => {
    return (
      <tr>
          <td scope="row"><img alt="profile" src={el.image}></img></td>
          <td>{el.fName} {el.lName}</td>
          <td>{el.login}</td>
          <td>{el.email}</td>
        </tr>
    )
  })

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <button type="button">
            Photo
            </button>
          </th>
          <th>
            <button type="button">
            Name
            </button>
          </th>
          <th>
            <button type="button">
            Username
            </button>
          </th>
          <th>
            <button type="button">
            email
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* . TABLE ARRAY OF USERS INSERTED HERE */}
        {userMap}
        {/* ^ TABLE ARRAY OF USERS INSERTED HERE */}
      </tbody>
    </table>
  );
}

export default ResultList;