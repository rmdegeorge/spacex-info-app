import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`

`;

function Header(props) {
  return (
    <HeaderContainer>
      <Title>Space Race</Title>
      <Navbar />
    </HeaderContainer>
  );
}

export default Header;