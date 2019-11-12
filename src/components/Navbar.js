import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const NavLink = styled(Link)`  
  text-align: center;
  
  :hover {
    color: red;
  }
`;

function Navbar(props) {
  return (
    <NavContainer>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Missions'>Missions</NavLink>
      <NavLink to='/Launches'>Launches</NavLink>
      <NavLink to='/Payloads'>Payloads</NavLink>

    </NavContainer>
  );
}

export default Navbar;