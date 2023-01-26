import React from "react";
import Navbar from "react-bootstrap/Navbar";
import BackButton from "../../Components/BackButton";
import { Table } from "react-bootstrap";
const Detail = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" className="ms-5">
          <BackButton />
        </Navbar.Brand>
      </Navbar>
      <div className="m-5">
        <h1>Detail Pengguna</h1>
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Umur</th>
              <th>Kota</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pat Aguirre</td>
              <td>24</td>
              <td>Hegins</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Detail;
