import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
// class Bar extends React.Component {
// render() {
function Bar() {
  return (
    <ReactBootstrap.Navbar bg='light' expand='lg'>
      <ReactBootstrap.Navbar.Brand href='/landingPage'>
        BookingFinder
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
      <ReactBootstrap.Navbar.Collapse id='basic-navbar-nav'>
        <ReactBootstrap.Nav className='mr-auto'>
          <ReactBootstrap.Nav.Link href='/landingPage'>
            Home
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href='/login'>
            log-in As Custumer
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href='/loginForOwner'>
            log-in As Owner
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.NavDropdown title='more' id='basic-nav-dropdown'>
            <ReactBootstrap.NavDropdown.Item href='#action/3.1'>
              about
            </ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href='#action/3.2'>
              contact us
            </ReactBootstrap.NavDropdown.Item>
            {/* <ReactBootstrap.NavDropdown.Item href='#action/3.3'>
                Something
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href='#action/3.4'>
                Separated link
              </ReactBootstrap.NavDropdown.Item> */}
          </ReactBootstrap.NavDropdown>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Form inline>
          <ReactBootstrap.FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
          />
          <ReactBootstrap.Button variant='outline-success'>
            Search
          </ReactBootstrap.Button>
        </ReactBootstrap.Form>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}
export default Bar;