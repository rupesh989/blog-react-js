
import React, { Fragment, useState } from "react";
// import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function Users() {
  const [users, setUsers] = useState([
    { name: "Rupesh", age: 25, address: "pune" },
    { name: "Ajay", age: 35 },
    { name: "Abhishek", age: 15 },
    { name: "Sanjay", age: 32 },
    { name: "Virendra", age: 42 },
    {
      name: "mark",
      age: 54,
    },
  ]);
  return (
    // <div>
    // By using a JSX fragment <>...</> without HTMl elements
    <Fragment>
      <h1>User Listing is here !! </h1>
      {/* <>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </> */}

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
    /*{ {  users.map((item, i) => (
        <div key={i}>
            {item.name},{item.age},{item.address} 
            <span>{item.name},</span>
         <span>{item.age},</span>
          <span>{item.address}</span> 
         </div> 
      ))}  }*/

    //   {users.length === 5 ? (
    //     <div> yes, this is right </div>
    //   ) : (
    //     <div>No different length </div>
    //   )}
    // </div>
  );
}
export default Users;

