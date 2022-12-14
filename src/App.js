import React from 'react';
import { Nav, Navbar, NavDropdown, Container, Form, Button} from 'react-bootstrap';
import SelectMenu from './Components/SelectExample';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">List</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Search</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
            </Form> 
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <hr/>
        <Container>
          <SelectMenu /> 
        </Container>
      </div>
  );
}

export default App;