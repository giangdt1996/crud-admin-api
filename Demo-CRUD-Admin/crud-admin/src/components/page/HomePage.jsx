import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  //Ham loadUser dung de lay du lieu tu api
  const loadUser = async () => {
    const result = await axios.get("http://localhost:8000/users");
    setData(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  //Delete
  const handleDeleteUser = async (i) => {
    await axios
      .delete(`http://localhost:8000/users/${i}`)
      .then((res) => {
        console.log(res);
        // Xóa người dùng khỏi danh sách
        const updatedData = [...data];
        updatedData.splice(i, 1);
        setData(updatedData);
      })
      .catch((err) => console.log(err));
  };

  const handlePatchUser = (i) => {
    axios
      .patch(`http://localhost:8000/users/${i}`, {
        username: "Hai",
        email: "hai.email@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Home Page</h2>

      {/** Table User */}
      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{e.id}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.age}</td>
              <td>{e.phone}</td>
              <td>
                <button className="btn btn-info">
                  <i class="fa-solid fa-eye"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={handlePatchUser(i)}
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteUser(i)}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;
