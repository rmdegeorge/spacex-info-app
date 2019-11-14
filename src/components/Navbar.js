import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
`;

const NavLink = styled(Link)`  
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  border-bottom: 2px solid #000000;

  :hover {
    border-bottom: 2px solid #ffffff;
  }
`;

function Navbar(props) {
  return (
    <NavContainer>
      <NavLink to='/Missions'>Missions</NavLink>
      <NavLink to='/Launches'>Launches</NavLink>
      <NavLink to='/Rockets'>Rockets</NavLink>
      <NavLink to='/Payloads'>Payloads</NavLink>

    </NavContainer>
  );
}

export default Navbar;