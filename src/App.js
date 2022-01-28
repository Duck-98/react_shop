import './App.css';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Jumbotron,
  Button,
} from 'react-bootstrap';
import React, { useState } from 'react';
import Product from './components/product';
import data from './data';

function App() {
  const [shoeData, setShoeData] = useState(data);
  return (
    <>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Jumbotron className="background">
          <h1 color="white">30% Season Sale</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
      <div className="container">
        {shoeData.map((a, i) => {
          return <Product shoeData={shoeData[i]} i={i} key={i} />;
        })}
      </div>
    </>
  );
}

export default App;
