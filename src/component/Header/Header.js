import React from 'react';
import { Button, Container,Form,FormControl,Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
  const{logout,user}=UseAuth()
    return (
        <div>
           <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand >
      <div className='brand'>
     
      </div>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className='content'>
      <Form className="serace-btn">
        <FormControl
          type="search"
          placeholder="Search Your Product"
          className="me-2"
          aria-label="Search"
        />
       
      </Form>
  
      <NavLink to='/home' className='nav-link'><li className='li-text'>Home</li></NavLink>
      <NavLink to='/cart' className='nav-link'><li className='li-text'><i class="fas fa-shopping-cart"></i></li></NavLink>
    {!user?.email? <NavLink to='/login'className='nav-link'><li className='li-text'>Login</li></NavLink>
      :<button onClick={logout} className='logout'>Logout</button>}

      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;