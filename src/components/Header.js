import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Headroom from 'react-headroom';

import Navbar from './Navbar';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #ffffff;
  background-color: #000000;
  padding: 0 10% 0 10%;

  ${props => props.visible ? null : `top: -100px;`}
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
  padding: 10px;
  width: 50%;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

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