import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Headroom from 'react-headroom';

import {device} from '../themes/GlobalStyle';

import Navbar from './Navbar';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #ffffff;
  background-color: #000000;
  padding: 0 10% 0 10%;

  @media ${device.computer} {
    flex-direction: row;
    justify-content: center;
  }


`;
const NavLink = styled(Link)`  
  text-align: center;
  color: #ffffff;
  text-decoration: none;

  :hover {
    border-bottom: 3px solid #ffffff;
  }

`;
const Title = styled.h1`
  width: 100%;
  text-align: center;
  
  > :nth-child(1) {
    border: none;
  }

  @media ${device.computer} {
    padding: 10px;
    width: 50%;

  }

  

`;

class Header extends React.Component {
  render() {
    return (
      <Headroom>
        <HeaderContainer>
          <Title><NavLink to='/'>Space Race</NavLink></Title>
          <Navbar />
        </HeaderContainer>
      </Headroom>
    );
  };
}

export default Header;