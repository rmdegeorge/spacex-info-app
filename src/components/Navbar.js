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

  }
`;

function Navbar(props) {
  return (
    <NavContainer>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Missions'>Missions</NavLink>
    </NavContainer>
  );
}

export default Navbar;