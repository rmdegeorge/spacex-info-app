import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {device} from '../themes/GlobalStyle';

const NavContainer = styled.nav`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  @media ${device.computer} {
    width: 50%;
    text-align: left;

  }
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

    </NavContainer>
  );
}

export default Navbar;