import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TableHome from "../../Components/TableHome";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Footer } from "../../Components/Footer";
export default class Home extends Component {
  state = {
    title: "Pegawai",
    users: [
      {
        id: 0,
        nama: "Pat Aguirre",
        umur: 24,
        kota: "Hegins",
      },
      {
        id: 1,
        nama: "Landry Riley",
        umur: 25,
        kota: "Ryderwood",
      },
      {
        id: 2,
        nama: "Hazel Rowe",
        umur: 21,
        kota: "Castleton",
      },
      {
        id: 3,
        nama: "Snider Duke",
        umur: 34,
        kota: "Breinigsville",
      },
      {
        id: 4,
        nama: "Holder Mack",
        umur: 31,
        kota: "Morriston",
      },
      {
        id: 5,
        nama: "Jaime Pratt",
        umur: 36,
        kota: "Chicopee",
      },
      {
        id: 6,
        nama: "Flora Winters",
        umur: 31,
        kota: "Marbury",
      },
      {
        id: 7,
        nama: "Gracie Ball",
        umur: 40,
        kota: "Enlow",
      },
      {
        id: 8,
        nama: "David Foreman",
        umur: 38,
        kota: "Draper",
      },
      {
        id: 9,
        nama: "Hobbs Woodard",
        umur: 37,
        kota: "Jacumba",
      },
      {
        id: 10,
        nama: "Mercado Simmons",
        umur: 34,
        kota: "Bethany",
      },
      {
        id: 11,
        nama: "Hodge Love",
        umur: 35,
        kota: "Albrightsville",
      },
      {
        id: 12,
        nama: "Serena Griffin",
        umur: 21,
        kota: "Stagecoach",
      },
      {
        id: 13,
        nama: "Delaney England",
        umur: 38,
        kota: "Ladera",
      },
      {
        id: 14,
        nama: "Francis Mcclure",
        umur: 23,
        kota: "Wollochet",
      },
      {
        id: 15,
        nama: "Paige Hodge",
        umur: 26,
        kota: "Nicut",
      },
      {
        id: 16,
        nama: "Jamie Brock",
        umur: 27,
        kota: "Dunbar",
      },
      {
        id: 17,
        nama: "Lena Bowen",
        umur: 37,
        kota: "Tilleda",
      },
      {
        id: 18,
        nama: "Drake Mcpherson",
        umur: 22,
        kota: "Detroit",
      },
      {
        id: 19,
        nama: "Mollie Golden",
        umur: 37,
        kota: "Carrsville",
      },
      {
        id: 20,
        nama: "Rosario Jennings",
        umur: 31,
        kota: "Fostoria",
      },
      {
        id: 21,
        nama: "Valentine Maxwell",
        umur: 25,
        kota: "Eureka",
      },
      {
        id: 22,
        nama: "Dalton Hopkins",
        umur: 40,
        kota: "Franklin",
      },
      {
        id: 23,
        nama: "Christy Compton",
        umur: 34,
        kota: "Bartley",
      },
      {
        id: 24,
        nama: "Mckay Pacheco",
        umur: 23,
        kota: "Denio",
      },
    ],
  };
  render() {
    return (
      <>
        <Container fluid>
          <Navbar bg="light" variant="light">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div className="mx-5 mt-5">
            <h1>Daftar Pengguna</h1>
            <TableHome users={this.state.users} />
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}
